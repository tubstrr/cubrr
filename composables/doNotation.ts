import * as types from "@/types";
import * as mutate from "@/composables/mutations";

export const doNotation = (cube: types.cubeState, notation: string, prime: boolean, double: boolean) => {
	switch (notation) {
		case "R":
			cube = mutate.right(cube, prime, double);
			break;
		case "L":
			cube = mutate.left(cube, prime, double);
			break;
		case "U":
			cube = mutate.up(cube, prime, double);
			break;
		case "D":
			cube = mutate.down(cube, prime, double);
			break;
		case "F":
			cube = mutate.front(cube, prime, double);
			break;
		case "B":
			cube = mutate.back(cube, prime, double);
			break;
		case "M":
			cube = mutate.middle(cube, prime, double);
			break;
		case "E":
			cube = mutate.equator(cube, prime, double);
			break;
		case "S":
			cube = mutate.side(cube, prime, double);
			break;
		case "r":
			cube = mutate.right(cube, prime, double);
			cube = mutate.middle(cube, !prime, double);
			break;
		case "l":
			cube = mutate.left(cube, prime, double);
			cube = mutate.middle(cube, prime, double);
			break;
		case "u":
			cube = mutate.up(cube, prime, double);
			cube = mutate.equator(cube, !prime, double);
			break;
		case "d":
			cube = mutate.down(cube, prime, double);
			cube = mutate.equator(cube, prime, double);
			break;
		case "f":
			cube = mutate.front(cube, prime, double);
			cube = mutate.side(cube, prime, double);
			break;
		case "b":
			cube = mutate.back(cube, prime, double);
			cube = mutate.side(cube, !prime, double);
			break;
		case "x":
			cube = doNotation(cube, "r", prime, double);
			cube = doNotation(cube, "L", !prime, double);
			break;
		case "y":
			cube = doNotation(cube, "u", prime, double);
			cube = doNotation(cube, "D", !prime, double);
			break;
		case "z":
			cube = doNotation(cube, "f", prime, false);
			cube = doNotation(cube, "B", !prime, false);
			if (double) {
				cube = doNotation(cube, "f", prime, false);
				cube = doNotation(cube, "B", !prime, false);
			}
			break;
		default:
			console.log("not supported at this time");
			break;
	}

	return cube;
};
