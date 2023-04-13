export type face = string[]; //array of cells
export type cubeState = face[]; //array of faces
export type singleMove = { stringNotation: string; state: cubeState };
export type moveLog = singleMove[];
export type IndexMapType = {
	[key: number]: number[];
};
export type IndexMapString = {
	[key: number]: string[];
};
