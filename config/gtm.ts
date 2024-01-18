import { type ModuleOptions } from '@zadigetvoltaire/nuxt-gtm'
import { isDev } from './general'
const config: ModuleOptions = {
	id: 'GTM-123456', // its preferred to use NUXT_PUBLIC_GTM_ID
	defer: true,
	compatibility: true,
	enabled: true,
	debug: isDev,
	loadScript: true,
	enableRouterSync: true,
	// ignoredViews: ['homepage'],
	trackOnNextTick: false,
	devtools: isDev,
}

export default config
