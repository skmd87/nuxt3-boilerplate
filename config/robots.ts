import { type ModuleOptions } from 'nuxt-simple-robots'
import sitemapConfig from './sitemap'
const config: Partial<ModuleOptions> = {
	disallow: [
		...sitemapConfig.exclude as string[] ?? [],
	],
	/*
    Sitemap is auto detected from sitemap module, not needed here
    sitemap: sitemapConfig.sitemapName,
    */
	credits: false,
	metaTag: true,
}

export default config
