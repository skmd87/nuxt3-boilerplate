import piniaConfig from './config/pinia'
import eslintConfig from './config/eslint'
import imageConfig from './config/image'
import i18nConfig from './config/i18n'
import sitemapConfig from './config/sitemap'
import jsonldConfig from './config/jsonld'
import robotsConfig from './config/robots'
import gtmConfig from './config/gtm'
import vuetifyConfig from './config/vuetify'
import unoCss from './config/unoCss'
import vueuseConfig from './config/vueuse'
import autoAnimateConfig from './config/autoAnimate'
import htmlValidatorConfig from './config/htmlValidator'
import testUtilsConfig from './config/testUtils'
import pwaConfig from './config/pwa'
import dayjsConfig from './config/dayjs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: [
		// ['github:username/repoName', { install: true }],
		['../nuxt3-admin-layer', { install: true }],
	],
	$production: {
		routeRules: {

		},
	},
	$development: {
		routeRules: {

		},
	},
	routeRules: {
		// '/admin/**': { ssr: false },
		'/*/admin/**': { ssr: false },
	},
	runtimeConfig: {

	},
	alias: {
		config: '/<rootDir>/config',
	},
	css: [
		'vuetify/styles',
	],
	devtools: {
		enabled: true,
	},
	experimental: {
		typedPages: true,
	},
	modules: [
		['@pinia/nuxt', piniaConfig],
		['@nuxtjs/eslint-module', eslintConfig],
		['@nuxtjs/i18n', i18nConfig],
		['@formkit/auto-animate', autoAnimateConfig],
		['@vueuse/nuxt', vueuseConfig],
		['@nuxt/image', imageConfig],
		['nuxt-simple-sitemap', sitemapConfig],
		['nuxt-jsonld', jsonldConfig],
		['nuxt-simple-robots', robotsConfig],
		// 'nuxt-typed-router', awaiting v4
		['@zadigetvoltaire/nuxt-gtm', gtmConfig],
		['@nuxtjs/html-validator', htmlValidatorConfig],
		['vuetify-nuxt-module', vuetifyConfig],
		['@unocss/nuxt', unoCss],
		['@nuxt/test-utils/module', testUtilsConfig],
		['@vite-pwa/nuxt', pwaConfig],
		['dayjs-nuxt', dayjsConfig],
	],
	typescript: {
		typeCheck: true,
		strict: true,
		shim: false, // assuming running volar with takeover mode
	},
	watch: ['./config/*'],
	features: {
		inlineStyles: false, // required for vuetify with sass
	},
})
