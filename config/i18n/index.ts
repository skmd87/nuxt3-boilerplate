import { type ModuleOptions } from '@nuxtjs/i18n'
import { defaultLocale, supportedLocales } from '../general'
const config: ModuleOptions = {
    defaultLocale: defaultLocale,
    langDir: 'config/i18n/locales/',
    locales: supportedLocales,
    lazy: true,
    strategy: 'prefix',
    vueI18n: './config/i18n/vueI18n.ts',
}

export default config
