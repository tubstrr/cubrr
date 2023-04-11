export const prevIndex = (index: number, length: number) => {
	return index === 0 ? length - 1 : index - 1;
};
