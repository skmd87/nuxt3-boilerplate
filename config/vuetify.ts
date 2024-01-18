import { type ModuleOptions } from 'vuetify-nuxt-module'
import { md3 } from 'vuetify/blueprints'

const config: ModuleOptions = {
	moduleOptions: {
		importComposables: true,
		includeTransformAssetsUrls: true,
		prefixComposables: false,
		styles: {
			configFile: './assets/styles/vuetify.variables.scss',
		},
		ssrClientHints: {
			prefersColorScheme: true,
			viewportSize: true,
			prefersColorSchemeOptions: {
				cookieName: 'color-scheme',
				darkThemeName: 'dark',
				lightThemeName: 'light',
				useBrowserThemeOnly: false,
			},
		},
	},
	vuetifyOptions: {
		blueprint: md3,
		date: {
			adapter: 'dayjs',
		},
		display: {
			thresholds: {
				xs: 600,
				sm: 960,
				md: 1280,
				lg: 1920,
				xl: 2560,
			},
		},
		aliases: {
			// 'Select': 'VSlideGroup',
		},
		defaults: {
			global: {
				// ripple: false,
			},

			VSheet: {
				// elevation: 10,
			},

		},
		icons: {
			defaultSet: 'unocss-mdi',
			unocssIcons: {
				/* Override vuetify icons */
				//  calendar: 'i-fe:calendar',
			},
			unocssAdditionalIcons: {
				/* additional common icons */

			},
		},
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					colors: {},
					dark: false,
				},
				dark: {
					colors: {},
					dark: true,
				},
			},
		},

	},
}

export default config
