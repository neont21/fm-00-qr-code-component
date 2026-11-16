<script lang="ts">
	import favicon from "#lib/assets/favicon.svg";
	import type { LayoutProps } from "./$types";
	import "../app.css";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer class="attribution">
	Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by
	<a href="https://github.com/neont21">Joowon Jung</a>.
</footer>

<style>
	footer {
		margin-top: 2rem;
	}
</style>
