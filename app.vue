<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
const i18n = useI18n()
useHead(
	{
		htmlAttrs() {
			return {
				lang: i18n.locale,
			}
		},
		meta: [
			{
				name: 'description',
				content: 'Nuxt.js project',
			},
		],
	})
</script>
