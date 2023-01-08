<script lang="ts">
    import {
        DeleteMovie,
        MoviesSummary,
        MoviesSummaryDoc,
        MovieById,
        Movie,
    } from "../graphql/generated";
    import Character from "./Character.svelte";
    import CreateMovie from "./CreateMovie.svelte";
    import MovieDetails from "./MovieDetails.svelte";
    import MovieSummary from "./MovieSummary.svelte";

    let selectedMovie: Movie | null = null;

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

    const handleMovieDetails = (
        movieDetailsEvent: CustomEvent<{ id: string }>
    ) => {
        MovieById({ variables: { id: movieDetailsEvent.detail.id } }).subscribe(
            (value) => (selectedMovie = value.data.movieById)
        );
    };

    const handleCloseDetails = () => {
        selectedMovie = null;
    };
</script>

<section class="movies-container">
    {#if selectedMovie != null}
        <div class="movie-details-container">
            <MovieDetails
                on:closeDetails={handleCloseDetails}
                movie={selectedMovie}
            />
        </div>
    {/if}

    <div class="movies-panel">
        {#each $movies?.data?.allMovies || [] as movie}
            <MovieSummary
                on:deleteMovie={handleDeleteMovie}
                on:openMovieDetails={handleMovieDetails}
                {movie}
            />
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

    .movie-details-container {
        width: 500px;
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
