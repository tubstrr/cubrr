export const replaceIndex = (arr: Array<any>, index: number, value: any) => {
	return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
};
