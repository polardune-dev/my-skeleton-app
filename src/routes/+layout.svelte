<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">Logo</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a class="btn" href="https://help.sample.com" target="_blank" rel="noreferrer">Help</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment>
				<AppRailAnchor href="/"><svelte:fragment slot="lead"><i class="fa-solid fa-home" /></svelte:fragment></AppRailAnchor>
				<AppRailAnchor href="/things"><svelte:fragment slot="lead"><i class="fa-solid fa-list" /></svelte:fragment></AppRailAnchor>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/settings"
					><svelte:fragment slot="lead"><i class="fa-solid fa-gear" /></svelte:fragment><span
						>Settings</span
					></AppRailAnchor
				>
				<AppRailAnchor href="/about">About</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<slot />
</AppShell>
