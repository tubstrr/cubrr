<script setup>
	const colors = ["r", "w", "b", "y", "g", "o", "r", "w", "b"];
</script>

<template>
	<main>
		<h1>Hello</h1>
		<div class="cube">
			<div class="side null"></div>
			<div class="side back">
				<Face :colors="colors" />
			</div>
			<div class="side null"></div>
			<div class="side null"></div>
			<div class="side left">
				<Face :colors="colors" />
			</div>
			<div class="side top">
				<Face :colors="colors" />
			</div>
			<div class="side right">
				<Face :colors="colors" />
			</div>
			<div class="side bottom">
				<Face :colors="colors" />
			</div>
			<div class="side null"></div>
			<div class="side front">
				<Face :colors="colors" />
			</div>
			<div class="side null"></div>
			<div class="side null"></div>
		</div>
	</main>
</template>

<style lang="scss">
	.cube {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(4, 1fr);

		.side {
			background: #ccc;
			border: 1px solid #000;
			display: flex;
			justify-content: center;
			align-items: center;
			ul {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				padding: 0;
				list-style-type: none;

				li {
					height: 100px;
					width: 100px;
					border: 1px solid black;
				}
			}
		}
	}
</style>
