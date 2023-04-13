export const generateScramble = (length: number = 30) => {
	const moves = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];
	const scramble = [];
	for (let i = 0; i < length; i++) {
		const move = moves[Math.floor(Math.random() * moves.length)];
		scramble.push(move);
	}
	return scramble.join(" ");
};
