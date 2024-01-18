import { type ModuleOptions } from '@nuxt/image'
import { breakpoints } from './general'
const config: Partial<ModuleOptions> = {

	inject: false, // make $img globally available
	quality: 90,
	format: ['webp'],
	screens: breakpoints,
	presets: {},
	provider: 'ipx',
}

export default config
