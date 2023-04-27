import * as types from "@/types";
import * as search from "@/composables/search";
import * as maps from "@/composables/maps";
import * as check from "@/composables/checks";
import { doNotation } from "@/composables/doNotation";

export const PLLMoves = (
	cube: types.cubeState,
	moves: string[] = [],
	depth: number = 0,
	Aa: number = 0,
	stepsToRest: number = 0
) => {
	if (depth > 100) {
		alert("No solution found, and we've gone too deep.");
		return moves;
	}
	const isSolved = check.isSolved(cube);
	if (isSolved) return moves;

	// Step 1: Check Corners
	const cornersSet = search.CornersSet(cube);

	// Step 2: Solve Corners
	if (!cornersSet) {
		// Step 2.1: Find the OB corner
		const OBCorner = search.PLLCorner(cube);

		// Step 2.2: Solve the OB corner
		if (OBCorner != "5,2,o") {
			const moveTopLayer = maps.setTopLayer[OBCorner];
			const newCube = executeAlgorithm(cube, moveTopLayer);
			return PLLMoves(newCube, moveTopLayer, depth + 1, Aa + 1);
		}

		// Step 2.3: Figure out if Aa will work
		// https://jperm.net/algs/pll - x L2 D2 L' U' L D2 L' U L' x'
		const doHeadlights = [cube[5][0] === "o", cube[0][0] === "r"];
		if (doHeadlights.includes(true)) {
			const headlightsAlgorithm = ["R", "U", "R'", "U'", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F'"];
			const shiftLeft = doHeadlights[0] ? ["U", ...headlightsAlgorithm, "U'"] : ["U2", ...headlightsAlgorithm, "U2"];
			const newCube = executeAlgorithm(cube, shiftLeft);
			return PLLMoves(newCube, [...moves, ...shiftLeft], depth + 1, 0);
		}
		if (Aa <= 2) {
			const AaAlgorithm = ["x", "L2", "D2", "L'", "U'", "L", "D2", "L'", "U", "L'", "x'"];
			const newCube = executeAlgorithm(cube, AaAlgorithm);
			return PLLMoves(newCube, [...moves, ...AaAlgorithm], depth + 1, Aa + 1);
		}
	}

	// Step 3: Check Edges
	const edgeCase = search.PLLEdgeCase(cube);
	console.log(`🚀  edgeCase:`, edgeCase);
	// if (edgeCase === solvedCase) return moves;

	// Step 3.1: Solve Edges
	const algorithm = maps.EdgePLLs[edgeCase];
	if (algorithm) return [...moves, ...algorithm];

	// Step 3.2: Figure out if we can solve the edge with 3 algorithms
	const redSolved = cube[0][1] === "r";
	const orangeSolved = cube[5][1] === "o";
	const greenSolved = cube[1][1] === "g";
	const blueSolved = cube[3][1] === "b";
	const solvedState = [redSolved, orangeSolved, greenSolved, blueSolved];
	const sidesSolved = solvedState.filter((solved) => solved).length;
	console.log(`🚀  sidesSolved:`, sidesSolved);
	console.log(`🚀  redSolved:`, redSolved);
	console.log(`🚀  blueSolved:`, blueSolved);
	console.log(`🚀  orangeSolved:`, orangeSolved);
	console.log(`🚀  greenSolved:`, greenSolved);

	if (sidesSolved === 1) {
		const solvedIndex = solvedState.indexOf(true);
		let left = null;
		switch (solvedIndex) {
			case 0:
				// RED
				break;
			case 1:
				// ORANGE
				break;
			case 2:
				// GREEN
				const left = cube[0][1] === "o";
				// M2 U' M U2 M' U' M2 -- LEFT
				// M' U M2 U M2 U M' U2 M2 -- RIGHT
				break;
			case 3:
				// BLUE
				break;
			default:
				console.log('🚀  "solvedIndex" is not a valid number');
				break;
		}
	}

	// // Helper function to find edge algorithm's
	// const code = "M2 U' M U2 M' U' M2";
	// const codeArray = code.split(" ");
	// const solvedCases = ["0,1,r,1,1,g,3,1,b,5,1,o", "0,1,g,1,1,o,3,1,r,5,1,b"];

	// if (solvedCases.includes(edgeCase) && stepsToRest > 0) {
	// 	const finalCase = {};
	// 	let newCode = code;
	// 	for (let i = 0; i < stepsToRest - 2; i++) {
	// 		newCode = newCode + " " + code;
	// 	}
	// 	const newCodeArray = newCode.split(" ");
	// 	let newCube = executeAlgorithm(cube, newCodeArray);
	// 	// base case
	// 	finalCase[search.PLLEdgeCase(newCube)] = codeArray;
	// 	// console.log(search.OLLCase(newCube));
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U
	// 	finalCase[search.PLLEdgeCase(newCube)] = `U' ${code}`.split(" ");
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U2
	// 	finalCase[search.PLLEdgeCase(newCube)] = `U2 ${code}`.split(" ");
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U'
	// 	finalCase[search.PLLEdgeCase(newCube)] = `U ${code}`.split(" ");
	// 	// newCube = executeAlgorithm(newCube, ["U"]);
	// 	console.log(`🚀  finalCase:`, finalCase);
	// 	return [];
	// }

	// const newCube = executeAlgorithm(cube, codeArray);
	// moves = [...moves, ...codeArray];
	// return PLLMoves(newCube, moves, depth + 1, 0, stepsToRest + 1);

	return PLLMoves(cube, moves, depth + 1, 0);
};

export const OLLMoves = (cube: types.cubeState, moves: string[] = [], stepsToRest: number = 0) => {
	const ollCase = search.OLLCase(cube);
	const algorithm = maps.OLLs[ollCase];
	if (algorithm) return [...moves, ...algorithm];
	else {
		const flick = ["R", "U", "R'", "U", "R", "U2", "R'"];
		const newCube = executeAlgorithm(cube, flick);
		return OLLMoves(newCube, [...moves, ...flick]);
	}

	// OLD CODE TO GENERATE THE OLL's
	// const solvedCase = "y,0,1,2,3,4,5,6,7,8,r,g,b,o";
	// const code = "R U R' U' M' U R U' r'";
	// const codeArray = code.split(" ");

	// const ollCase = search.OLLCase(cube);

	// if (ollCase === solvedCase && stepsToRest > 0) {
	// 	const finalCase = {};
	// 	let newCode = code;
	// 	for (let i = 0; i < stepsToRest - 2; i++) {
	// 		newCode = newCode + " " + code;
	// 	}
	// 	const newCodeArray = newCode.split(" ");
	// 	let newCube = executeAlgorithm(cube, newCodeArray);
	// 	// base case
	// 	finalCase[search.OLLCase(newCube)] = codeArray;
	// 	// console.log(search.OLLCase(newCube));
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U
	// 	finalCase[search.OLLCase(newCube)] = `U' ${code}`.split(" ");
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U2
	// 	finalCase[search.OLLCase(newCube)] = `U2 ${code}`.split(" ");
	// 	newCube = executeAlgorithm(newCube, ["U"]);
	// 	// U'
	// 	finalCase[search.OLLCase(newCube)] = `U ${code}`.split(" ");
	// 	// newCube = executeAlgorithm(newCube, ["U"]);

	// 	console.log(`🚀  finalCase:`, finalCase);
	// 	return [];
	// }

	// const newCube = executeAlgorithm(cube, codeArray);
	// moves = [...moves, ...codeArray];
	// return OLLMoves(newCube, moves, stepsToRest + 1);

	// const algorithm = maps.OLLs[ollCase];
	// if (algorithm) return [...moves, ...algorithm];
	return [];
};

export const F2LMoves = (
	cube: types.cubeState,
	moves: string[] = [],
	depth: number = 0,
	lastSetCorner: string = ""
) => {
	// Set up recursion;
	const frozenCube = JSON.parse(JSON.stringify(cube));
	const toSolve = getF2LToSolve(frozenCube);
	// If all F2L pairs are solved, return moves;
	if (toSolve.length === 0) return moves;

	// debugger
	if (depth > 500) {
		alert("no solution found, and we've entered an infinite loop :(");
		return moves;
	}

	// If not, translate the cases;
	const translatedCases = translateCases(toSolve);

	// Check if any of the cases can be solved now;
	const casesThatCanBeSolvedNow = [];
	translatedCases.forEach((translatedCase) => {
		const cornerPosition = translatedCase.slice(0, 3);
		const edgePosition = translatedCase.slice(10, 13);
		const thisCase = `${cornerPosition},${edgePosition}`;
		const algorithm = maps.F2LAlgorithms[thisCase];
		if (algorithm) casesThatCanBeSolvedNow.push(translatedCase);
	});

	// If so, solve the first one;
	if (casesThatCanBeSolvedNow.length > 0) {
		const thisCase = casesThatCanBeSolvedNow[0];
		const cornerPosition = thisCase.slice(0, 3);
		const edgePosition = thisCase.slice(10, 13);
		const colors = thisCase.slice(4, 7);

		const algorithm = getF2LAlgorithm(cornerPosition, edgePosition);
		const translated = translateAlgorithm(algorithm, colors);
		moves = [...moves, ...translated];
		const newCube = executeAlgorithm(frozenCube, translated);
		return F2LMoves(newCube, moves, depth + 1, "");
	}

	// If last call set a corner, && there it's pair can't be solved
	// move the edge to the correct position;
	if (lastSetCorner !== "") {
		const findSetCorner = translatedCases.find((translatedCase) => translatedCase.includes(lastSetCorner));

		const edgePosition = findSetCorner.slice(10, 13);
		const invalidEdges = ["0,3", "3,5", "1,5", "5,3", "0,5", "1,3"];
		const edgeInPosition = !invalidEdges.includes(edgePosition);
		if (edgeInPosition) return F2LMoves(cube, moves, depth + 1, "");

		const edgeAlgorithm = getEdgePositionAlgorithm(edgePosition);
		const translated = translateAlgorithm(edgeAlgorithm, lastSetCorner);

		moves = [...moves, ...translated];
		const newCube = executeAlgorithm(frozenCube, translated);
		return F2LMoves(newCube, moves, depth + 1, "");
	}

	// If not, move the first corner to the correct position;
	const colors = translatedCases[0].slice(4, 7);
	const validCorners = ["4,2", "3,6", "5,8", "2,8", "3,0", "5,2"];
	const cornerPosition = translatedCases[0].slice(0, 3);
	const cornerInPosition = validCorners.includes(cornerPosition);
	if (cornerInPosition) return F2LMoves(cube, moves, depth + 1, colors);

	const cornerAlgorithm = getCornerPositionAlgorithm(cornerPosition);
	const translatedCornerAlgorithm = translateAlgorithm(cornerAlgorithm, colors);

	moves = [...moves, ...translatedCornerAlgorithm];
	const newCube = executeAlgorithm(frozenCube, translatedCornerAlgorithm);
	return F2LMoves(newCube, moves, depth + 1, colors);
};

export const crossMoves = (cube: types.cubeState, moves: string[] = [], depth: number = 0) => {
	const frozenCube = JSON.parse(JSON.stringify(cube));
	const toSolve = getEdgesToSolve(frozenCube);
	console.log(`🚀  toSolve:`, toSolve);
	if (depth > 500) {
		alert("No solution found, and we've entered an infinite loop :(");
		return moves;
	}
	if (toSolve.length === 0) return moves;

	const algorithm = getAlgorithm(toSolve[0]);
	console.log(`🚀  algorithm:`, algorithm);
	moves = [...moves, ...algorithm];

	const newCube = executeAlgorithm(frozenCube, algorithm);
	return crossMoves(newCube, moves, depth + 1);
};

// General
const executeAlgorithm = (cube: types.cubeState, algorithm: string[]) => {
	algorithm.forEach((move) => {
		const prime = move.includes("'");
		const double = move.includes("2");
		cube = doNotation(cube, move[0], prime, double);
	});
	return cube;
};

// F2L Specific
const translateCases = (cases: string[]) => {
	return cases.map((pair) => {
		const color = pair.slice(-3);
		const translation = maps.colorPositionTranslations[`w,${color[0]}`];
		const corner = pair.slice(0, 3);
		const edge = pair.slice(10, 13);
		return `${translation[corner]},w,${color},${translation[edge]},${color}`;
	});
};
const getF2LToSolve = (cube: types.cubeState) => {
	const corners = search.whiteCorners(cube).map((corner) => {
		const siblings = maps.cornerSiblingsMap[corner.slice(0, 3)];
		siblings.forEach((sibling) => {
			const siblingColor = cube[sibling[0]][sibling[2]];
			corner = `${corner},${siblingColor}`;
		});
		return corner;
	});

	const edges = search.middleEdges(cube, corners);
	const ignoreCases = ["4,2,w,o,b,5,5,o,b", "4,0,w,g,o,1,5,g,o", "4,6,w,r,g,0,5,r,g", "4,8,w,b,r,3,5,b,r"];
	const cases = corners
		.map((corner) => {
			const lastThree = corner.slice(-3);
			console.log(`🚀  lastThree:`, lastThree);
			const matchingE = edges.find((edge) => edge.slice(-3) === lastThree);
			return matchingE ? `${corner},${matchingE}` : false;
		})
		.filter(Boolean)
		.filter((case_) => !ignoreCases.includes(case_));

	return cases;
};

const getF2LAlgorithm = (cornerPosition: string, edgePosition: string) => {
	const thisCase = `${cornerPosition},${edgePosition}`;
	console.log(`🚀  thisCase:`, thisCase);
	return maps.F2LAlgorithms[thisCase] || [];
};

const getCornerPositionAlgorithm = (position: string) => {
	switch (position) {
		case "4,0":
		case "1,8":
		case "5,6":
			return ["L'", "U'", "L"];
		case "4,6":
		case "0,8":
		case "1,6":
			return ["L", "U2", "L'"];
		case "4,8":
		case "0,6":
		case "3,8":
			return ["R'", "U2", "R", "U'"];
		case "2,0":
		case "1,0":
		case "0,2":
			return ["U2"];
		case "2,2":
		case "0,0":
		case "3,2":
			return ["U"];
		case "2,6":
		case "5,0":
		case "1,2":
			return ["U'"];
		default:
			console.error("No algorithm for this corner position");
			return [];
			break;
	}
};

const getEdgePositionAlgorithm = (position: string) => {
	switch (position) {
		case "0,3":
		case "3,5":
			return ["R'", "U", "R"];
		case "0,5":
		case "1,3":
			return ["U", "L", "U", "L'", "U'"];
		case "1,5":
		case "5,3":
			return ["L'", "U'", "L", "U"];
		default:
			console.error("No algorithm for this edge position");
			return [];
	}
};

// Cross Specific
const getAlgorithm = (pair: string) => {
	const colors = pair.slice(4);
	const position = pair.slice(0, 3);
	const algorithm = maps.edgeAlgorithms[position];
	return translateAlgorithm(algorithm, colors);
};

const getEdgesToSolve = (cube: types.cubeState) => {
	const ignore = ["4,1,w,o", "4,3,w,g", "4,5,w,b", "4,7,w,r"];
	const edges = search.whiteEdges(cube);
	const whiteEdgesToSolve = [];
	edges.forEach((edge) => {
		const position = edge.slice(0, 3);
		const pairPosition = maps.edges[position];
		const pairColor = cube[pairPosition[0]][pairPosition[2]].slice(-1);
		const pair = `${edge},${pairColor}`;

		if (ignore.includes(pair)) return;

		const translated = maps.colorPositionTranslations[`w,${pairColor}`][position];
		const updated = `${translated},w,${pairColor}`;
		const index = maps.sortOrder(maps.edgeAlgorithms).indexOf(translated);
		whiteEdgesToSolve[index] = updated;
	});

	return whiteEdgesToSolve.filter(Boolean);
};

const translateAlgorithm = (algorithm: string, colors: string) => {
	const translated = algorithm.map((move) => {
		const movePrime = move.includes("'");
		const moveDouble = move.includes("2");
		const moveLetter = move.replaceAll("'", "").replaceAll("2", "");
		const translatedLetter = maps?.colorTranslations[colors][moveLetter];

		return translatedLetter + (moveDouble ? "2" : "") + (movePrime ? "'" : "");
	});

	return translated;
};
