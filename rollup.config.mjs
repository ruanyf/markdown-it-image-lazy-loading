export default {
	input: 'index.mjs',
	output: {
		file: 'index.js',
		format: 'cjs'
	},
	external: ['image-size', 'node:path']
};
