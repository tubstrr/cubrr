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

export const cross = (cube: types.cubeState) => {
	const edges = whiteSideEdges(cube);
	const someWhiteSideEdgesAreBad = edges.some((color) => color === false);
	if (someWhiteSideEdgesAreBad) return false;
	return true;
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
