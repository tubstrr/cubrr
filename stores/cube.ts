// Libraries
import { defineStore } from "pinia";

// Composables
import { replaceIndex } from "@/composables/replaceIndex";
import { nextIndex } from "@/composables/nextIndex";
import { prevIndex } from "@/composables/prevIndex";
import { rotateFace } from "@/composables/rotateFace";
import { reverseFace } from "@/composables/reverseFace";
import { rotateLayer } from "@/composables/rotateLayer";

export const useCubeStore = defineStore("cube", {
	state: () => ({
		solveState: [
			// Back - 0
			["r", "r", "r", "r", "r", "r", "r", "r", "r"],
			// Left - 1
			["g", "g", "g", "g", "g", "g", "g", "g", "g"],
			// Top - 2
			["y", "y", "y", "y", "y", "y", "y", "y", "y"],
			// Right - 3
			["b", "b", "b", "b", "b", "b", "b", "b", "b"],
			// Bottom - 4
			["w", "w", "w", "w", "w", "w", "w", "w", "w"],
			// Front - 5
			["o", "o", "o", "o", "o", "o", "o", "o", "o"]
		],
		cube: [
			// Back - 0
			["r", "r", "r", "r", "r", "r", "r", "r", "r"],
			// Left - 1
			["g", "g", "g", "g", "g", "g", "g", "g", "g"],
			// Top - 2
			["y", "y", "y", "y", "y", "y", "y", "y", "y"],
			// Right - 3
			["b", "b", "b", "b", "b", "b", "b", "b", "b"],
			// Bottom - 4
			["w", "w", "w", "w", "w", "w", "w", "w", "w"],
			// Front - 5
			["o", "o", "o", "o", "o", "o", "o", "o", "o"]
		]
	}),
	actions: {
		solveCube() {
			this.cube = this.solveState;
		},
		rotateFace(notation: string, prime: boolean, double: boolean) {
			switch (notation) {
				case "R":
					this.rotateRight(prime, double);
					break;
				case "L":
					this.rotateLeft(prime, double);
					break;
				case "U":
					this.rotateUp(prime, double);
					break;
				case "D":
					this.rotateDown(prime, double);
					break;
				case "F":
					this.rotateFront(prime, double);
					break;
				case "B":
					this.rotateBack(prime, double);
					break;
				default:
					console.log("not supported at this time");
					break;
			}
		},
		rotateRight(prime: boolean, double: boolean) {
			const indexsToReplace = [2, 5, 8];
			const facesToRotate = [0, 2, 5, 4];
			const faceToRotate = 3;

			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z");
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z");
		},
		rotateLeft(prime: boolean, double: boolean) {
			const indexsToReplace = [0, 3, 6];
			const facesToRotate = [0, 2, 5, 4];
			const faceToRotate = 1;
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z", true);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z", true);
		},
		rotateUp(prime: boolean, double: boolean) {
			const indexsToReplace = [0, 1, 2];
			const facesToRotate = [0, 3, 5, 1];
			const faceToRotate = 2;
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", true);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", true);
		},
		rotateDown(prime: boolean, double: boolean) {
			const indexsToReplace = [6, 7, 8];
			const facesToRotate = [0, 3, 5, 1];
			const faceToRotate = 4;
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", true);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", true);
		},
		rotateFront(prime: boolean, double: boolean) {
			const facesToRotate = [4, 3, 2, 1];
			const faceToRotate = 5;
			const invert = false;
			const facesToReverse = [1, 3, 4];
			// const facesToReverse = [1, 3];
			const indexMap = {
				1: [8, 5, 2],
				2: [6, 7, 8],
				3: [6, 3, 0],
				4: [0, 1, 2]
			};
			this.cube = rotateLayer(this.cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap, facesToReverse);

			if (double) this.rotateFront(false, false);
			if (prime) this.rotateFront(false, true);
		},
		rotateBack(prime: boolean, double: boolean) {
			const facesToRotate = [1, 2, 3, 4];
			const faceToRotate = 0;
			const invert = false;
			// const facesToReverse = [1, 3];
			const indexMap = {
				1: [6, 3, 0],
				2: [0, 1, 2],
				3: [2, 5, 8],
				4: [8, 7, 6]
			};
			this.cube = rotateLayer(this.cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap);

			if (double) this.rotateBack(false, false);
			if (prime) this.rotateBack(false, true);
		}
	}
});
