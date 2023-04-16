import * as types from "@/types";
import * as search from "@/composables/search";
import * as maps from "@/composables/maps";
import { doNotation } from "@/composables/doNotation";

export const F2LMoves = (cube: types.cubeState, moves: string[] = []) => {
	const frozenCube = JSON.parse(JSON.stringify(cube));
	const toSolve = getF2LToSolve(frozenCube);
	const justOrangeBlue = toSolve.filter((pair) => pair.includes("o,b"));
	const justOrangeBlueAlgorithm = getF2LAlgorithm(justOrangeBlue[0]);
	const cornerPosition = justOrangeBlue[0].slice(0, 3);
	const valideCorners = ["4,2", "3,6", "5,8", "2,8", "3,0", "5,2"];
	const cornerInPosition = valideCorners.includes(cornerPosition);

	const invalidEdges = ["0,3", "3,5", "0,5", "1,3", "1,5", "5,3"];
	const edgePosition = justOrangeBlue[0].slice(10, 13);
	const edgeInPosition = !invalidEdges.includes(edgePosition);

	// getEdgePositionAlgorithm;
	const canSolve = cornerInPosition && edgeInPosition && justOrangeBlueAlgorithm.length > 0;
	if (canSolve) return [...moves, ...justOrangeBlueAlgorithm];

	if (cornerInPosition && !edgeInPosition) {
		const edgeAlgorithm = getEdgePositionAlgorithm(edgePosition);
		moves = [...moves, ...edgeAlgorithm];
		const newCube = executeAlgorithm(frozenCube, edgeAlgorithm);
		return F2LMoves(newCube, moves);
	} else {
		const positionCorner = getCornerPositionAlgorithm(cornerPosition);
		moves = [...moves, ...positionCorner];

		const newCube = executeAlgorithm(frozenCube, positionCorner);
		return F2LMoves(newCube, moves);
	}

	// MAGIC SCRAMBLE - DON'T DELETE
	// R R' F D L B2 R' R D D2 U B L R U2 U2 R2 R D2 B U2 B' F2 F' L2
	// console.log(`🚀  toSolve:`, toSolve);
	// console.log(`🚀  justOrangeBlueAlgorithm:`, justOrangeBlueAlgorithm);
	// if (justOrangeBlueAlgorithm.length > 0) return [justOrangeBlueAlgorithm];
	// else return [];
	// if (toSolve.length === 0) return moves;

	// const algorithm = getF2LAlgorithm(toSolve[0]);
	// moves = [...moves, ...algorithm];

	// const newCube = executeAlgorithm(frozenCube, algorithm);
	// return F2LMoves(newCube, moves);
};

export const crossMoves = (cube: types.cubeState, moves: string[] = []) => {
	const frozenCube = JSON.parse(JSON.stringify(cube));
	const toSolve = getEdgesToSolve(frozenCube);
	if (toSolve.length === 0) return moves;

	const algorithm = getAlgorithm(toSolve[0]);
	moves = [...moves, ...algorithm];

	const newCube = executeAlgorithm(frozenCube, algorithm);
	return crossMoves(newCube, moves);
};

// General
const executeAlgorithm = (cube: types.cubeState, algorithm: string[]) => {
	algorithm.forEach((move) => {
		const prime = move.includes("'");
		const double = move.includes("2");
		cube = doNotation(cube, move[0], prime, double);
	});
	return cube;
};

// F2L Specific
const getF2LToSolve = (cube: types.cubeState) => {
	const corners = search.whiteCorners(cube).map((corner) => {
		const siblings = maps.cornerSiblingsMap[corner.slice(0, 3)];
		siblings.forEach((sibling) => {
			const siblingColor = cube[sibling[0]][sibling[2]];
			corner = `${corner},${siblingColor}`;
		});
		return corner;
	});

	const edges = search.middleEdges(cube, corners);

	return corners.map((corner) => {
		const lastThree = corner.slice(-3);
		const matchingE = edges.find((edge) => edge.slice(-3) === lastThree);
		return matchingE ? `${corner},${matchingE}` : corner;
	});
};

const getF2LAlgorithm = (pair: string) => {
	return maps.F2LAlgorithms[pair] || [];
};

const getCornerPositionAlgorithm = (position: string) => {
	switch (position) {
		case "4,0":
		case "1,8":
		case "5,6":
			return ["L'", "U'", "L"];
		case "4,6":
		case "0,8":
		case "1,6":
			return ["L", "U2", "L'"];
		case "4,8":
		case "0,6":
		case "3,8":
			return ["R'", "U2", "R", "U'"];
		case "2,0":
		case "1,0":
		case "0,2":
			return ["U2"];
		case "2,2":
		case "0,0":
		case "3,2":
			return ["U"];
		case "2,6":
		case "5,0":
		case "1,2":
			return ["U'"];
		default:
			console.error("No algorithm for this corner position");
			return [];
			break;
	}
};

const getEdgePositionAlgorithm = (position: string) => {
	switch (position) {
		case "0,3":
		case "3,5":
			return ["R'", "U", "R"];
		case "0,5":
		case "1,3":
			return ["U", "L", "U", "L'", "U'"];
		case "1,5":
		case "5,3":
			return ["L'", "U'", "L", "U"];
		default:
			console.error("No algorithm for this edge position");
			return [];
	}
};

// Cross Specific
const getAlgorithm = (pair: string) => {
	const colors = pair.slice(4);
	const position = pair.slice(0, 3);
	const algorithm = maps.edgeAlgorithms[position];
	return translateAlgorithm(algorithm, colors);
};

const getEdgesToSolve = (cube: types.cubeState) => {
	const ignore = ["4,1,w,o", "4,3,w,g", "4,5,w,b", "4,7,w,r"];
	const edges = search.whiteEdges(cube);
	const whiteEdgesToSolve = [];
	edges.forEach((edge) => {
		const position = edge.slice(0, 3);
		const pairPosition = maps.edges[position];
		const pairColor = cube[pairPosition[0]][pairPosition[2]].slice(-1);
		const pair = `${edge},${pairColor}`;

		if (ignore.includes(pair)) return;

		const translated = maps.colorPositionTranslations[`w,${pairColor}`][position];
		const updated = `${translated},w,${pairColor}`;
		const test = sortOrder.indexOf(translated);
		whiteEdgesToSolve[test] = updated;
	});

	return whiteEdgesToSolve.filter(Boolean);
};

const translateAlgorithm = (algorithm, colors) => {
	return algorithm.map((move) => {
		const movePrime = move.includes("'");
		const moveDouble = move.includes("2");
		const moveLetter = move.replace(/['2]/g, "");
		const translatedLetter = maps.colorTranslations[colors][moveLetter] || moveLetter;

		return translatedLetter + (moveDouble ? "2" : "") + (movePrime ? "'" : "");
	});
};
