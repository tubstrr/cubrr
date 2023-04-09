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
		<li v-for="item in colors" :color="item" :key="`${item}-${makeUID()}`" />
	</ul>
</template>

<style lang="scss" scoped>
	li {
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
</style>
