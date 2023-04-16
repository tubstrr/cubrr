import * as types from "@/types";
import * as maps from "@/composables/maps";

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
	const cornerPosition = [0, 2, 6, 8];
	const corners = [];

	cube.forEach((face, faceIndex) => {
		face.forEach((color, index) => {
			const isWhiteCorner = cornerPosition.includes(index) && color === "w";
			if (isWhiteCorner) corners.push(`${faceIndex},${index},${color}`);
		});
	});

	// corner is Face, Position, Color
	return corners.sort((a, b) => {
		return a.slice(-1) - b.slice(-1);
	});
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
