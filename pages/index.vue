<template>
	<NuxtWelcome />
</template>

<script lang="ts" setup>

const { $pwa } = useNuxtApp()

onMounted(() => {
	console.log($pwa)

	if ($pwa?.offlineReady) {
		alert('App ready to work offline')
	} else {
		console.log('App not ready to work offline')
		$pwa?.install()
	}
})
</script>
