export const edges = {
	"0,1": "2,1",
	"0,3": "3,5",
	"0,5": "1,3",
	"0,7": "4,7",
	"1,1": "2,3",
	"1,3": "0,5",
	"1,5": "5,3",
	"1,7": "4,3",
	"2,1": "0,1",
	"2,3": "1,1",
	"2,5": "3,1",
	"2,7": "5,1",
	"3,1": "2,5",
	"3,3": "5,5",
	"3,5": "0,3",
	"3,7": "4,5",
	"4,1": "5,7",
	"4,3": "1,7",
	"4,5": "3,7",
	"4,7": "0,7",
	"5,1": "2,7",
	"5,3": "1,5",
	"5,5": "3,3",
	"5,7": "4,1"
};

export const edgeAlgorithms = {
	"4,1": [],
	"1,5": ["F'"],
	"2,7": ["F2"],
	"3,3": ["F"],
	"1,7": ["L'", "F'"],
	"2,1": ["U2", "F2"],
	"2,3": ["U'", "F2"],
	"2,5": ["U", "F2"],
	"3,7": ["R", "F"],
	"0,3": ["D", "R", "D'"],
	"0,5": ["D'", "L'", "D"],
	"1,1": ["r", "U'", "r'"],
	"1,3": ["r2", "B'", "r2"],
	"3,1": ["l'", "U", "l"],
	"3,5": ["l2", "B", "l2"],
	"5,3": ["D'", "L", "D"],
	"5,5": ["D", "R'", "D'"],
	"0,1": ["U", "l'", "U", "l"],
	"0,7": ["B", "D", "R", "D'"],
	"4,3": ["D", "F", "D'", "F'"],
	"4,5": ["D'", "F'", "D", "F"],
	"5,1": ["F", "D", "R'", "D'"],
	"5,7": ["D", "R", "D'", "F"],
	"4,7": ["M", "U", "M2", "U", "M"]
};

export const colorTranslations = {
	"w,o": {
		F: "F",
		R: "R",
		L: "L",
		B: "B",
		f: "f",
		r: "r",
		l: "l",
		b: "b",
		// Not sure bout these
		U: "U",
		D: "D",
		u: "u",
		d: "d",
		M: "M",
		m: "m",
		E: "E",
		e: "e",
		S: "S",
		s: "s",
		x: "x",
		y: "y",
		z: "z"
	},
	"w,b": {
		F: "R",
		R: "B",
		L: "F",
		B: "L",
		f: "r",
		r: "b",
		l: "f",
		b: "l",
		U: "U",
		D: "D",
		u: "u",
		d: "d",
		//
		M: "S",
		m: "s",
		E: "E",
		e: "e",
		S: "M'",
		s: "m'",
		x: "z'",
		y: "y",
		z: "x"
	},
	"w,g": {
		F: "L",
		R: "F",
		L: "B",
		B: "R",
		f: "l",
		r: "f",
		l: "b",
		b: "r",
		// Not sure bout these
		U: "U",
		D: "D",
		u: "u",
		d: "d",
		M: "S'",
		m: "s'",
		E: "E",
		e: "e",
		S: "M",
		s: "m",
		x: "z",
		y: "y",
		z: "x'"
	},
	"w,r": {
		F: "B",
		R: "L",
		L: "R",
		B: "F",
		f: "b",
		r: "l",
		l: "r",
		b: "f",
		// Not sure bout these
		U: "U",
		D: "D",
		u: "u",
		d: "d",
		M: "M'",
		m: "m'",
		E: "E",
		e: "e",
		S: "S'",
		s: "s'",
		x: "x'",
		y: "y",
		z: "z'"
	}
};

export const colorPositionTranslations = {
	"w,o": {
		// Orange Face Defaults
		"0,0": "0,0",
		"0,1": "0,1",
		"0,2": "0,2",
		"0,3": "0,3",
		"0,4": "0,4",
		"0,5": "0,5",
		"0,6": "0,6",
		"0,7": "0,7",
		"0,8": "0,8",
		// Red Face ^^^
		"1,0": "1,0",
		"1,1": "1,1",
		"1,2": "1,2",
		"1,3": "1,3",
		"1,4": "1,4",
		"1,5": "1,5",
		"1,6": "1,6",
		"1,7": "1,7",
		"1,8": "1,8",
		// Green Face ^^^
		"2,0": "2,0",
		"2,1": "2,1",
		"2,2": "2,2",
		"2,3": "2,3",
		"2,4": "2,4",
		"2,5": "2,5",
		"2,6": "2,6",
		"2,7": "2,7",
		"2,8": "2,8",
		// Yellow Face ^^^
		"3,0": "3,0",
		"3,1": "3,1",
		"3,2": "3,2",
		"3,3": "3,3",
		"3,4": "3,4",
		"3,5": "3,5",
		"3,6": "3,6",
		"3,7": "3,7",
		"3,8": "3,8",
		// Blue Face ^^^
		"4,0": "4,0",
		"4,1": "4,1",
		"4,2": "4,2",
		"4,3": "4,3",
		"4,4": "4,4",
		"4,5": "4,5",
		"4,6": "4,6",
		"4,7": "4,7",
		"4,8": "4,8",
		// White Face ^^^
		"5,0": "5,0",
		"5,1": "5,1",
		"5,2": "5,2",
		"5,3": "5,3",
		"5,4": "5,4",
		"5,5": "5,5",
		"5,6": "5,6",
		"5,7": "5,7",
		"5,8": "5,8"
		// Orange Face ^^^
	},
	"w,b": {
		// Blue pieces translated to Orange
		"0,0": "3,0",
		"0,1": "3,1",
		"0,2": "3,2",
		"0,3": "3,3",
		"0,4": "3,4",
		"0,5": "3,5",
		"0,6": "3,6",
		"0,7": "3,7",
		"0,8": "3,8",
		// Red Face ^^^
		"1,0": "0,0",
		"1,1": "0,1",
		"1,2": "0,2",
		"1,3": "0,3",
		"1,4": "0,4",
		"1,5": "0,5",
		"1,6": "0,6",
		"1,7": "0,7",
		"1,8": "0,8",
		// Green Face ^^^
		"2,0": "2,2",
		"2,1": "2,5",
		"2,2": "2,8",
		"2,3": "2,1",
		"2,4": "2,4",
		"2,5": "2,7",
		"2,6": "2,0",
		"2,7": "2,3",
		"2,8": "2,6",
		// Yellow Face ^^^
		"3,0": "5,0",
		"3,1": "5,1",
		"3,2": "5,2",
		"3,3": "5,3",
		"3,4": "5,4",
		"3,5": "5,5",
		"3,6": "5,6",
		"3,7": "5,7",
		"3,8": "5,8",
		// Blue Face ^^^
		"4,0": "4,2",
		"4,1": "4,3",
		"4,2": "4,8",
		"4,3": "4,7",
		"4,4": "4,4",
		"4,5": "4,1",
		"4,6": "4,0",
		"4,7": "4,5",
		"4,8": "4,6",
		// White Face ^^^
		"5,0": "1,0",
		"5,1": "1,1",
		"5,2": "1,2",
		"5,3": "1,3",
		"5,4": "1,4",
		"5,5": "1,5",
		"5,6": "1,6",
		"5,7": "1,7",
		"5,8": "1,8"
		// Orange Face ^^^
	},
	"w,g": {
		// Green pieces translated to Orange
		"0,0": "1,0",
		"0,1": "1,1",
		"0,2": "1,2",
		"0,3": "1,3",
		"0,4": "1,4",
		"0,5": "1,5",
		"0,6": "1,6",
		"0,7": "1,7",
		"0,8": "1,8",
		// Red Face ^^^ -- DONE
		"1,0": "5,0",
		"1,1": "5,1",
		"1,2": "5,2",
		"1,3": "5,3",
		"1,4": "5,4",
		"1,5": "5,5",
		"1,6": "5,6",
		"1,7": "5,7",
		"1,8": "5,8",
		// Green Face ^^^ -- DONE
		"2,0": "2,2",
		"2,1": "2,3",
		"2,2": "2,8",
		"2,3": "2,7",
		"2,4": "2,4",
		"2,5": "2,1",
		"2,6": "2,0",
		"2,7": "2,5",
		"2,8": "2,6",
		// Yellow Face ^^^ -- DONE
		"3,0": "0,0",
		"3,1": "0,1",
		"3,2": "0,2",
		"3,3": "0,3",
		"3,4": "0,4",
		"3,5": "0,5",
		"3,6": "0,6",
		"3,7": "0,7",
		"3,8": "0,8",
		// Blue Face ^^^ -- DONE
		"4,0": "4,6",
		"4,1": "4,5",
		"4,2": "4,0",
		"4,3": "4,1",
		"4,4": "4,4",
		"4,5": "4,7",
		"4,6": "4,8",
		"4,7": "4,3",
		"4,8": "4,2",
		// White Face ^^^ -- DONE
		"5,0": "3,0",
		"5,1": "3,1",
		"5,2": "3,2",
		"5,3": "3,3",
		"5,4": "3,4",
		"5,5": "3,5",
		"5,6": "3,6",
		"5,7": "3,7",
		"5,8": "3,8"
		// Orange Face ^^^ -- DONE
	},
	"w,r": {
		// Red pieces translated to White
		"0,0": "5,0",
		"0,1": "5,1",
		"0,2": "5,2",
		"0,3": "5,3",
		"0,4": "5,4",
		"0,5": "5,5",
		"0,6": "5,6",
		"0,7": "5,7",
		"0,8": "5,8",
		// Red Face ^^^ -- DONE
		"1,0": "3,0",
		"1,1": "3,1",
		"1,2": "3,2",
		"1,3": "3,3",
		"1,4": "3,4",
		"1,5": "3,5",
		"1,6": "3,6",
		"1,7": "3,7",
		"1,8": "3,8",
		// Green Face ^^^ -- DONE
		"2,0": "2,8",
		"2,1": "2,7",
		"2,2": "2,6",
		"2,3": "2,5",
		"2,4": "2,4",
		"2,5": "2,3",
		"2,6": "2,2",
		"2,7": "2,1",
		"2,8": "2,0",
		// Yellow Face ^^^ -- DONE
		"3,0": "1,0",
		"3,1": "1,1",
		"3,2": "1,2",
		"3,3": "1,3",
		"3,4": "1,4",
		"3,5": "1,5",
		"3,6": "1,6",
		"3,7": "1,7",
		"3,8": "1,8",
		// Blue Face ^^^ -- DONE
		"4,0": "4,8",
		"4,1": "4,7",
		"4,2": "4,6",
		"4,3": "4,5",
		"4,4": "4,4",
		"4,5": "4,3",
		"4,6": "4,2",
		"4,7": "4,1",
		"4,8": "4,0",
		// White Face ^^^ -- DONE
		"5,0": "0,0",
		"5,1": "0,1",
		"5,2": "0,2",
		"5,3": "0,3",
		"5,4": "0,4",
		"5,5": "0,5",
		"5,6": "0,6",
		"5,7": "0,7",
		"5,8": "0,8"
		// Orange Face ^^^ -- DONE
	}
};

export const sortOrder = (object: object) => {
	return Object.keys(object);
};

export const cornerSiblingsMap = {
	"0,0": ["3,2", "2,2"],
	"0,2": ["2,0", "1,0"],
	"0,6": ["4,8", "3,8"],
	"0,8": ["1,6", "4,6"],
	// Red ^^^
	"1,0": ["0,2", "2,0"],
	"1,2": ["2,6", "5,0"],
	"1,6": ["4,6", "0,8"],
	"1,8": ["5,6", "4,0"],
	// Green ^^^
	"2,0": ["1,0", "0,2"],
	"2,2": ["0,0", "3,2"],
	"2,6": ["5,0", "1,2"],
	"2,8": ["3,0", "5,2"],
	// Yellow ^^^
	"3,0": ["5,2", "2,8"],
	"3,2": ["2,2", "0,0"],
	"3,6": ["4,2", "5,8"],
	"3,8": ["0,6", "4,8"],
	// Blue ^^^
	"4,0": ["1,8", "5,6"],
	"4,2": ["5,8", "3,6"],
	"4,6": ["0,8", "1,6"],
	"4,8": ["3,6", "0,6"],
	// White ^^^
	"5,0": ["1,2", "2,6"],
	"5,2": ["2,8", "3,0"],
	"5,6": ["4,0", "1,8"],
	"5,8": ["3,6", "4,2"]
	// Orange ^^^
};

export const F2LAlgorithms = {
	"5,8,2,1": ["U", "F'", "U2", "F", "R", "U2", "R'"],
	"5,8,2,3": ["U2", "F'", "U2", "F", "R", "U2", "R'"],
	"5,8,2,5": ["F'", "U2", "F", "R", "U2", "R'"],
	"5,8,2,7": ["U'", "F'", "U2", "F", "R", "U2", "R'"],
	"4,6,2,1": ["F'", "U'", "F", "U", "R", "U'", "R'"],
	"3,0,1,7": ["L2", "U", "F'", "U'", "F", "U", "F'", "U2", "F"],
	"3,6,0,1": ["U2", "R", "U", "R'", "U", "F'", "U2", "F"],
	"3,6,1,1": ["U'", "R", "U", "R'", "U", "F'", "U2", "F"],
	"3,6,3,1": ["U", "R", "U", "R'", "U", "F'", "U2", "F"],
	"3,6,2,5": ["R", "U", "R'", "U'", "R", "U", "R'"],
	"0,0,3,1": ["F'", "U", "F"],
	"3,0,2,1": ["R", "U", "R'"],
	"5,2,1,1": ["F'", "U'", "F"],
	"5,2,2,5": ["U", "R", "U'", "R'"],
	"3,0,5,1": ["F", "R'", "F'", "R"],
	"3,0,0,1": ["R'", "F", "R", "F'"],
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
	"5,8,5,1": ["R'", "F", "R", "F'", "U", "R", "U'", "R'"],
	"5,2,2,7": ["y'", "R'", "U", "R", "U'", "d'", "R", "U", "R'"],
	"5,2,0,1": ["d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,3,1": ["U'", "R", "U2'", "R'", "d", "R'", "U'", "R", "d'"],
	"5,2,5,1": ["d", "R'", "U", "R", "U'", "R'", "U'", "R", "d'"],
	"5,2,3,3": ["U'", "R", "U", "R'", "d", "R'", "U'", "R", "d'"],
	"3,0,1,1": ["d", "R'", "U'", "R", "U2'", "R'", "U", "R", "d'"],
	"3,0,3,1": ["R", "U'", "R'", "U", "d", "R'", "U'", "R", "d'"],
	"3,0,5,5": ["d", "R'", "U", "R", "U2", "R'", "U", "R", "d'"],
	"2,8,5,1": ["y'", "R'", "U2", "R", "U", "R'", "U'", "R", "y"],
	"3,6,5,1": ["y'", "R'", "U", "R", "U'", "R'", "U", "R", "y"],
	"4,2,5,1": ["U", "R", "U'", "R'", "d'", "L'", "U", "L", "d"],
	"2,8,1,1": ["y'", "U'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"2,8,0,1": ["y'", "U2", "R'", "U'", "R", "U'", "R'", "U", "R", "y"],
	"3,6,5,5": ["R", "U'", "R'", "U", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,5,5": ["R", "U", "R'", "U'", "R", "U", "R'", "U'", "R", "U", "R'"],
	"5,8,5,5": ["R", "U'", "R'", "U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
	"4,2,2,5": ["y'", "U'", "R'", "U", "R", "r'", "U'", "R", "U", "M'", "y"],
	"5,8,3,3": ["R", "U'", "R'", "d", "R'", "U'", "R", "U'", "R'", "U'", "R", "d'"],
	"2,8,2,7": ["y'", "U", "R'", "U2", "R", "y", "R", "U2", "R'", "U", "R", "U'", "R'"],
	"2,8,3,1": ["U'", "R", "U2'", "R'", "y'", "R'", "U2", "R", "U'", "R'", "U", "R", "y"],
	"3,6,3,3": ["R", "U", "R'", "U'", "R", "U'", "R'", "U2", "y'", "R'", "U'", "R", "y"],
	"4,2,3,3": ["R", "U'", "R'", "U", "y'", "R'", "U2", "R", "U2'", "R'", "U", "R", "y"]
};

export const OLLs = {
	// https://jperm.net/algs/oll
	// Number 1 - R U2 R2 F R F' U2 R' F R F'
	// This one doesn't have a mirrored position
	"y,4,r,1,g,0,1,2,b,0,1,2,o,1": ["R", "U2", "R2", "F", "R", "F'", "U2", "R'", "F", "R", "F'"],
	"y,4,r,0,1,2,g,1,b,1,o,0,1,2": ["U'", "R", "U2", "R2", "F", "R", "F'", "U2", "R'", "F", "R", "F'"],
	// Number 2 - r U r' U2 r U2 R' U2 R U' r'
	"y,4,r,0,1,2,g,1,2,b,0,1,o,1": ["r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
	"y,4,r,1,2,g,1,b,0,1,2,o,0,1": ["U'", "r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
	"y,4,r,1,g,0,1,b,1,2,o,0,1,2": ["U2", "r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
	"y,4,r,0,1,g,0,1,2,b,1,o,1,2": ["U", "r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
	// Number 3 - r' R2 U R' U r U2 r' U M'
	"y,4,6,r,1,2,g,1,b,1,2,o,1,2": ["r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
	"y,0,4,r,1,g,1,2,b,1,2,o,1,2": ["U'", "r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
	"y,2,4,r,1,2,g,1,2,b,1,o,1,2": ["U2", "r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
	"y,4,8,r,1,2,g,1,2,b,1,2,o,1": ["U", "r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
	// Number 4 - M U' r U2 r' U' R U' R' M'
	"y,4,8,r,0,1,g,0,1,b,1,o,0,1": ["M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
	"y,4,6,r,0,1,g,0,1,b,0,1,o,1": ["U'", "M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
	"y,0,4,r,0,1,g,1,b,0,1,o,0,1": ["U2", "M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
	"y,2,4,r,1,g,0,1,b,0,1,o,0,1": ["U", "M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
	// Number 5 - l' U2 L U L' U l
	"y,0,1,3,4,r,g,2,b,1,2,o,1,2": ["l'", "U2", "L", "U", "L'", "U", "l"],
	"y,1,2,4,5,r,2,g,1,2,b,o,1,2": ["U'", "l'", "U2", "L", "U", "L'", "U", "l"],
	"y,4,5,7,8,r,1,2,g,1,2,b,2,o": ["U2", "l'", "U2", "L", "U", "L'", "U", "l"],
	"y,3,4,6,7,r,1,2,g,b,1,2,o,2": ["U", "l'", "U2", "L", "U", "L'", "U", "l"],
	// Number 6 - r U2 R' U' R U' r'
	"y,1,2,4,5,r,g,0,1,b,0,o,0,1": ["r", "U2", "R'", "U'", "R", "U'", "r'"],
	"y,4,5,7,8,r,0,1,g,0,1,b,o,0": ["U'", "r", "U2", "R'", "U'", "R", "U'", "r'"],
	"y,3,4,6,7,r,0,1,g,0,b,0,1,o": ["U2", "r", "U2", "R'", "U'", "R", "U'", "r'"],
	"y,0,1,3,4,r,0,g,b,0,1,o,0,1": ["U", "r", "U2", "R'", "U'", "R", "U'", "r'"],
	// Number 7 - r U R' U R U2 r'
	"y,1,3,4,6,r,2,g,b,1,2,o,1,2": ["r", "U", "R'", "U", "R", "U2", "r'"],
	"y,0,1,4,5,r,g,1,2,b,2,o,1,2": ["U'", "r", "U", "R'", "U", "R", "U2", "r'"],
	"y,2,4,5,7,r,1,2,g,1,2,b,o,2": ["U2", "r", "U", "R'", "U", "R", "U2", "r'"],
	"y,3,4,7,8,r,1,2,g,2,b,1,2,o": ["U", "r", "U", "R'", "U", "R", "U2", "r'"],
	// Number 8 - l' U' L U' L' U2 l
	"y,1,4,5,8,r,0,g,0,1,b,o,0,1": ["l'", "U'", "L", "U'", "L'", "U2", "l"],
	"y,4,5,6,7,r,0,1,g,0,1,b,0,o": ["U'", "l'", "U'", "L", "U'", "L'", "U2", "l"],
	"y,0,3,4,7,r,0,1,g,b,0,1,o,0": ["U2", "l'", "U'", "L", "U'", "L'", "U2", "l"],
	"y,1,2,3,4,r,g,0,b,0,1,o,0,1": ["U", "l'", "U'", "L", "U'", "L'", "U2", "l"],
	// Number 9 - R U R' U' R' F R2 U R' U' F'
	"y,1,3,4,8,r,0,g,0,b,1,o,0,1": ["R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
	"y,1,4,5,6,r,0,g,0,1,b,0,o,1": ["U'", "R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
	"y,0,4,5,7,r,0,1,g,1,b,0,o,0": ["U2", "R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
	"y,2,3,4,7,r,1,g,0,b,0,1,o,0": ["U", "R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
	// Number 10 - R U R' U R' F R F' R U2 R'
	"y,2,3,4,7,r,1,2,g,2,b,1,o,2": ["R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
	"y,1,3,4,8,r,2,g,2,b,1,2,o,1": ["U'", "R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
	"y,1,4,5,6,r,2,g,1,b,2,o,1,2": ["U2", "R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
	"y,0,4,5,7,r,1,g,1,2,b,2,o,2": ["U", "R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
	// Number 11 - r U R' U R' F R F' R U2 r'
	"y,1,2,3,4,r,2,g,2,b,1,o,1,2": ["r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
	"y,1,4,5,8,r,2,g,1,2,b,2,o,1": ["U'", "r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
	"y,4,5,6,7,r,1,2,g,1,b,2,o,2": ["U2", "r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
	"y,0,3,4,7,r,1,g,2,b,1,2,o,2": ["U", "r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
	// Number 12 - M' R' U' R U' R' U2 R U' R r'
	"y,0,1,4,5,r,0,g,1,b,0,o,0,1": ["M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
	"y,2,4,5,7,r,1,g,0,1,b,0,o,0": ["U'", "M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
	"y,3,4,7,8,r,0,1,g,0,b,1,o,0": ["U2", "M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
	"y,1,3,4,6,r,0,g,0,b,0,1,o,1": ["U", "M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
	// Number 13 - F U R U' R2 F' R U R U' R'
	"y,3,4,5,6,r,1,2,g,b,2,o,1,2": ["F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
	"y,0,1,4,7,r,g,1,2,b,1,2,o,2": ["U'", "F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
	"y,2,3,4,5,r,1,2,g,2,b,o,1,2": ["U2", "F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
	"y,1,4,7,8,r,2,g,1,2,b,1,2,o": ["U", "F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
	// Number 14 - R' F R U R' F' R F U' F'
	"y,3,4,5,8,r,0,1,g,0,b,o,0,1": ["R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
	"y,1,4,6,7,r,0,g,0,1,b,0,1,o": ["U'", "R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
	"y,0,3,4,5,r,0,1,g,b,0,o,0,1": ["U2", "R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
	"y,1,2,4,7,r,g,0,1,b,0,1,o,0": ["U", "R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
	// Number 15 - l' U' l L' U' L U l' U l
	"y,0,3,4,5,r,1,g,2,b,2,o,1,2": ["l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
	"y,1,2,4,7,r,2,g,1,2,b,1,o,2": ["U'", "l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
	"y,3,4,5,8,r,1,2,g,2,b,2,o,1": ["U2", "l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
	"y,1,4,6,7,r,2,g,1,b,1,2,o,2": ["U", "l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
	// Number 16 - r U r' R U R' U' r U' r'
	"y,2,3,4,5,r,1,g,0,b,0,o,0,1": ["r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
	"y,1,4,7,8,r,0,g,0,1,b,1,o,0": ["U'", "r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
	"y,3,4,5,6,r,0,1,g,0,b,0,o,1": ["U2", "r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
	"y,0,1,4,7,r,0,g,1,b,0,1,o,0": ["U", "r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
	// Number 17 - F R' F' R2 r' U R U' R' U' M'
	"y,0,4,8,r,1,g,1,b,1,2,o,0,1": ["F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
	"y,2,4,6,r,1,g,0,1,b,1,o,1,2": ["U'", "F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
	"y,0,4,8,r,0,1,g,1,2,b,1,o,1": ["U2", "F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
	"y,2,4,6,r,1,2,g,1,b,0,1,o,1": ["U", "F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
	// Number 18 - r U R' U R U2 r2 U' R U' R' U2 r
	"y,0,2,4,r,1,g,1,b,1,o,0,1,2": ["r", "U", "R'", "U", "R", "U2", "r2", "U'", "R", "U'", "R'", "U2", "r"],
	"y,2,4,8,r,1,g,0,1,2,b,1,o,1": ["U'", "r", "U", "R'", "U", "R", "U2", "r2", "U'", "R", "U'", "R'", "U2", "r"],
	"y,4,6,8,r,0,1,2,g,1,b,1,o,1": ["U2", "r", "U", "R'", "U", "R", "U2", "r2", "U'", "R", "U'", "R'", "U2", "r"],
	"y,0,4,6,r,1,g,1,b,0,1,2,o,1": ["U", "r", "U", "R'", "U", "R", "U2", "r2", "U'", "R", "U'", "R'", "U2", "r"],
	// Number 19 - r' R U R U R' U' M' R' F R F'
	"y,0,2,4,r,1,g,1,2,b,0,1,o,1": ["r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"],
	"y,2,4,8,r,1,2,g,1,b,1,o,0,1": ["U'", "r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"],
	"y,4,6,8,r,1,g,0,1,b,1,2,o,1": ["U2", "r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"],
	"y,0,4,6,r,0,1,g,1,b,1,o,1,2": ["U", "r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"],
	// Number 20 - r U R' U' M2 U R U' R' U' M'
	"y,0,2,4,6,8,r,1,g,1,b,1,o,1": ["r", "U", "R'", "U'", "M2", "U", "R", "U'", "R'", "U'", "M'"],
	// Number 21 - R U2 R' U' R U R' U' R U' R'
	"y,1,3,4,5,7,r,0,2,g,b,o,0,2": ["R", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"],
	"y,1,3,4,5,7,r,g,0,2,b,0,2,o": ["U", "R", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"],
	// Number 22 - R U2 R2 U' R2 U' R2 U2 R
	"y,1,3,4,5,7,r,0,g,0,2,b,o,2": ["R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
	"y,1,3,4,5,7,r,0,2,g,2,b,0,o": ["U'", "R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
	"y,1,3,4,5,7,r,2,g,b,0,2,o,0": ["U2", "R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
	"y,1,3,4,5,7,r,g,0,b,2,o,0,2": ["U", "R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
	// Number 23 - R2 D' R U2 R' D R U2 R
	"y,1,3,4,5,6,7,8,r,0,2,g,b,o": ["R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
	"y,0,1,3,4,5,6,7,r,g,b,0,2,o": ["U'", "R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
	"y,0,1,2,3,4,5,7,r,g,b,o,0,2": ["U2", "R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
	"y,1,2,3,4,5,7,8,r,g,0,2,b,o": ["U", "R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
	// Number 24 - r U R' U' r' F R F'
	"y,1,2,3,4,5,7,8,r,2,g,b,o,0": ["r", "U", "R'", "U'", "r'", "F", "R", "F'"],
	"y,1,3,4,5,6,7,8,r,g,0,b,2,o": ["U'", "r", "U", "R'", "U'", "r'", "F", "R", "F'"],
	"y,0,1,3,4,5,6,7,r,0,g,b,o,2": ["U2", "r", "U", "R'", "U'", "r'", "F", "R", "F'"],
	"y,0,1,2,3,4,5,7,r,g,2,b,0,o": ["U", "r", "U", "R'", "U'", "r'", "F", "R", "F'"],
	// Number 25 - F' r U R' U' r' F R
	"y,1,2,3,4,5,6,7,r,g,0,b,o,2": ["F'", "r", "U", "R'", "U'", "r'", "F", "R"],
	"y,0,1,3,4,5,7,8,r,0,g,2,b,o": ["U'", "F'", "r", "U", "R'", "U'", "r'", "F", "R"],
	"y,1,2,3,4,5,6,7,r,2,g,b,0,o": ["U2", "F'", "r", "U", "R'", "U'", "r'", "F", "R"],
	"y,0,1,3,4,5,7,8,r,g,b,2,o,0": ["U", "F'", "r", "U", "R'", "U'", "r'", "F", "R"],
	// Number 26 - R U2 R' U' R U' R'
	"y,1,2,3,4,5,7,r,g,0,b,0,o,0": ["R", "U2", "R'", "U'", "R", "U'", "R'"],
	"y,1,3,4,5,7,8,r,0,g,0,b,o,0": ["U'", "R", "U2", "R'", "U'", "R", "U'", "R'"],
	"y,1,3,4,5,6,7,r,0,g,0,b,0,o": ["U2", "R", "U2", "R'", "U'", "R", "U'", "R'"],
	"y,0,1,3,4,5,7,r,0,g,b,0,o,0": ["U", "R", "U2", "R'", "U'", "R", "U'", "R'"],
	// Number 27 - R U R' U R U2 R'
	"y,1,3,4,5,6,7,r,2,g,b,2,o,2": ["R", "U", "R'", "U", "R", "U2", "R'"],
	"y,0,1,3,4,5,7,r,g,2,b,2,o,2": ["U'", "R", "U", "R'", "U", "R", "U2", "R'"],
	"y,1,2,3,4,5,7,r,2,g,2,b,o,2": ["U2", "R", "U", "R'", "U", "R", "U2", "R'"],
	"y,1,3,4,5,7,8,r,2,g,2,b,2,o": ["U", "R", "U", "R'", "U", "R", "U2", "R'"],
	// Number 28 - r U R' U' r' R U R U' R'
	"y,0,1,2,3,4,6,8,r,g,b,1,o,1": ["r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
	"y,0,1,2,4,5,6,8,r,g,1,b,o,1": ["U'", "r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
	"y,0,2,4,5,6,7,8,r,1,g,1,b,o": ["U2", "r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
	"y,0,2,3,4,6,7,8,r,1,g,b,1,o": ["U", "r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
	// Number 29 - R U R' U' R U' R' F' U' F R U R'
	"y,1,2,3,4,8,r,2,g,b,1,o,0,1": ["R", "U", "R'", "U'", "R", "U'", "R'", "F'", "U'", "F", "R", "U", "R'"],
	"y,1,4,5,6,8,r,g,0,1,b,2,o,1": ["U'", "R", "U", "R'", "U'", "R", "U'", "R'", "F'", "U'", "F", "R", "U", "R'"],
	"y,0,4,5,6,7,r,0,1,g,1,b,o,2": ["U2", "R", "U", "R'", "U'", "R", "U'", "R'", "F'", "U'", "F", "R", "U", "R'"],
	"y,0,2,3,4,7,r,1,g,2,b,0,1,o": ["U", "R", "U", "R'", "U'", "R", "U'", "R'", "F'", "U'", "F", "R", "U", "R'"],
	// Number 30 - F R' F R2 U' R' U' R U R' F2
	"y,1,3,4,6,8,r,g,0,b,1,2,o,1": ["F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
	"y,0,1,4,5,6,r,0,g,1,b,o,1,2": ["U'", "F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
	"y,0,2,4,5,7,r,1,g,1,2,b,0,o": ["U2", "F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
	"y,2,3,4,7,8,r,1,2,g,b,1,o,0": ["U", "F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
	// Number 31 - R' U' F U R U' R' F' R
	"y,1,2,4,5,8,r,2,g,1,b,o,0,1": ["R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
	"y,4,5,6,7,8,r,1,g,0,1,b,2,o": ["U'", "R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
	"y,0,3,4,6,7,r,0,1,g,b,1,o,2": ["U2", "R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
	"y,0,1,2,3,4,r,g,2,b,0,1,o,1": ["U", "R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
	// Number 32 - L U F' U' L' U L F L'
	"y,0,1,3,4,6,r,0,g,b,1,o,1,2": ["L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
	"y,0,1,2,4,5,r,g,1,2,b,0,o,1": ["U'", "L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
	"y,2,4,5,7,8,r,1,2,g,1,b,o,0": ["U2", "L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
	"y,3,4,6,7,8,r,1,g,0,b,1,2,o": ["U", "L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
	// Number 33 - R U R' U' R' F R F'
	"y,2,3,4,5,8,r,1,2,g,b,o,0,1": ["R", "U", "R'", "U'", "R'", "F", "R", "F'"],
	"y,1,4,6,7,8,r,g,0,1,b,1,2,o": ["U'", "R", "U", "R'", "U'", "R'", "F", "R", "F'"],
	"y,0,3,4,5,6,r,0,1,g,b,o,1,2": ["U2", "R", "U", "R'", "U'", "R'", "F", "R", "F'"],
	"y,0,1,2,4,7,r,g,1,2,b,0,1,o": ["U", "R", "U", "R'", "U'", "R'", "F", "R", "F'"],
	// Number 34 - R U R2 U' R' F R U R U' F'
	"y,3,4,5,6,8,r,1,g,0,b,2,o,1": ["R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
	"y,0,1,4,6,7,r,0,g,1,b,1,o,2": ["U'", "R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
	"y,0,2,3,4,5,r,1,g,2,b,0,o,1": ["U2", "R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
	"y,1,2,4,7,8,r,2,g,1,b,1,o,0": ["U", "R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
	// Number 35 - R U2 R2 F R F' R U2 R'
	"y,0,4,5,7,8,r,1,g,1,b,2,o,0": ["R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
	"y,2,3,4,6,7,r,1,g,0,b,1,o,2": ["U'", "R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
	"y,0,1,3,4,8,r,0,g,2,b,1,o,1": ["U2", "R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
	"y,1,2,4,5,6,r,2,g,1,b,0,o,1": ["U", "R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
	// Number 36 - L' U' L U' L' U L U L F' L' F
	"y,0,1,4,5,8,r,0,g,1,2,b,o,1": ["L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"],
	"y,2,4,5,6,7,r,1,2,g,1,b,0,o": ["U'", "L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"],
	"y,0,3,4,7,8,r,1,g,b,1,2,o,0": ["U2", "L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"],
	"y,1,2,3,4,6,r,g,0,b,1,o,1,2": ["U", "L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"],
	// Number 37 - F R' F' R U R U' R'
	"y,0,1,3,4,8,r,g,b,1,2,o,0,1": ["F", "R'", "F'", "R", "U", "R", "U'", "R'"],
	"y,1,2,4,5,6,r,g,0,1,b,o,1,2": ["U'", "F", "R'", "F'", "R", "U", "R", "U'", "R'"],
	"y,0,4,5,7,8,r,0,1,g,1,2,b,o": ["U2", "F", "R'", "F'", "R", "U", "R", "U'", "R'"],
	"y,2,3,4,6,7,r,1,2,g,b,0,1,o": ["U", "F", "R'", "F'", "R", "U", "R", "U'", "R'"],
	// Number 38 - R U R' U R U' R' U' R' F R F'
	"y,1,2,3,4,6,r,2,g,b,0,1,o,1": ["R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"],
	"y,0,1,4,5,8,r,g,1,b,2,o,0,1": ["U'", "R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"],
	"y,2,4,5,6,7,r,1,g,0,1,b,o,2": ["U2", "R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"],
	"y,0,3,4,7,8,r,0,1,g,2,b,1,o": ["U", "R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"],
	// Number 39 - L F' L' U' L U F U' L'
	"y,2,3,4,5,6,r,1,2,g,b,0,o,1": ["L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
	"y,0,1,4,7,8,r,g,1,b,1,2,o,0": ["U'", "L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
	"y,2,3,4,5,6,r,1,g,0,b,o,1,2": ["U2", "L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
	"y,0,1,4,7,8,r,0,g,1,2,b,1,o": ["U", "L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
	// Number 40 - R' F R U R' U' F' U R
	"y,0,3,4,5,8,r,0,1,g,2,b,o,1": ["R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
	"y,1,2,4,6,7,r,2,g,1,b,0,1,o": ["U'", "R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
	"y,0,3,4,5,8,r,1,g,b,2,o,0,1": ["U2", "R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
	"y,1,2,4,6,7,r,g,0,1,b,1,o,2": ["U", "R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
	// Number 41 - R U R' U R U2 R' F R U R' U' F'
	"y,1,3,4,6,8,r,0,2,g,b,1,o,1": ["R", "U", "R'", "U", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "F'"],
	"y,0,1,4,5,6,r,g,1,b,0,2,o,1": ["U'", "R", "U", "R'", "U", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "F'"],
	"y,0,2,4,5,7,r,1,g,1,b,o,0,2": ["U2", "R", "U", "R'", "U", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "F'"],
	"y,2,3,4,7,8,r,1,g,0,2,b,1,o": ["U", "R", "U", "R'", "U", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "F'"],
	// Number 42 - R' U' R U' R' U2 R F R U R' U' F'
	"y,0,2,3,4,7,r,1,g,b,1,o,0,2": ["R'", "U'", "R", "U'", "R'", "U2", "R", "F", "R", "U", "R'", "U'", "F'"],
	"y,1,2,3,4,8,r,g,0,2,b,1,o,1": ["U'", "R'", "U'", "R", "U'", "R'", "U2", "R", "F", "R", "U", "R'", "U'", "F'"],
	"y,1,4,5,6,8,r,0,2,g,1,b,o,1": ["U2", "R'", "U'", "R", "U'", "R'", "U2", "R", "F", "R", "U", "R'", "U'", "F'"],
	"y,0,4,5,6,7,r,1,g,1,b,0,2,o": ["U", "R'", "U'", "R", "U'", "R'", "U2", "R", "F", "R", "U", "R'", "U'", "F'"],
	// Number 43 - F' U' L' U L F
	"y,1,2,4,5,8,r,g,0,1,2,b,o,1": ["F'", "U'", "L'", "U", "L", "F"],
	"y,4,5,6,7,8,r,0,1,2,g,1,b,o": ["U'", "F'", "U'", "L'", "U", "L", "F"],
	"y,0,3,4,6,7,r,1,g,b,0,1,2,o": ["U2", "F'", "U'", "L'", "U", "L", "F"],
	"y,0,1,2,3,4,r,g,b,1,o,0,1,2": ["U", "F'", "U'", "L'", "U", "L", "F"],
	// Number 44 - F U R U' R' F'
	"y,0,1,3,4,6,r,g,b,0,1,2,o,1": ["F", "U", "R", "U'", "R'", "F'"],
	"y,0,1,2,4,5,r,g,1,b,o,0,1,2": ["U'", "F", "U", "R", "U'", "R'", "F'"],
	"y,2,4,5,7,8,r,1,g,0,1,2,b,o": ["U2", "F", "U", "R", "U'", "R'", "F'"],
	"y,3,4,6,7,8,r,0,1,2,g,b,1,o": ["U", "F", "U", "R", "U'", "R'", "F'"],
	// Number 45 - F R U R' U' F'
	"y,2,3,4,5,8,r,1,g,0,2,b,o,1": ["F", "R", "U", "R'", "U'", "F'"],
	"y,1,4,6,7,8,r,0,2,g,1,b,1,o": ["U'", "F", "R", "U", "R'", "U'", "F'"],
	"y,0,3,4,5,6,r,1,g,b,0,2,o,1": ["U2", "F", "R", "U", "R'", "U'", "F'"],
	"y,0,1,2,4,7,r,g,1,b,1,o,0,2": ["U", "F", "R", "U", "R'", "U'", "F'"],
	// Number 46 - R' U' R' F R F' U R
	"y,0,1,4,6,7,r,g,1,b,0,1,2,o": ["R'", "U'", "R'", "F", "R", "F'", "U", "R"],
	"y,0,2,3,4,5,r,1,g,b,o,0,1,2": ["U'", "R'", "U'", "R'", "F", "R", "F'", "U", "R"],
	"y,1,2,4,7,8,r,g,0,1,2,b,1,o": ["U2", "R'", "U'", "R'", "F", "R", "F'", "U", "R"],
	"y,3,4,5,6,8,r,0,1,2,g,b,o,1": ["U", "R'", "U'", "R'", "F", "R", "F'", "U", "R"],
	// Number 47 - R' U' R' F R F' R' F R F' U R
	"y,1,4,5,r,2,g,1,b,0,2,o,0,1": ["R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"],
	"y,4,5,7,r,1,g,0,1,b,2,o,0,2": ["U'", "R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"],
	"y,3,4,7,r,0,1,g,0,2,b,1,o,2": ["U2", "R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"],
	"y,1,3,4,r,0,2,g,2,b,0,1,o,1": ["U", "R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"],
	// Number 48 - F R U R' U' R U R' U' F'
	"y,1,3,4,r,0,g,0,2,b,1,o,1,2": ["F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
	"y,1,4,5,r,0,2,g,1,2,b,0,o,1": ["U'", "F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
	"y,4,5,7,r,1,2,g,1,b,0,2,o,0": ["U2", "F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
	"y,3,4,7,r,1,g,0,b,1,2,o,0,2": ["U", "F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
	// Number 49 - r U' r2 U r2 U r2 U' r
	"y,1,4,5,r,0,g,0,1,2,b,o,1,2": ["r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
	"y,4,5,7,r,0,1,2,g,1,2,b,0,o": ["U'", "r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
	"y,3,4,7,r,1,2,g,b,0,1,2,o,0": ["U2", "r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
	"y,1,3,4,r,g,0,b,1,2,o,0,1,2": ["U", "r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
	// Number 50 - r' U r2 U' r2 U' r2 U r'
	"y,4,5,7,r,0,1,g,0,1,2,b,o,2": ["r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
	"y,3,4,7,r,0,1,2,g,2,b,0,1,o": ["U'", "r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
	"y,1,3,4,r,2,g,b,0,1,2,o,0,1": ["U2", "r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
	"y,1,4,5,r,g,0,1,b,2,o,0,1,2": ["U", "r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
	// Number 51 - F U R U' R' U R U' R' F'
	"y,3,4,5,r,1,2,g,b,0,2,o,0,1": ["F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
	"y,1,4,7,r,g,0,1,b,1,2,o,0,2": ["U'", "F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
	"y,3,4,5,r,0,1,g,0,2,b,o,1,2": ["U2", "F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
	"y,1,4,7,r,0,2,g,1,2,b,0,1,o": ["U", "F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
	// Number 52 - R U R' U R U' B U' B' R'
	"y,1,4,7,r,2,g,1,b,0,1,2,o,0": ["R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
	"y,3,4,5,r,1,g,0,b,2,o,0,1,2": ["U'", "R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
	"y,1,4,7,r,0,g,0,1,2,b,1,o,2": ["U2", "R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
	"y,3,4,5,r,0,1,2,g,2,b,0,o,1": ["U", "R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
	// Number 53 - l' U2 L U L' U' L U L' U l
	"y,1,4,5,r,0,2,g,1,b,o,0,1,2": ["l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
	"y,4,5,7,r,1,g,0,1,2,b,0,2,o": ["U'", "l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
	"y,3,4,7,r,0,1,2,g,b,1,o,0,2": ["U2", "l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
	"y,1,3,4,r,g,0,2,b,0,1,2,o,1": ["U", "l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
	// Number 54 - r U2 R' U' R U R' U' R U' r'
	"y,1,3,4,r,0,2,g,b,1,o,0,1,2": ["r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
	"y,1,4,5,r,g,0,1,2,b,0,2,o,1": ["U'", "r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
	"y,4,5,7,r,0,1,2,g,1,b,o,0,2": ["U2", "r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
	"y,3,4,7,r,1,g,0,2,b,0,1,2,o": ["U", "r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
	// Number 55 - R' F R U R U' R2 F' R2 U' R' U R U R'
	"y,3,4,5,r,0,1,2,g,b,o,0,1,2": ["R'", "F", "R", "U", "R", "U'", "R2", "F'", "R2", "U'", "R'", "U", "R", "U", "R'"],
	"y,1,4,7,r,g,0,1,2,b,0,1,2,o": [
		"U",
		"R'",
		"F",
		"R",
		"U",
		"R",
		"U'",
		"R2",
		"F'",
		"R2",
		"U'",
		"R'",
		"U",
		"R",
		"U",
		"R'"
	],
	// Number 56 - r' U' r U' R' U R U' R' U R r' U r
	"y,3,4,5,r,1,g,0,2,b,0,2,o,1": ["r'", "U'", "r", "U'", "R'", "U", "R", "U'", "R'", "U", "R", "r'", "U", "r"],
	"y,1,4,7,r,0,2,g,1,b,1,o,0,2": ["U", "r'", "U'", "r", "U'", "R'", "U", "R", "U'", "R'", "U", "R", "r'", "U", "r"],
	// Number 57 - R U R' U' M' U R U' r'
	"y,0,2,3,4,5,6,8,r,1,g,b,o,1": ["R", "U", "R'", "U'", "M'", "U", "R", "U'", "r'"],
	"y,0,1,2,4,6,7,8,r,g,1,b,1,o": ["U", "R", "U", "R'", "U'", "M'", "U", "R", "U'", "r'"]
};

export const setTopLayer = {
	"0,2,o": ["U2"],
	"1,2,o": ["U'"],
	"3,2,o": ["U"]
};

export const EdgePLLs = {
	// M2 U' M U2 M' U' M2 - DONE
	"0,1,r,1,1,b,3,1,o,5,1,g": ["M2", "U'", "M", "U2", "M'", "U'", "M2"],
	"0,1,b,1,1,g,3,1,r,5,1,o": ["U'", "M2", "U'", "M", "U2", "M'", "U'", "M2"],
	"0,1,g,1,1,o,3,1,b,5,1,r": ["U2", "M2", "U'", "M", "U2", "M'", "U'", "M2"],
	"0,1,o,1,1,r,3,1,g,5,1,b": ["U", "M2", "U'", "M", "U2", "M'", "U'", "M2"],
	// M2 U M2 U2 M2 U M2
	"0,1,o,1,1,b,3,1,g,5,1,r": ["M2", "U", "M2", "U2", "M2", "U", "M2"],
	"0,1,b,1,1,r,3,1,o,5,1,g": ["U'", "M2", "U", "M2", "U2", "M2", "U", "M2"],
	"0,1,r,1,1,g,3,1,b,5,1,o": ["U2", "M2", "U", "M2", "U2", "M2", "U", "M2"],
	"0,1,g,1,1,o,3,1,r,5,1,b": ["U", "M2", "U", "M2", "U2", "M2", "U", "M2"],
	// M2 U M U2 M' U M2
	"0,1,r,1,1,o,3,1,g,5,1,b": ["M2", "U", "M", "U2", "M'", "U", "M2"],
	"0,1,o,1,1,b,3,1,r,5,1,g": ["U'", "M2", "U", "M", "U2", "M'", "U", "M2"],
	"0,1,b,1,1,g,3,1,o,5,1,r": ["U2", "M2", "U", "M", "U2", "M'", "U", "M2"],
	"0,1,g,1,1,r,3,1,b,5,1,o": ["U", "M2", "U", "M", "U2", "M'", "U", "M2"],
	// M' U M2 U M2 U M' U2 M2
	"0,1,o,1,1,g,3,1,b,5,1,r": ["M'", "U", "M2", "U", "M2", "U", "M'", "U2", "M2"],
	"0,1,g,1,1,r,3,1,o,5,1,b": ["U'", "M'", "U", "M2", "U", "M2", "U", "M'", "U2", "M2"],
	"0,1,r,1,1,b,3,1,g,5,1,o": ["U2", "M'", "U", "M2", "U", "M2", "U", "M'", "U2", "M2"],
	"0,1,b,1,1,o,3,1,r,5,1,g": ["U", "M'", "U", "M2", "U", "M2", "U", "M'", "U2", "M2"]
};
