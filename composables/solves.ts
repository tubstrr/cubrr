import * as types from "@/types";
import * as search from "@/composables/search";
import * as maps from "@/composables/maps";
import { doNotation } from "@/composables/doNotation";

export const crossMoves = (cube: types.cubeState, moves: string[] = []) => {
	const toSolve = getEdgesToSolve(cube);
	if (toSolve.length === 0) return moves;

	const algorithm = getAlgorithm(toSolve[0]);
	moves = [...moves, ...algorithm];

	const newCube = executeAlgorithm(cube, algorithm);
	return crossMoves(newCube, moves);
};

const executeAlgorithm = (cube: types.cubeState, algorithm: string[]) => {
	algorithm.forEach((move) => {
		const prime = move.includes("'");
		const double = move.includes("2");
		cube = doNotation(cube, move[0], prime, double);
	});
	return cube;
};

const getAlgorithm = (pair: string) => {
	const colors = pair.slice(4);
	const position = pair.slice(0, 3);
	const algorithm = maps.edgeAlgorithms[position];
	return translateAlgorithm(algorithm, colors);
};

const getEdgesToSolve = (cube: types.cubeState) => {
	const ignore = ["4,1,w,o", "4,3,w,g", "4,5,w,b", "4,7,w,r"];
	const edges = search.edge(cube);
	const whiteEdges = edges.filter((edge) => edge.slice(-1) === "w");
	const whiteEdgesToSolve = [];
	whiteEdges.forEach((edge) => {
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
