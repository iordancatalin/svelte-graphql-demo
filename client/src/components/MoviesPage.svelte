<script lang="ts">
    import {
        DeleteMovie,
        MoviesSummary,
        MoviesSummaryDoc,
    } from "../graphql/generated";
    import CreateMovie from "./CreateMovie.svelte";
    import Genres from "./Genres.svelte";
    import Movie from "./MovieSummary.svelte";

    $: movies = MoviesSummary({});

    const handleDeleteMovie = async (
        deleteMovieEvent: CustomEvent<{ id: string }>
    ) => {
        await DeleteMovie({
            variables: {
                id: deleteMovieEvent.detail.id,
            },
            refetchQueries: (mutationResult) =>
                !mutationResult.errors ? [MoviesSummaryDoc] : [],
        });
    };
</script>

<section class="movies-container">
    <div class="movies-panel">
        {#each $movies?.data?.allMovies || [] as movie}
            <Movie on:deleteMovie={handleDeleteMovie} {movie} />
        {/each}
    </div>

    <div class="create-actor-panel">
        <CreateMovie />
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

    .create-actor-panel {
        position: fixed;
        bottom: 20px;
        right: 20px;

        width: 400px;
    }
</style>
