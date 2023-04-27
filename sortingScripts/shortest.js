// edgeAlgorithms = {
// 	"0,1": ["U", "l'", "U", "l"],
// 	"0,3": ["D", "R", "D'"],
// 	"0,5": ["D'", "L'", "D"],
// 	"0,7": ["B", "D", "R", "D'"],
// 	"1,1": ["r", "U'", "r'"],
// 	"1,3": ["r2", "B'", "r2"],
// 	"1,5": ["F'"],
// 	"1,7": ["L'", "F'"],
// 	"2,1": ["U2", "F2"],
// 	"2,3": ["U'", "F2"],
// 	"2,5": ["U", "F2"],
// 	"2,7": ["F2"],
// 	"3,1": ["l'", "U", "l"],
// 	"3,3": ["F"],
// 	"3,5": ["l2", "B", "l2"],
// 	"3,7": ["R", "F"],
// 	"4,1": [],
// 	"4,3": ["D", "F", "D'", "F'"],
// 	"4,5": ["D'", "F'", "D", "F"],
// 	"4,7": ["M", "U", "M2", "U", "M"],
// 	"5,1": ["F", "D", "R'", "D'"],
// 	"5,3": ["D'", "L", "D"],
// 	"5,5": ["D", "R'", "D'"],
// 	"5,7": ["D", "R", "D'", "F"]
// };

const F2LAlgorithms = {
	"3,0,2,1": ["R", "U", "R'"],
	"5,2,2,5": ["U", "R", "U'", "R'"],
	"3,0,5,1": ["F", "R'", "F'", "R"],
	"3,0,0,1": ["R'", "F", "R", "F'"],
	"5,2,1,1": ["F'", "U'", "F"],
	"2,0,0,3": ["U", "R'", "U", "R2", "U'", "R'"],
	"3,0,2,7": ["R'", "U2", "R2", "U", "R2'", "U", "R"],
	"2,8,2,5": ["R", "U2'", "R'", "U'", "R", "U", "R'"],
	"5,8,1,5": ["R", "U'", "R'", "U", "R", "U'", "R'"],
	"3,6,1,5": ["R", "U", "R'", "U'", "R", "U", "R'"],
	"5,2,2,1": ["U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
	"5,2,2,3": ["U'", "R", "U2'", "R'", "U2", "R", "U'", "R'"],
	"5,2,5,5": ["U'", "R", "U'", "R'", "U2", "R", "U'", "R'"],
	"3,0,2,3": ["U'", "R", "U", "R'", "U", "R", "U", "R'"],
	"3,0,2,5": ["U'", "R", "U'", "R'", "U", "R", "U", "R'"],
	"2,8,2,1": ["U", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,2,3": ["U2", "R", "U", "R'", "U", "R", "U'", "R'"],
	"2,8,3,3": ["R", "U'", "R'", "d", "R'", "U", "R", "d'"],
	"3,0,3,3": ["d", "R'", "U'", "R", "d'", "R", "U", "R'"],
	"5,2,2,7": ["y'", "R'", "U", "R", "U'", "d'", "R", "U", "R'"],
	"5,2,0,1": ["d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,3,1": ["U'", "R", "U2'", "R'", "d", "R'", "U'", "R", "d'"],
	"5,2,5,1": ["d", "R'", "U", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,3,3": ["U'", "R", "U", "R'", "d", "R'", "U'", "R", "d'"],
	"3,0,1,1": ["d", "R'", "U'", "R", "U2'", "R'", "U", "R", "d'"],
	"3,0,3,1": ["R", "U'", "R'", "U", "d", "R'", "U'", "R", "d'"],
	"3,0,5,5": ["d", "R'", "U", "R", "U2", "R'", "U", "R", "d'"],
	"2,8,5,1": ["y'", "R'", "U2", "R", "U", "R'", "U'", "R", "y"],
	"5,8,5,1": ["R'", "F", "R", "F'", "U", "R", "U'", "R'"],
	"3,6,5,1": ["y'", "R'", "U", "R", "U'", "R'", "U", "R", "y"],
	"4,2,5,1": ["U", "R", "U'", "R'", "d'", "L'", "U", "L", "d"],
	"2,8,1,1": ["y'", "U'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"2,8,0,1": ["y'", "U2", "R'", "U'", "R", "U'", "R'", "U", "R", "y"],
	"3,6,5,5": ["R", "U", "R'", "U2", "R", "U'", "R'", "UR", "U", "R'"],
	"2,8,5,5": ["R", "U", "R'", "U'", "R", "U", "R'", "U'", "R", "U", "R'"],
	"5,8,5,5": ["R", "U'", "R'", "U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
	"4,2,2,5": ["y'", "U'", "R'", "U", "R", "r'", "U'", "R", "U", "M'", "y"],
	"5,8,3,3": ["R", "U'", "R'", "d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"2,8,2,7": ["y'", "U", "R'", "U2", "R", "y", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,3,1": ["U'", "R", "U2'", "R'", "y'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"3,6,3,3": ["R", "U", "R'", "U'", "R", "U'", "R'", "U2", "y'", "R'", "U'", "R", "y"],
	"4,2,3,3": ["R", "U'", "R'", "U", "y'", "R'", "U2", "R", "U2'", "R'", "U", "R", "y"]
};

function sortAlgorithmsByLength(algorithms) {
	const sortedKeys = Object.keys(algorithms).sort((a, b) => {
		return algorithms[a].length - algorithms[b].length;
	});

	const sortedAlgorithms = {};
	sortedKeys.forEach((key) => {
		sortedAlgorithms[key] = algorithms[key];
	});

	return sortedAlgorithms;
}

const sortedF2LAlgorithms = sortAlgorithmsByLength(F2LAlgorithms);
console.log(sortedF2LAlgorithms);

// const sortedEdgeAlgorithms = sortAlgorithmsByLength(edgeAlgorithms);
// console.log(sortedEdgeAlgorithms);
