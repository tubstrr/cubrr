// Types
import * as types from "@/types";

import { rotateFace } from "@/composables/rotateFace";

export const rotateLayer = (
	cube: types.cubeState,
	indexesToReplace: number[],
	facesToRotate: number[],
	faceToRotate: number,
	prime: boolean,
	axis: string,
	invert?: boolean,
	indexMap?: types.IndexMapType,
	facesToReverse?: number[]
) => {
	return cube.map((face, faceIndex) => {
		if (faceIndex === faceToRotate) {
			face = rotateFace(face, prime);
		}

		if (facesToRotate.includes(faceIndex)) {
			if (axis == "y") {
				const indexOf = facesToRotate.indexOf(faceIndex);
				const nextFace = nextIndex(indexOf, facesToRotate.length);
				// const prevFace = prevIndex(indexOf, facesToRotate.length);

				// let useFace = prime ? prevFace : nextFace;
				// if (invert) useFace = prime ? nextFace : prevFace;

				const pickFromFace = cube[facesToRotate[nextFace]];

				if (!indexMap) {
					console.error("indexMap is undefined");
					return cube;
				}
				if (!facesToReverse) {
					console.error("facesToReverse is undefined");
					return cube;
				}
				const indexesToRepalce = indexMap[faceIndex];

				indexesToRepalce.forEach((key, index) => {
					let indexConversion = indexMap[facesToRotate[nextFace]];
					if (facesToReverse.includes(faceIndex)) indexConversion = indexConversion.reverse();
					const value = pickFromFace[indexConversion[index]];
					face = replaceIndex(face, key, value);
				});
			} else {
				if (axis == "z" && faceIndex == 0) face = face.reverse();
				face = face.map((faceValue, index) => {
					let value = faceValue;
					if (indexesToReplace.includes(index)) {
						const indexOf = facesToRotate.indexOf(faceIndex);
						const nextFace = nextIndex(indexOf, facesToRotate.length);
						const prevFace = prevIndex(indexOf, facesToRotate.length);

						let useFace = prime ? prevFace : nextFace;
						if (invert) useFace = prime ? nextFace : prevFace;

						const nextFaceIndex = facesToRotate[useFace];
						value = cube[nextFaceIndex][index];
					}
					return value;
				});
				if (axis == "z" && faceIndex == 0) face = face.reverse();
			}
		}
		return face;
	});
};
