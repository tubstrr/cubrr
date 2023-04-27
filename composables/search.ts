import * as types from "@/types";
import * as maps from "@/composables/maps";
import { Cube } from "~~/.nuxt/components";

export const whiteEdges = (cube: types.cubeState) => {
	const edgePosition = [1, 3, 5, 7];
	const edges = [];

	cube.forEach((face, faceIndex) => {
		face.forEach((color, index) => {
			const isEdge = edgePosition.includes(index) && color === "w";
			if (isEdge) edges.push(`${faceIndex},${index},${color}`);
		});
	});

	// edge is Face, Position, Color
	return edges.sort((a, b) => {
		return a.slice(-1) - b.slice(-1);
	});
};

export const whiteCorners = (cube: types.cubeState) => {
	const cornerPositions = [0, 2, 6, 8];
	const corners = [];

	cube.forEach((face, faceIndex) => {
		face.forEach((color, index) => {
			const isWhiteCorner = cornerPositions.includes(index) && color === "w";
			if (isWhiteCorner) corners.push(`${faceIndex},${index},${color}`);
		});
	});

	// corner is Face, Position, Color
	return corners;
};

export const middleEdges = (cube: types.cubeState, corners: string[]) => {
	const edgePosition = [1, 3, 5, 7];
	const edges = [];
	const edgesICareAbout = corners.map((corner) => corner.slice(6, corner.length));
	cube.forEach((face, faceIndex) => {
		face.forEach((color, index) => {
			const isEdge = edgePosition.includes(index) && color !== "w" && color !== "y";
			if (!isEdge) return;
			const pairPosition = maps.edges[`${faceIndex},${index}`];
			const pairColor = cube[pairPosition[0]][pairPosition[2]];
			const colors = `${color},${pairColor}`;
			const isEdgeICareAbout = edgesICareAbout.includes(colors);

			if (isEdgeICareAbout) edges.push(`${faceIndex},${index},${colors}`);
		});
	});

	return edges;
};

export const OLLCase = (cube: types.cubeState, thisCase: string = "") => {
	const yellowFace = [];
	cube[2].forEach((color, index) => {
		if (color === "y") yellowFace.push(index);
	});

	const check = [0, 1, 2];
	const checkFace = (face: number) => {
		// const faceArray = [];
		return cube[face]
			.map((color, index) => {
				if (color === "y" && check.includes(index)) return `${index}`;
				else return false;
			})
			.filter(Boolean);
		// return faceArray;
	};

	const redFace = checkFace(0);
	const greenFace = checkFace(1);
	const blueFace = checkFace(3);
	const orangeFace = checkFace(5);
	thisCase = ["y", ...yellowFace, "r", ...redFace, "g", ...greenFace, "b", ...blueFace, "o", ...orangeFace].join(",");
	return thisCase;
};

export const PLLCorner = (cube: types.cubeState, thisCase: string = "") => {
	const connerIndex = [0, 2];

	cube.forEach((face, faceIndex) => {
		face.forEach((piece, index) => {
			if (connerIndex.includes(index)) {
				const isOrange = piece === "o";
				if (!isOrange) return;
				const pairPosition = maps.cornerSiblingsMap[`${faceIndex},${index}`];
				if (checkBlueCorner(cube, pairPosition[0]) || checkBlueCorner(cube, pairPosition[1])) {
					thisCase = `${faceIndex},${index},o`;
				}
			}
		});
	});
	return thisCase;
};

export const CornersSet = (cube: types.cubeState) => {
	const RGCorner = [cube[0][2] === "r", cube[1][0] === "g"].filter(Boolean).length;
	const GOCorner = [cube[1][2] === "g", cube[5][0] === "o"].filter(Boolean).length;
	const OBCorner = [cube[5][2] === "o", cube[3][0] === "b"].filter(Boolean).length;
	const BRCorner = [cube[3][2] === "b", cube[0][0] === "r"].filter(Boolean).length;
	return [RGCorner, GOCorner, OBCorner, BRCorner].filter((corner) => corner === 2).length === 4;
};

export const checkBlueCorner = (cube: types.cubeState, position: string) => {
	const face = position.slice(0, 1);
	const index = position.slice(-1);
	const isBlue = cube[face][index] === "b";
	return isBlue;
};

export const PLLEdgeCase = (cube: types.cubeState) => {
	const red = `0,1,${cube[0][1]}`;
	const green = `1,1,${cube[1][1]}`;
	const blue = `3,1,${cube[3][1]}`;
	const orange = `5,1,${cube[5][1]}`;

	return `${red},${green},${blue},${orange}`;
};
