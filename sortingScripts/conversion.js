const F2LAlgorithms = {
	// http://www.rubiksplace.com/speedcubing/F2L-algorithms/
	// Corner on top, FL color facing side, edge colors match
	"5,2,w,o,b,2,5,o,b": "U (R U' R')", // 1
	"5,2,w,o,b,2,1,o,b": "U' R U R' U2 (R U' R')", // 3
	"5,2,w,o,b,2,3,o,b": "U' R U2' R' U2 (R U' R')", // 5
	"5,2,w,o,b,2,7,o,b": "y' R' U R U' d' (R U R') y", // 7
	"5,2,w,o,b,1,1,o,b": "y' (R' U' R) y", // 9
	"5,2,w,o,b,0,1,o,b": "d R' U' R U'(R' U' R) d'", // 11
	"5,2,w,o,b,3,1,o,b": "U' R U2' R' d (R' U' R) d'", // 13
	"5,2,w,o,b,5,1,o,b": "d R' U R U' (R' U' R) d'", // 15
	"5,2,w,o,b,5,5,o,b": "U' R U' R' U2 (R U' R')", // 31
	"5,2,w,o,b,3,3,o,b": "U' R U R' d (R' U' R) d'", // 33
	// ^^^ Corner is top right facing you. ^^^
	"3,0,w,o,b,5,1,o,b": "F R' F' R", // 2
	"3,0,w,o,b,1,1,o,b": "d R' U' R U2' (R' U R) d'", // 4
	"3,0,w,o,b,0,1,o,b": "R' F R F'", // 6
	"3,0,w,o,b,3,1,o,b": "R U' R' U d (R' U' R) d'", // 8
	"3,0,w,o,b,2,1,o,b": "(R U R')", // 10
	"3,0,w,o,b,2,3,o,b": "U' R U R' U (R U R')", // 12
	"3,0,w,o,b,2,7,o,b": "R' U2 R2 U R2' U R", // 14
	"3,0,w,o,b,2,5,o,b": "U' R U' R' U (R U R')", // 16
	"3,0,w,o,b,5,5,o,b": "d R' U R U2 (R' U R) d'", // 32
	"3,0,w,o,b,3,3,o,b": "d R' U' R d' (R U R') d'", // 34
	// ^^^ Corner is top right facing right. ^^^
	"2,8,w,o,b,2,5,o,b": "R U2' R' U' (R U R')", // 17
	"2,8,w,o,b,5,1,o,b": "y' R' U2 R U (R' U' R) y", // 18
	"2,8,w,o,b,2,1,o,b": "U R U2 R' U (R U' R')", // 19
	"2,8,w,o,b,1,1,o,b": "y' U' R' U2 R U' (R' U R) y", // 20
	"2,8,w,o,b,2,3,o,b": "U2 R U R' U (R U' R')", // 21
	"2,8,w,o,b,0,1,o,b": "y' U2 R' U' R U' (R' U R) y", // 22
	"2,8,w,o,b,2,7,o,b": "y' U R' U2 R y R U2 R' U R U' R'", // 23
	"2,8,w,o,b,3,1,o,b": "U' R U2' R' y' R' U2 R U' R' U R y", // 24
	"2,8,w,o,b,3,3,o,b": "R U' R' d (R' U R) d'", // 35
	"2,8,w,o,b,5,5,o,b": "R U R' U' R U R' U' (R U R')", // 36
	// ^^^ Corner is top right facing up. ^^^
	"5,8,w,o,b,5,1,o,b": "y' R' U' R U (R' U' R) y", // 27
	"5,8,w,o,b,1,5,o,b": "R U' R' U (R U' R')", // 29
	"5,8,w,o,b,5,5,o,b": "R U' R' U' R U R' U2 (R U' R')", // 37
	"5,8,w,o,b,3,3,o,b": "R U' R' d R' U' R U' (R' U' R) d'", // 39
	// ^^^ Corner is bottom right facing you. ^^^
	"3,6,w,o,b,1,5,o,b": "R U R' U' (R U R')", // 28
	"3,6,w,o,b,5,1,o,b": "y' R' U R U' (R' U R) y", // 30
	"3,6,w,o,b,5,5,o,b": "R U R' U2 R U' R' U(R U R')", // 38
	"3,6,w,o,b,3,3,o,b": "R U R' U' R U' R' U2 y' (R' U' R) y", // 40
	// ^^^ Corner is bottom right facing right. ^^^
	"4,2,w,o,b,5,1,o,b": "U R U' R' d' (L' U L) d", // 25
	"4,2,w,o,b,2,5,o,b": "y' U' R' U R r' U' R U M' y", // 26
	"4,2,w,o,b,3,3,o,b": "R U' R' U y' R' U2 R U2' (R' U R) y", // 41
	// ^^^ Corner is bottom right facing down. ^^^

	"2,0,w,o,b,0,3,o,b": "U R' U R2 U' R'"
	// ^^^ Custom short hands for F2L. ^^^
};

const convertedF2LAlgorithms = {};

for (const key in F2LAlgorithms) {
	const algorithm = F2LAlgorithms[key];
	const cleanedAlgorithm = algorithm.replace(/[()]/g, "");
	const arrayAlgorithm = cleanedAlgorithm.split(" ").filter((move) => move.length > 0);
	convertedF2LAlgorithms[key] = arrayAlgorithm;
}

console.log(convertedF2LAlgorithms);
