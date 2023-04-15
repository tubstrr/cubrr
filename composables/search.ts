import * as types from "@/types";

export const edge = (cube: types.cubeState) => {
	const colors = ["w", "o", "y", "r", "g", "b"];
	const edgePosition = [1, 3, 5, 7];
	const edges = [];

	cube.forEach((face, faceIndex) => {
		face.forEach((color, index) => {
			const isEdge = edgePosition.includes(index);
			if (isEdge) edges.push(`${faceIndex},${index},${color}`);
		});
	});

	// edge is Face, Position, Color
	return edges.sort((a, b) => {
		return a.slice(-1) - b.slice(-1);
	});
};
