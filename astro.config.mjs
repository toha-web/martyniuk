// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	i18n: {
		locales: ["uk", "en"],
		defaultLocale: "uk",
	},
	site: "https://www.my-site.dev",
	redirects: {
		"/uk": "/",
	},
});
