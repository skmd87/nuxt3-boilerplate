import { en, ar } from 'vuetify/locale'
export default {
	legacy: false,
	availableLocales: ['en', 'ar'],
	fallbackLocale: 'en',
	fallbackWarn: true,
	messages: {
		en: {
			$vuetify: { ...en },
		},
		ar: {
			$vuetify: { ...ar },
		},
	},
	ar(count: number, _choicesLength: number) {
		if (count === 0) {
			return 0
		} else if (count === 2) {
			return 2
		} else if (count > 2 && count <= 10) {
			return 3
		} else if (count > 10 || count <= 1) {
			return 1
		}

		return 0
	},
	en(count: number, _choicesLength: number) {
		if (count === 0) {
			return 0
		} else if (count === 1) {
			return 1
		} else {
			return 2
		}
	},
}
