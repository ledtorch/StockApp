import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: './',
	// that because Vue default url is → /
	// so use → base: './',
	// to change the default url
});

// import.meta.env.PROD = true,
