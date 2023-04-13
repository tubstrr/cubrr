<script setup>
	// Libraries
	import { storeToRefs } from "pinia";

	// Stores
	import { useCubeStore } from "@/stores/cube";
	import { generateScramble } from "@/composables/generateScramble";

	const cubeStore = useCubeStore();
	const { log, cube } = storeToRefs(cubeStore);

	const command = ref(null);
	const submit = () => {
		const steps = command.value.replaceAll("(", "").replaceAll(")", "").split(" ");
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
	};

	const doCode = (code) => {
		cubeStore.addToLog({ stringNotation: code, state: cube.value });
		const steps = code.replaceAll("(", "").replaceAll(")", "").split(" ");
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
	};

	const scramble = () => {
		const scramble = generateScramble();
		doCode(scramble);
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
</script>

<template>
	<main>
		<h1>Cubrr</h1>
		<ul>
			<li>
				Helpers:
				<button @click="scramble()">Scramble</button>
				<button @click="cubeStore.solveCube()">Solve</button>
				<button @click="solveCross()">Solve Cross</button>
			</li>
			<li>
				Fun:
				<button @click="doCode(`M2 E2 S2`)">M2 E2 S2</button>
				<button @click="doCode(`R U R' U'`)">R U R' U'</button>
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
		</ul>
		<button @click="toggleMoves">Toggle all moves</button>
		<form @submit.prevent="submit">
			<label for="command-input">Run Algorithm</label>
			<textarea id="command-input" v-model="command" />
			<button>Submit</button>
		</form>
		<ul class="move-log">
			<li>Move Log:</li>
			<li v-for="(move, index) in log" :key="move.state">
				<button @click="cubeStore.updateCubeState(move.state, index)">{{ index }}: {{ move.stringNotation }}</button>
			</li>
		</ul>
		<Cube />
	</main>
</template>

<style lang="scss">
	main {
		.move-log {
			list-style: none;
			position: fixed;
			top: 0;
			right: 0;
		}
	}
</style>
