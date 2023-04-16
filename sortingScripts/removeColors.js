const F2LAlgorithms = {
	"3,0,w,o,b,2,1,o,b": ["R", "U", "R'"],
	"5,2,w,o,b,2,5,o,b": ["U", "R", "U'", "R'"],
	"3,0,w,o,b,5,1,o,b": ["F", "R'", "F'", "R"],
	"3,0,w,o,b,0,1,o,b": ["R'", "F", "R", "F'"],
	"5,2,w,o,b,1,1,o,b": ["y'", "R'", "U'", "R", "y"],
	"2,0,w,o,b,0,3,o,b": ["U", "R'", "U", "R2", "U'", "R'"],
	"3,0,w,o,b,2,7,o,b": ["R'", "U2", "R2", "U", "R2'", "U", "R"],
	"2,8,w,o,b,2,5,o,b": ["R", "U2'", "R'", "U'", "R", "U", "R'"],
	"5,8,w,o,b,1,5,o,b": ["R", "U'", "R'", "U", "R", "U'", "R'"],
	"3,6,w,o,b,1,5,o,b": ["R", "U", "R'", "U'", "R", "U", "R'"],
	"5,2,w,o,b,2,1,o,b": ["U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
	"5,2,w,o,b,2,3,o,b": ["U'", "R", "U2'", "R'", "U2", "R", "U'", "R'"],
	"5,2,w,o,b,5,5,o,b": ["U'", "R", "U'", "R'", "U2", "R", "U'", "R'"],
	"3,0,w,o,b,2,3,o,b": ["U'", "R", "U", "R'", "U", "R", "U", "R'"],
	"3,0,w,o,b,2,5,o,b": ["U'", "R", "U'", "R'", "U", "R", "U", "R'"],
	"2,8,w,o,b,2,1,o,b": ["U", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,w,o,b,2,3,o,b": ["U2", "R", "U", "R'", "U", "R", "U'", "R'"],
	"2,8,w,o,b,3,3,o,b": ["R", "U'", "R'", "d", "R'", "U", "R", "d'"],
	"5,2,w,o,b,2,7,o,b": ["y'", "R'", "U", "R", "U'", "d'", "R", "U", "R'"],
	"5,2,w,o,b,0,1,o,b": ["d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,w,o,b,3,1,o,b": ["U'", "R", "U2'", "R'", "d", "R'", "U'", "R", "d'"],
	"5,2,w,o,b,5,1,o,b": ["d", "R'", "U", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,w,o,b,3,3,o,b": ["U'", "R", "U", "R'", "d", "R'", "U'", "R", "d'"],
	"3,0,w,o,b,1,1,o,b": ["d", "R'", "U'", "R", "U2'", "R'", "U", "R", "d'"],
	"3,0,w,o,b,3,1,o,b": ["R", "U'", "R'", "U", "d", "R'", "U'", "R", "d'"],
	"3,0,w,o,b,5,5,o,b": ["d", "R'", "U", "R", "U2", "R'", "U", "R", "d'"],
	"3,0,w,o,b,3,3,o,b": ["d", "R'", "U'", "R", "d'", "R", "U", "R'", "d'"],
	"2,8,w,o,b,5,1,o,b": ["y'", "R'", "U2", "R", "U", "R'", "U'", "R", "y"],
	"5,8,w,o,b,5,1,o,b": ["y'", "R'", "U'", "R", "U", "R'", "U'", "R", "y"],
	"3,6,w,o,b,5,1,o,b": ["y'", "R'", "U", "R", "U'", "R'", "U", "R", "y"],
	"4,2,w,o,b,5,1,o,b": ["U", "R", "U'", "R'", "d'", "L'", "U", "L", "d"],
	"2,8,w,o,b,1,1,o,b": ["y'", "U'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"2,8,w,o,b,0,1,o,b": ["y'", "U2", "R'", "U'", "R", "U'", "R'", "U", "R", "y"],
	"3,6,w,o,b,5,5,o,b": ["R", "U", "R'", "U2", "R", "U'", "R'", "UR", "U", "R'"],
	"2,8,w,o,b,5,5,o,b": ["R", "U", "R'", "U'", "R", "U", "R'", "U'", "R", "U", "R'"],
	"5,8,w,o,b,5,5,o,b": ["R", "U'", "R'", "U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
	"4,2,w,o,b,2,5,o,b": ["y'", "U'", "R'", "U", "R", "r'", "U'", "R", "U", "M'", "y"],
	"5,8,w,o,b,3,3,o,b": ["R", "U'", "R'", "d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"2,8,w,o,b,2,7,o,b": ["y'", "U", "R'", "U2", "R", "y", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,w,o,b,3,1,o,b": ["U'", "R", "U2'", "R'", "y'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"3,6,w,o,b,3,3,o,b": ["R", "U", "R'", "U'", "R", "U'", "R'", "U2", "y'", "R'", "U'", "R", "y"],
	"4,2,w,o,b,3,3,o,b": ["R", "U'", "R'", "U", "y'", "R'", "U2", "R", "U2'", "R'", "U", "R", "y"]
};

function removeColorsFromKey(key) {
	const parts = key.split(",");
	return `${parts[0]},${parts[1]},${parts[5]},${parts[6]}`;
	// return parts[4] "" + parts[4] + "," + parts[5];
}

const simplifiedAlgorithms = {};

for (const key in F2LAlgorithms) {
	const newKey = removeColorsFromKey(key);
	if (!simplifiedAlgorithms[newKey]) {
		simplifiedAlgorithms[newKey] = F2LAlgorithms[key];
	}
	// simplifiedAlgorithms[newKey].push(F2LAlgorithms[key]);
}

console.log(simplifiedAlgorithms);
