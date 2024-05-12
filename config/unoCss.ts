import { type UnocssNuxtOptions } from '@unocss/nuxt'
import { presetIcons, type PresetFactory } from 'unocss'
const config: UnocssNuxtOptions = {
	warn: true,
	presets: [
		presetIcons({
			scale: 1.2, // scale the icons
		}) as PresetFactory,
	],
}

export default config
