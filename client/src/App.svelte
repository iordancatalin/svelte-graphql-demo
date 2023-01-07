<script lang="ts">
	import ActorsPage from "./components/ActorsPage.svelte";
	import MoviesPage from "./components/MoviesPage.svelte";

	let selectedTab: "Movies" | "Actors" = "Actors";
</script>

<section>
	<header>
		<button
			on:click={() => (selectedTab = "Movies")}
			class:selected={selectedTab === "Movies"}
			class="tab-item"
			type="button">Movies</button
		>
		<button
			on:click={() => (selectedTab = "Actors")}
			class:selected={selectedTab === "Actors"}
			class="tab-item"
			type="button">Actors</button
		>
	</header>

	<main>
		{#if selectedTab === "Movies"}
			<MoviesPage />
		{/if}

		{#if selectedTab === "Actors"}
			<ActorsPage />
		{/if}
	</main>
</section>

<svelte:head>
	<style>
		:root {
			--background-color: #171717;
			--color-secondary: #ededed;
			--color-white: #ffffff;
			--color-gray: #bdbbbb;
			--color-red: #ab0707;
			--color-transparent-red: #ff000075;
			--background-side-banner: #121111;
			--background-side-banner-input: #0d0c0c;
		}
	</style>
</svelte:head>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		padding: 0;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	section {
		display: flex;
		flex-direction: column;

		height: 100%;
		overflow: hidden;
	}

	header {
		display: flex;
		gap: 20px;
		padding: 10px 20px;
		border-bottom: 1px solid var(--color-secondary);
	}

	main {
		display: flex;
		flex: 1;

		overflow: auto;
	}

	.tab-item {
		min-width: 150px;
		padding: 10px;
		transform: skewX(-20deg);
		color: var(--color-secondary);
		background-color: transparent;
		border: 1px solid var(--color-secondary);
		transition: backgorund-color 0.5s, color 0.5s;
	}

	.tab-item:hover {
		cursor: pointer;
		color: var(--background-color);
		background-color: var(--color-secondary);
	}

	.tab-item.selected {
		color: var(--background-color);
		background-color: var(--color-secondary);
	}
</style>
