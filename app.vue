<script setup>
	// Libraries
	import { storeToRefs } from "pinia";

	// Stores
	import { useCubeStore } from "@/stores/cube";
	import { generateScramble } from "@/composables/generateScramble";

	const cubeStore = useCubeStore();
	const { log } = storeToRefs(cubeStore);

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
		const steps = code.replaceAll("(", "").replaceAll(")", "").split(" ");
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
	};

	const scramble = () => {
		const scramble = generateScramble();
		console.log(`🚀  scramble:`, scramble);
		doCode(scramble);
	};

	const notation = ["R", "U", "L", "D", "F", "B"];
	const slices = ["M", "E", "S", "x", "y", "z"];
</script>

<template>
	<main>
		<h1>Hello</h1>
		<ul>
			<li>
				S:
				<button @click="cubeStore.solveCube()">Solve</button>
			</li>
			<li>
				Scramble:
				<button @click="scramble()">Scramble</button>
			</li>
			<li>
				Cross:
				<button @click="doCode(`R2 L2 U2 D2 B2 F2`)">*2</button>
			</li>
			<li>
				Flick:
				<button @click="doCode(`R U R' U'`)">R U R' U'</button>
			</li>
			<li v-for="letter in notation">
				{{ letter }}:
				<button @click="cubeStore.rotateFace(letter, false, false)">{{ letter }}</button>
				<button @click="cubeStore.rotateFace(letter, true, false)">{{ letter }}'</button>
				<button @click="cubeStore.rotateFace(letter, false, true)">{{ letter }}2</button>
				<button @click="cubeStore.rotateFace(letter.toLowerCase(), false, false)">{{ letter.toLowerCase() }}</button>
				<button @click="cubeStore.rotateFace(letter.toLowerCase(), true, false)">{{ letter.toLowerCase() }}'</button>
				<button @click="cubeStore.rotateFace(letter.toLowerCase(), false, true)">{{ letter.toLowerCase() }}2</button>
			</li>
			<li v-for="letter in slices">
				{{ letter }}:
				<button @click="cubeStore.rotateFace(letter, false, false)">{{ letter }}</button>
				<button @click="cubeStore.rotateFace(letter, true, false)">{{ letter }}'</button>
				<button @click="cubeStore.rotateFace(letter, false, true)">{{ letter }}2</button>
			</li>
		</ul>
		<form @submit.prevent="submit">
			<input type="text" v-model="command" />
			<button>Submit</button>
		</form>
		<ul class="move-log">
			<li>Move Log:</li>
			<li v-for="(move, index) in log" :key="move.state">
				<button @click="cubeStore.updateCubeState(move.state, index)">
					{{ move.stringNotation }}
				</button>
			</li>
		</ul>
		<Cube />
	</main>
</template>

<style lang="scss">
	.move-log {
		list-style: none;
		position: fixed;
		top: 0;
		right: 0;
	}
</style>
