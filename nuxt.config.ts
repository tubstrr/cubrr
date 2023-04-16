// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Cubrr",
			meta: [
				{
					name: "description",
					content:
						"Join me in unraveling the intriguing world of Rubik's Cube with this fun tool I've developed! Generate random scrambles and uncover algorithms to help you solve the cube. It's a delightful challenge for the brain and a celebration of the cube's mystique. So come along, let's explore and solve together in this whimsical corner of the web!"
				}
			]
		}
	},
	components: ["~/components"],
	modules: [
		// ...
		"@pinia/nuxt"
	]
});
