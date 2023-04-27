<script setup>
	// Libraries
	import { storeToRefs } from "pinia";

	// Stores
	import { useCubeStore } from "@/stores/cube";
	import { generateScramble } from "@/composables/generateScramble";

	const cubeStore = useCubeStore();
	const { log, cube } = storeToRefs(cubeStore);

	const command = ref(null);
	const command2 = ref(null);

	const convert = (code) => {
		const steps = code.replaceAll("(", "").replaceAll(")", "").replaceAll('"', "").split(" ");
		console.log(steps);
	};

	const count = computed(() => {
		const lastLog = log.value[log.value.length - 1];
		return lastLog ? lastLog.count : 0;
	});

	const doCode = (code, skipCount) => {
		const steps = code.replaceAll("(", "").replaceAll(")", "").replaceAll('"', "").split(" ");
		console.log(`🚀  steps:`, steps);
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
		const addCount = skipCount ? 0 : steps.length;
		const notation = code + " M:" + steps.length;
		cubeStore.addToLog({ stringNotation: notation, state: cube.value, count: count.value + addCount });
	};

	const scramble = () => {
		const scramble = generateScramble();
		doCode(scramble, true);
	};

	const notation = ["R", "U", "L", "D", "F", "B"];
	const slices = ["M", "E", "S", "x", "y", "z"];
	const showMoves = ref(false);
	const toggleMoves = () => {
		showMoves.value = !showMoves.value;
	};

	const solveCross = () => {
		const cross = cubeStore.solveCross();
		if (cross.length) doCode(cross.join(" "));
	};
	const solveF2L = () => {
		const F2L = cubeStore.solveF2L();
		if (F2L.length) doCode(F2L.join(" "));
	};
	const solveOLL = () => {
		const OLL = cubeStore.solveOLL();
		console.log(`🚀  OLL:`, OLL);
		if (OLL.length) doCode(OLL.join(" "));
	};
	const solvePLL = () => {
		const PLL = cubeStore.solvePLL();
		console.log(`🚀  PLL:`, PLL);
		if (PLL.length) doCode(PLL.join(" "));
	};
</script>

<template>
	<main>
		<h1>Cubrr</h1>
		<ul class="moves">
			<li>
				Helpers:
				<button @click="cubeStore.solveCube()">Reset</button>
				<button @click="scramble()">Scramble</button>
				<button @click="solveCross()">Solve Cross</button>
				<button @click="solveF2L()">Solve F2L</button>
				<button @click="solveOLL()">OLL</button>
				<button @click="solvePLL()">PLL</button>
			</li>
			<li>
				Fun:
				<button @click="doCode(`M2 E2 S2`)">M2 E2 S2</button>
				<button @click="doCode(`R U R' U'`)">R U R' U'</button>
				<button @click="doCode(`R U R' U R U2 R'`)">R U R' U R U2 R'</button>
			</li>
			<li v-for="letter in notation" v-if="showMoves">
				{{ letter }}:
				<button @click="doCode(`${letter}`)">{{ letter }}</button>
				<button @click="doCode(`${letter}'`)">{{ letter }}'</button>
				<button @click="doCode(`${letter}2`)">{{ letter }}2</button>
				<button @click="doCode(`${letter.toLowerCase()}`)">{{ letter.toLowerCase() }}</button>
				<button @click="doCode(`${letter.toLowerCase()}'`)">{{ letter.toLowerCase() }}'</button>
				<button @click="doCode(`${letter.toLowerCase()}2`)">{{ letter.toLowerCase() }}2</button>
			</li>
			<li v-for="letter in slices" v-if="showMoves">
				{{ letter }}:
				<button @click="doCode(`${letter}`)">{{ letter }}</button>
				<button @click="doCode(`${letter}'`)">{{ letter }}'</button>
				<button @click="doCode(`${letter}2`)">{{ letter }}2</button>
			</li>
			<li>
				<button @click="toggleMoves">Toggle all moves</button>
				<form @submit.prevent="doCode(command)">
					<label for="command-input">Run Algorithm</label>
					<textarea id="command-input" v-model="command" />
					<button>Submit</button>
				</form>
				<form @submit.prevent="convert(command2)">
					<label for="command-input">>Convert Code to Array</label>
					<textarea id="command-input" v-model="command2" />
					<button>Submit</button>
				</form>
			</li>
		</ul>
		<ul class="move-log">
			<li>Total Moves: {{ count }}</li>
			<li>Move Log:</li>
			<li v-for="(move, index) in log" :key="move.state">
				<button @click="cubeStore.updateCubeState(move.state, index)">{{ index }}: {{ move.stringNotation }}</button>
			</li>
		</ul>
		<Cube class="hide" />
	</main>
</template>

<style lang="scss">
	main {
		.hide {
			pointer-events: none;
			user-select: none;
		}
		.move-log {
			list-style: none;
			position: fixed;
			bottom: 1rem;
			right: 1rem;
			width: 20vh;
			background: #dedede;
			padding: 1rem;
			border: 1px solid;

			li {
				width: 100%;

				button {
					width: 100%;
					text-align: left;
				}
				+ li {
					margin-top: 0.5rem;
				}
			}
		}
		.moves {
			position: fixed;
			bottom: 0;
		}
	}
</style>
