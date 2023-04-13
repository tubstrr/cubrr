// Libraries
import { defineStore } from "pinia";

// Types
import * as types from "@/types";

// Composables
import * as mutate from "@/composables/mutations";
import * as check from "@/composables/checks";

export const useCubeStore = defineStore("cube", {
	state: () => ({
		solveState: <types.cubeState>[
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
		cube: <types.cubeState>[
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
		log: <types.moveLog>[]
	}),
	actions: {
		solveCross() {
			// Check orientation
			this.cube = check.orientation(this.cube);

			// Check to see if the cross is already solved
			let solved = check.cross(this.cube);
			if (typeof solved === "boolean" && solved) {
				alert("Cross is already solved");
				return [];
			}

			// Solve the cross
			const moves = ["L"];
			return moves;
		},
		clearLog() {
			this.log = [];
		},
		solveCube() {
			this.cube = this.solveState;
			this.clearLog();
		},
		addToLog(move: types.singleMove) {
			this.log.push(move);
		},
		updateCubeState(state: types.cubeState, index: number = this.log.length) {
			this.cube = state;
			this.log = this.log.slice(0, index);
		},
		rotateFace(notation: string, prime: boolean, double: boolean) {
			switch (notation) {
				case "R":
					this.cube = mutate.right(this.cube, prime, double);
					break;
				case "L":
					this.cube = mutate.left(this.cube, prime, double);
					break;
				case "U":
					this.cube = mutate.up(this.cube, prime, double);
					break;
				case "D":
					this.cube = mutate.down(this.cube, prime, double);
					break;
				case "F":
					this.cube = mutate.front(this.cube, prime, double);
					break;
				case "B":
					this.cube = mutate.back(this.cube, prime, double);
					break;
				case "M":
					this.cube = mutate.middle(this.cube, prime, double);
					break;
				case "E":
					this.cube = mutate.equator(this.cube, prime, double);
					break;
				case "S":
					this.cube = mutate.side(this.cube, prime, double);
					break;
				case "r":
					this.cube = mutate.right(this.cube, prime, double);
					this.cube = mutate.middle(this.cube, !prime, double);
					break;
				case "l":
					this.cube = mutate.left(this.cube, prime, double);
					this.cube = mutate.middle(this.cube, prime, double);
					break;
				case "u":
					this.cube = mutate.up(this.cube, prime, double);
					this.cube = mutate.equator(this.cube, !prime, double);
					break;
				case "d":
					this.cube = mutate.down(this.cube, prime, double);
					this.cube = mutate.equator(this.cube, prime, double);
					break;
				case "f":
					this.cube = mutate.front(this.cube, prime, double);
					this.cube = mutate.side(this.cube, prime, double);
					break;
				case "b":
					this.cube = mutate.back(this.cube, prime, double);
					this.cube = mutate.side(this.cube, !prime, double);
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
		}
	}
});
