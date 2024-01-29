<template>
	<v-layout class="rounded rounded-md">
		<v-app-bar title="Application bar" />

		<v-navigation-drawer permanent>
			<v-list
				:items="menuItems"
			/>
		</v-navigation-drawer>

		<v-main
			class="d-flex align-center justify-center"
			style="min-height: 300px;"
		>
			<slot>Main Content</slot>
		</v-main>
	</v-layout>
</template>

<script lang="ts" setup>
import { VList } from 'vuetify/components'
type MenuItems = InstanceType<typeof VList>['$props']['items']
const menuItems: MenuItems = [
	{
		title: 'Home',
		props: { prependIcon: 'i-mdi:home', to: '/admin' },
	},
	{
		title: 'About',
		props: { prependIcon: 'i-mdi:help-box', to: '/admin/about' },
	},
	{
		title: 'Contact',
		props: { prependIcon: 'i-mdi:email', to: '/admin/contact' },
	},
	{
		title: 'Settings',
		props: { prependIcon: 'i-mdi:cog', to: '/admin/settings' },
	},
	{
		title: 'Logout',
		props: { prependIcon: 'i-mdi:logout', to: '/admin/logout' },
		divider: true,
	},
]
</script>

<style></style>
