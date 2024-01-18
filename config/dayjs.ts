import { type ModuleOptions } from 'dayjs-nuxt'
import { defaultLocale, supportedLocalesCodes } from './general'

const config: ModuleOptions = {
	locales: supportedLocalesCodes,
	plugins: ['relativeTime', 'utc', 'timezone'],
	defaultLocale,
	defaultTimezone: 'Asia/Amman',
}

export default config
