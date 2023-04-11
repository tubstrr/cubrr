export const nextIndex = (index: number, length: number) => {
	return index >= length - 1 ? index + 1 - length : index + 1;
};
