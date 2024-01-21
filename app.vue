<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<div class="text-center ma-8">
		Nuxt Boilerplate Version: {{ version }}
	</div>
</template>
<script setup lang="ts">
const i18n = useI18n()
const appConfig = useAppConfig()
useHead(
	{
		htmlAttrs() {
			return {
				lang: i18n.locale,
			}
		},
		meta: [
			{
				name: appConfig.app.description,
				content: appConfig.app.description,
			},
		],
	})

const { version } = appConfig.app
</script>
