export const rotateFace = (face: Array<string>, prime: boolean = false) => {
	const newFace = [];
	const indexMap = {
		0: 2,
		1: 5,
		2: 8,
		3: 1,
		4: 4,
		5: 7,
		6: 0,
		7: 3,
		8: 6
	};
	face.forEach((color, index) => {
		const useIndex = prime ? 8 - index : index;
		const newIndex = indexMap[useIndex];
		newFace[newIndex] = color;
	});
	return newFace;
};
