<script setup>
	// Libraries
	import { storeToRefs } from "pinia";

	// Stores
	import { useCubeStore } from "@/stores/cube";

	const { cube } = storeToRefs(useCubeStore());
</script>

<template>
	<div class="cube">
		<div class="side null"></div>
		<div class="side back">
			<Face :colors="cube[0]" />
		</div>
		<div class="side null"></div>
		<div class="side null"></div>
		<div class="side left">
			<Face :colors="cube[1]" />
		</div>
		<div class="side top">
			<Face :colors="cube[2]" />
		</div>
		<div class="side right">
			<Face :colors="cube[3]" />
		</div>
		<div class="side bottom">
			<Face :colors="cube[4]" />
		</div>
		<div class="side null"></div>
		<div class="side front">
			<Face :colors="cube[5]" />
		</div>
		<div class="side null"></div>
		<div class="side null"></div>
	</div>
</template>

<style lang="scss" scoped>
	.cube {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(4, 1fr);
		transform-origin: center;
		transform-style: preserve-3d;
		perspective: 1000px;

		.side {
			display: flex;
			justify-content: center;
			align-items: center;

			&.back {
				transform: rotate(180deg);
			}
			&.left {
				transform: rotate(90deg);
			}
			&.right {
				transform: rotate(-90deg);
			}
			&.bottom {
				transform-origin: center;
				transform: rotateZ(180deg) rotateY(-15deg);
			}
		}
	}
</style>
