<script setup>
	// Stores
	import { useCubeStore } from "@/stores/cube";

	const cubeStore = useCubeStore();

	const command = ref(null);
	const submit = () => {
		const steps = command.value.split(" ");
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
	};

	const doCode = (code) => {
		const steps = code.split(" ");
		steps.forEach((step) => {
			const prime = step.includes("'");
			const double = step.includes("2");
			cubeStore.rotateFace(step[0], prime, double);
		});
	};

	const notation = ["R", "U", "L", "D", "F", "B"];
	const slices = ["M", "E", "S"];
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
		<Cube />
	</main>
</template>
