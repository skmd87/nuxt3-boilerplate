import { type ModuleOptions } from '@vite-pwa/nuxt'
// https://www.pwabuilder.com/imageGenerator
import generatedIcons from '../public/pwa/icons.json'
// relative to public dir
const icons = generatedIcons.icons.map((icon) => {
	icon.src = '/pwa/' + icon.src
	// @ts-ignore
	icon.type = 'image/png'
	return icon
})
const config: ModuleOptions = {
	mode: 'development',
	registerType: 'autoUpdate',
	injectManifest: {
		swSrc: 'sw.js',
	},
	strategies: 'generateSW',
	client: {
		installPrompt: true,
	},
	manifest: {
		name: 'Nuxt 3 Admin Layer',
		description: 'Nuxt 3 Admin Layer',
		short_name: 'N3AL',
		theme_color: '#ffffff',
		display: 'standalone',
		display_override: ['standalone', 'window-controls-overlay', 'minimal-ui'],
		icons,
		orientation: 'any',
		screenshots: [
			{
				src: '/pwa/screenshot.png',
				type: 'image/png',
				sizes: '1883x917',
				form_factor: 'wide',
			},
			{
				src: '/pwa/screenshot-narrow.png',
				type: 'image/png',
				sizes: '786x902',
				form_factor: 'narrow',
			},
		],

	},
	workbox: {
		/*
		This will force any update to happen immediately, without waiting for the user to close and reopen the app.
		skipWaiting: true,
		clientsClaim: true,
		*/
		runtimeCaching: [
			/* {
				urlPattern: ({ url }) => {
					return url.pathname.startsWith('/api')
				},
				handler: 'CacheFirst',
				method: 'GET',
				options: {
					cacheName: 'api-cache',
					cacheableResponse: {
						statuses: [0, 200],
					},
					expiration: {
						maxAgeSeconds: 60 * 60 * 24 * 7,
					},
				},
			}, */
		],
	},
	filename: 'sw.ts',
	srcDir: 'public/pwa',
	writePlugin: true,
	// base: '/admin/',
	devOptions: {
		enabled: true,
		type: 'module',

	},
}

export default config
