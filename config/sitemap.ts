import { type ModuleOptions } from 'nuxt-simple-sitemap'
const config: Partial<ModuleOptions> = {
	enabled: true, // linked to robots config
	discoverImages: true,
	autoI18n: true,
	autoLastmod: true,
	sitemapName: 'sitemap.xml',
	sources: ['/dynamic-sitemap'], // server route for dynamic links
	exclude: ['/dashboard/**', '/admin/**', '/my/**', '/user/**', '/checkout/**'],
	credits: false,
}

export default config
