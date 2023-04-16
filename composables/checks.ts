// Types
import * as types from "@/types";

// Stores

export const orientation = (cube: types.cubeState) => {
	if (white(cube[4][4]) && red(cube[0][4])) return cube;

	const whiteFaceRotationMap: types.IndexMapString = {
		0: "x",
		1: "z'",
		2: "x2",
		3: "z",
		5: "x'"
	};

	let whiteIs = 4;

	cube.forEach((face, index) => {
		if (white(face[4])) whiteIs = index;
	});

	if (whiteIs !== 4) {
		const notation = whiteFaceRotationMap[whiteIs];
		const prime = notation.includes("'");
		const double = notation.includes("2");
		cube = doNotation(cube, notation[0], prime, double);
	}

	let redIs = 0;
	cube.forEach((face, index) => {
		if (red(face[4])) redIs = index;
	});

	if (redIs !== 0) {
		const redFaceRotationMap: types.IndexMapString = {
			1: "y",
			3: "y'",
			5: "y2"
		};

		const notation2 = redFaceRotationMap[redIs];
		const prime2 = notation2.includes("'");
		const double2 = notation2.includes("2");
		cube = doNotation(cube, notation2[0], prime2, double2);
	}

	return cube;
};

export const F2L = (cube: types.cubeState) => {
	const pairs = F2LPairs(cube);
	const somePairsAreBad = pairs.some((pair) => pair === false);
	if (somePairsAreBad) return false;
	return true;
};

export const cross = (cube: types.cubeState) => {
	const edges = whiteSideEdges(cube);
	const someWhiteSideEdgesAreBad = edges.some((edge) => edge === false);
	if (someWhiteSideEdgesAreBad) return false;
	return true;
};

export const F2LPairs = (cube: types.cubeState) => {
	const positionsToCheck = [3, 4, 5, 6, 7, 8];
	const whiteFace = !cube[4].map((color) => white(color)).some((state) => state === false);
	const orangeFace = !cube[5]
		.map((color, index) => {
			if (positionsToCheck.includes(index)) return orange(color);
			return true;
		})
		.some((state) => state === false);
	const redFace = !cube[0]
		.map((color, index) => {
			if (positionsToCheck.includes(index)) return red(color);
			return true;
		})
		.some((state) => state === false);
	const greenFace = !cube[1]
		.map((color, index) => {
			if (positionsToCheck.includes(index)) return green(color);
			return true;
		})
		.some((state) => state === false);
	const blueFace = !cube[3]
		.map((color, index) => {
			if (positionsToCheck.includes(index)) return blue(color);
			return true;
		})
		.some((state) => state === false);
	return [whiteFace, orangeFace, redFace, greenFace, blueFace];
	// const redBlue = red(cube[0][3]) && blue(cube[3][1]);
	// const redWhiteBlue = red(cube[0][6]) && white(cube[4][8]) && blue(cube[3][8]);
	// const redGreen = red(cube[0][5]) && green(cube[1][3]);
	// const redWhiteGreen = red(cube[0][8]) && white(cube[4][6]) && green(cube[1][6]);
	// const orangeBlue = orange(cube[5][5]) && blue(cube[3][3]);
	// const orangeWhiteBlue = orange(cube[5][8]) && white(cube[4][2]) && blue(cube[3][6]);
	// const orangeGreen = orange(cube[5][3]) && green(cube[1][5]);
	// const orangeWhiteGreen = orange(cube[5][6]) && white(cube[4][0]) && green(cube[1][8]);

	// return [redBlue, redWhiteBlue, redGreen, redWhiteGreen, orangeBlue, orangeWhiteBlue, orangeGreen, orangeWhiteGreen];
};

export const whiteFaceEdges = (cube: types.cubeState) => {
	const whiteTop = white(cube[4].at(1));
	const whiteRight = white(cube[4].at(5));
	const whiteBottom = white(cube[4].at(7));
	const whiteLeft = white(cube[4].at(3));
	const whiteOnRed = white(cube[0].at(7));
	const whiteOnOrange = white(cube[5].at(7));
	const whiteOnGreen = white(cube[1].at(7));
	const whiteOnBlue = white(cube[3].at(7));

	return [whiteTop, whiteRight, whiteBottom, whiteLeft, whiteOnRed, whiteOnOrange, whiteOnGreen, whiteOnBlue];
};

export const whiteSideEdges = (cube: types.cubeState) => {
	const greenWhite = green(cube[1].at(7)) && white(cube[4].at(3));
	const blueWhite = blue(cube[3].at(7)) && white(cube[4].at(5));
	const orangeWhite = orange(cube[5].at(7)) && white(cube[4].at(7));
	const redWhite = red(cube[0].at(7)) && white(cube[4].at(1));

	return [greenWhite, blueWhite, orangeWhite, redWhite];
};

// Internal Helpers
const white = (color?: string) => color === "w";
const yellow = (color?: string) => color === "y";
const red = (color?: string) => color === "r";
const orange = (color?: string) => color === "o";
const green = (color?: string) => color === "g";
const blue = (color?: string) => color === "b";
