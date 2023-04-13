// types
import * as types from "@/types";

// Composables
import { replaceIndex } from "@/composables/replaceIndex";
import { nextIndex } from "@/composables/nextIndex";
import { prevIndex } from "@/composables/prevIndex";
import { rotateFace } from "@/composables/rotateFace";
import { reverseFace } from "@/composables/reverseFace";
import { rotateLayer } from "@/composables/rotateLayer";

export const right = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [2, 5, 8];
	const facesToRotate = [0, 2, 5, 4];
	const faceToRotate = 3;

	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z");
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z");
	return cube;
};
export const left = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [0, 3, 6];
	const facesToRotate = [0, 2, 5, 4];
	const faceToRotate = 1;
	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z", true);
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z", true);
	return cube;
};

export const up = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [0, 1, 2];
	const facesToRotate = [0, 3, 5, 1];
	const faceToRotate = 2;
	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", true);
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", true);
	return cube;
};

export const down = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [6, 7, 8];
	const facesToRotate = [0, 3, 5, 1];
	const faceToRotate = 4;
	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", false);
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", false);
	return cube;
};

export const front = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const facesToRotate = [4, 3, 2, 1];
	const faceToRotate = 5;
	const invert = false;
	const facesToReverse = [1, 3, 4];
	const indexMap = {
		1: [8, 5, 2],
		2: [6, 7, 8],
		3: [6, 3, 0],
		4: [0, 1, 2]
	};
	cube = rotateLayer(cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap, facesToReverse);

	if (double) cube = front(cube, false, false);
	if (prime) cube = front(cube, false, true);
	return cube;
};

export const back = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const facesToRotate = [1, 2, 3, 4];
	const faceToRotate = 0;
	const invert = false;
	const indexMap = {
		1: [6, 3, 0],
		2: [0, 1, 2],
		3: [2, 5, 8],
		4: [8, 7, 6]
	};
	cube = rotateLayer(cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap, []);

	if (double) cube = back(cube, false, false);
	if (prime) cube = back(cube, false, true);
	return cube;
};

export const middle = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [1, 4, 7];
	const facesToRotate = [0, 2, 5, 4];
	const faceToRotate = -1;
	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z", true);
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "z", true);
	return cube;
};

export const equator = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const indexesToReplace = [3, 4, 5];
	const facesToRotate = [0, 3, 5, 1];
	const faceToRotate = -1;
	cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", false);
	if (double) cube = rotateLayer(cube, indexesToReplace, facesToRotate, faceToRotate, prime, "x", false);
	return cube;
};

export const side = (cube: types.cubeState, prime: boolean, double: boolean) => {
	const facesToRotate = [4, 3, 2, 1];
	const faceToRotate = -1;
	const invert = false;
	const indexMap = {
		1: [7, 4, 1],
		2: [3, 4, 5],
		3: [1, 4, 7],
		4: [5, 4, 3]
	};
	cube = rotateLayer(cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap, []);

	if (double) cube = side(cube, false, false);
	if (prime) cube = side(cube, false, true);
	return cube;
};
