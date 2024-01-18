const config: Record<string, any> = {
	defaultLocale: 'ar',
	supportedLocales: [
		{
			code: 'en',
			iso: 'en-US',
			file: 'en.json',
		},
		{
			code: 'ar',
			iso: 'ar-JO',
			file: 'ar.json',
		},
	],
	get supportedLocalesCodes() {
		return this.supportedLocales.map((locale: { code: any; }) => locale.code)
	},
	breakpoints: {
		xs: 600,
		sm: 960,
		md: 1280,
		lg: 1920,
		xl: 2560,
	},
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	isTesting: process.env.NODE_ENV === 'testing',
}

export const {
	defaultLocale,
	supportedLocales,
	supportedLocalesCodes,
	breakpoints,
	isDev,
	isProd,
} = config

export default config
