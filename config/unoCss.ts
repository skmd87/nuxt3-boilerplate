import { type UnocssNuxtOptions } from '@unocss/nuxt'
import { presetIcons } from 'unocss'
const config: UnocssNuxtOptions = {
	warn: true,
	presets: [
		presetIcons({
			scale: 1.2, // scale the icons
		}),
	],
}

export default config
