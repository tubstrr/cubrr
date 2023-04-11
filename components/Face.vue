<script setup>
	// Composables
	import { makeUID } from "@/composables/makeUID";

	const props = defineProps({
		colors: {
			type: Array,
			default: []
		}
	});

	const { colors } = toRefs(props);
</script>
<template>
	<ul>
		<li v-for="(item, index) in colors" :color="item" :key="`${item}-${makeUID()}`">
			{{ index }}
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0;
		list-style-type: none;

		li {
			height: 100px;
			width: 100px;
			border: 1px solid black;
			&[color="r"] {
				background: red;
			}
			&[color="w"] {
				background: white;
			}
			&[color="b"] {
				background: blue;
			}
			&[color="y"] {
				background: yellow;
			}
			&[color="g"] {
				background: green;
			}
			&[color="o"] {
				background: orange;
			}
		}
	}
</style>
