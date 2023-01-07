<script lang="ts">
    import { MoviesSummary } from "../graphql/generated";
    import Movie from "./MovieSummary.svelte";

    $: movies = MoviesSummary({});
</script>

<section class="movies-container">
    <div class="movies-panel">
        {#each $movies?.data?.allMovies || [] as movie}
            <Movie {movie} />
        {/each}
    </div>
</section>

<style>
    .movies-container {
        display: flex;
        width: 100%;
    }

    .movies-panel {
        padding: 10px;
        height: 0;

        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        flex: 1;

        padding: 20px;
    }
</style>
