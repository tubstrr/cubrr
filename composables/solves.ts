import * as types from "@/types";
import * as search from "@/composables/search";
import * as maps from "@/composables/maps";
import { doNotation } from "@/composables/doNotation";

export const F2LMoves = (cube: types.cubeState, moves: string[] = [], lastSetCorner: string = "") => {
	// Set up recursion;
	const frozenCube = JSON.parse(JSON.stringify(cube));
	const toSolve = getF2LToSolve(frozenCube);
	// If all F2L pairs are solved, return moves;
	if (toSolve.length === 0) return moves;

	// If not, translate the cases;
	const translatedCases = translateCases(toSolve);

	// Check if any of the cases can be solved now;
	const casesThatCanBeSolvedNow = [];
	translatedCases.forEach((translatedCase) => {
		const cornerPosition = translatedCase.slice(0, 3);
		const edgePosition = translatedCase.slice(10, 13);
		const thisCase = `${cornerPosition},${edgePosition}`;
		const algorithm = maps.F2LAlgorithms[thisCase];
		if (algorithm) casesThatCanBeSolvedNow.push(translatedCase);
	});

	// If so, solve the first one;
	if (casesThatCanBeSolvedNow.length > 0) {
		const thisCase = casesThatCanBeSolvedNow[0];
		const cornerPosition = thisCase.slice(0, 3);
		const edgePosition = thisCase.slice(10, 13);
		const colors = thisCase.slice(4, 7);

		const algorithm = getF2LAlgorithm(cornerPosition, edgePosition);
		const translated = translateAlgorithm(algorithm, colors);
		moves = [...moves, ...translated];
		const newCube = executeAlgorithm(frozenCube, translated);
		return F2LMoves(newCube, moves);
	}

	// If last call set a corner, && there it's pair can't be solved
	// move the edge to the correct position;
	if (lastSetCorner !== "") {
		const findSetCorner = translatedCases.find((translatedCase) => translatedCase.includes(lastSetCorner));

		const edgePosition = findSetCorner.slice(10, 13);
		const invalidEdges = ["0,3", "3,5", "1,5", "5,3", "0,5", "1,3"];
		const edgeInPosition = !invalidEdges.includes(edgePosition);
		if (edgeInPosition) return F2LMoves(cube, moves);

		const edgeAlgorithm = getEdgePositionAlgorithm(edgePosition);
		const translated = translateAlgorithm(edgeAlgorithm, lastSetCorner);

		moves = [...moves, ...translated];
		const newCube = executeAlgorithm(frozenCube, translated);
		return F2LMoves(newCube, moves);
	}

	// If not, move the first corner to the correct position;
	const colors = translatedCases[0].slice(4, 7);
	const validCorners = ["4,2", "3,6", "5,8", "2,8", "3,0", "5,2"];
	const cornerPosition = translatedCases[0].slice(0, 3);
	const cornerInPosition = validCorners.includes(cornerPosition);
	if (cornerInPosition) return F2LMoves(cube, moves, colors);

	const cornerAlgorithm = getCornerPositionAlgorithm(cornerPosition);
	const translatedCornerAlgorithm = translateAlgorithm(cornerAlgorithm, colors);

	moves = [...moves, ...translatedCornerAlgorithm];
	const newCube = executeAlgorithm(frozenCube, translatedCornerAlgorithm);
	return F2LMoves(newCube, moves, colors);
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
const translateCases = (cases: string[]) => {
	return cases.map((pair) => {
		const color = pair.slice(-3);
		const translation = maps.colorPositionTranslations[`w,${color[0]}`];
		const corner = pair.slice(0, 3);
		const edge = pair.slice(10, 13);
		return `${translation[corner]},w,${color},${translation[edge]},${color}`;
	});
};
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
	const ignoreCases = ["4,2,w,o,b,5,5,o,b", "4,0,w,g,o,1,5,g,o", "4,6,w,r,g,0,5,r,g", "4,8,w,b,r,3,5,b,r"];
	const cases = corners
		.map((corner) => {
			const lastThree = corner.slice(-3);
			const matchingE = edges.find((edge) => edge.slice(-3) === lastThree);
			return matchingE ? `${corner},${matchingE}` : corner;
		})
		.filter((case_) => !ignoreCases.includes(case_));

	return cases;
};

const getF2LAlgorithm = (cornerPosition: string, edgePosition: string) => {
	const thisCase = `${cornerPosition},${edgePosition}`;
	return maps.F2LAlgorithms[thisCase] || [];
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
	const keys = Object.keys(maps.edgeAlgorithms);
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
		const index = maps.sortOrder(maps.edgeAlgorithms).indexOf(translated);
		whiteEdgesToSolve[index] = updated;
	});

	return whiteEdgesToSolve.filter(Boolean);
};

const translateAlgorithm = (algorithm: string, colors: string) => {
	const translated = algorithm.map((move) => {
		const movePrime = move.includes("'");
		const moveDouble = move.includes("2");
		const moveLetter = move.replaceAll("'", "").replaceAll("2", "");
		const translatedLetter = maps?.colorTranslations[colors][moveLetter];

		return translatedLetter + (moveDouble ? "2" : "") + (movePrime ? "'" : "");
	});

	return translated;
};
