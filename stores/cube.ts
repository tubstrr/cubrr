// Libraries
import { defineStore } from "pinia";

// Composables
import { replaceIndex } from "@/composables/replaceIndex";
import { nextIndex } from "@/composables/nextIndex";
import { prevIndex } from "@/composables/prevIndex";
import { rotateFace } from "@/composables/rotateFace";
import { reverseFace } from "@/composables/reverseFace";
import { rotateLayer } from "@/composables/rotateLayer";

type face = string[]; //array of cells
type cubeState = face[]; //array of faces
type singleMove = { stringNotation: string; state: cubeState };
type moveLog = singleMove[];

export const useCubeStore = defineStore("cube", {
	state: () => ({
		solveState: <cubeState>[
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
		cube: <cubeState>[
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
		log: <moveLog>[]
	}),
	actions: {
		clearLog() {
			this.log = [];
		},
		solveCube() {
			this.cube = this.solveState;
			this.clearLog();
		},
		updateCubeState(state: cubeState, index: number = this.log.length) {
			this.cube = state;
			this.log = this.log.slice(0, index);
		},
		rotateFace(notation: string, prime: boolean, double: boolean) {
			const stringNotation = notation + (prime ? "'" : "") + (double ? "2" : "");
			this.log.push({ stringNotation, state: this.cube });
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
				case "M":
					this.rotateMiddle(prime, double);
					break;
				case "E":
					this.rotateEquator(prime, double);
					break;
				case "S":
					this.rotateSide(prime, double);
					break;
				case "r":
					this.rotateRight(prime, double);
					this.rotateMiddle(!prime, double);
					break;
				case "l":
					this.rotateLeft(prime, double);
					this.rotateMiddle(prime, double);
					break;
				case "u":
					this.rotateUp(prime, double);
					this.rotateEquator(!prime, double);
					break;
				case "d":
					this.rotateDown(prime, double);
					this.rotateEquator(prime, double);
					break;
				case "f":
					this.rotateFront(prime, double);
					this.rotateSide(prime, double);
					break;
				case "b":
					this.rotateBack(prime, double);
					this.rotateSide(!prime, double);
					break;
				case "x":
					this.rotateFace("r", prime, double);
					this.rotateFace("L", !prime, double);
					break;
				case "y":
					this.rotateFace("u", prime, double);
					this.rotateFace("D", !prime, double);
					break;
				case "z":
					this.rotateFace("f", prime, double);
					this.rotateFace("B", !prime, double);
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
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", false);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", false);
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
			const indexMap = {
				1: [6, 3, 0],
				2: [0, 1, 2],
				3: [2, 5, 8],
				4: [8, 7, 6]
			};
			this.cube = rotateLayer(this.cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap);

			if (double) this.rotateBack(false, false);
			if (prime) this.rotateBack(false, true);
		},
		rotateMiddle(prime: boolean, double: boolean) {
			const indexsToReplace = [1, 4, 7];
			const facesToRotate = [0, 2, 5, 4];
			const faceToRotate = -1;
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z", true);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "z", true);
		},
		rotateEquator(prime: boolean, double: boolean) {
			const indexsToReplace = [3, 4, 5];
			const facesToRotate = [0, 3, 5, 1];
			const faceToRotate = -1;
			this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", false);
			if (double) this.cube = rotateLayer(this.cube, indexsToReplace, facesToRotate, faceToRotate, prime, "x", false);
		},
		rotateSide(prime: boolean, double: boolean) {
			const facesToRotate = [4, 3, 2, 1];
			const faceToRotate = -1;
			const invert = false;
			// const facesToReverse = [0, 1, 2];
			// const facesToReverse = [1, 3];
			const indexMap = {
				1: [7, 4, 1],
				2: [3, 4, 5],
				3: [1, 4, 7],
				4: [5, 4, 3]
			};
			this.cube = rotateLayer(this.cube, [], facesToRotate, faceToRotate, false, "y", invert, indexMap, []);

			if (double) this.rotateSide(false, false);
			if (prime) this.rotateSide(false, true);
		}
	}
});
