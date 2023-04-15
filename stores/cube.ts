// Libraries
import { defineStore } from "pinia";

// Types
import * as types from "@/types";

// Composables
import * as check from "@/composables/checks";
import { doNotation } from "@/composables/doNotation";
import * as solve from "@/composables/solves";

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
		solveF2L() {
			// Check orientation
			this.cube = check.orientation(this.cube);

			// Check to see if the cross is already solved
			const solved = check.F2L(this.cube);
			if (typeof solved === "boolean" && solved) {
				alert("F2L is already solved");
				return [];
			}
			return solve.F2LMoves(this.cube);
		},
		solveCross() {
			// Check orientation
			this.cube = check.orientation(this.cube);

			// Check to see if the cross is already solved
			const solved = check.cross(this.cube);
			if (typeof solved === "boolean" && solved) {
				alert("Cross is already solved");
				return [];
			}

			// Solve the cross
			return solve.crossMoves(this.cube);
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
			this.cube = doNotation(this.cube, notation, prime, double);
		}
	}
});
