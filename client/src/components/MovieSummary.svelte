<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Movie } from "../graphql/generated";

    export let movie: Pick<Movie, "id" | "title" | "imageURL">;

    const dispatch = createEventDispatcher();

    const deleteMovie = () => {
        dispatch("deleteMovie", {
            id: movie.id,
        });
    };

    const openMovieDetails = () => {
        dispatch("openMovieDetails", {
            id: movie.id,
        });
    };
</script>

<div class="movie-container">
    <div class="movie-image-container">
        <img src={movie.imageURL} alt={movie.title} class="actor-image" />

        <div class="actions-container">
            <div class="delete-container">
                <button on:click={deleteMovie}>&times;</button>
            </div>

            <div class="open-details-container">
                <button on:click={openMovieDetails}> &#128065;</button>
            </div>
        </div>
    </div>

    <button on:click={openMovieDetails} class="movie-name-container">
        {movie.title}
    </button>
</div>

<style>
    .movie-container {
        display: flex;
        flex-direction: column;
    }

    .movie-image-container {
        position: relative;

        border-radius: 10px;

        width: 220px;
        height: 250px;

        overflow: hidden;
    }

    .actor-image {
        width: 100%;
        height: 100%;

        transition: transform 0.5s;
    }

    .movie-image-container:hover .actor-image {
        cursor: pointer;
        transform: scale(1.1);
    }

    .movie-name-container {
        padding: 5px;
        text-align: center;

        color: var(--color-secondary);
        background-color: transparent;
        border: 0;

        cursor: pointer;
    }

    .movie-image-container:hover .actions-container {
        opacity: 1;
    }

    .actions-container {
        cursor: pointer;

        position: absolute;
        left: 0;
        top: 0;

        height: 100%;
        width: 100%;
        opacity: 0;

        transition: opacity 0.5s ease-in-out;
    }

    .delete-container,
    .open-details-container {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 50%;
    }

    .delete-container {
        background-color: var(--color-transparent-red);
    }

    .open-details-container {
        background-color: var(--color-transparent-blue);
    }

    .actions-container button {
        width: 40px;
        height: 40px;
        border-radius: 1000px;

        color: var(--color-secondary);
        background-color: transparent;
        border: 1px solid var(--color-secondary);

        transition: color 0.5s, background-color 0.5s;
    }

    .actions-container button:hover {
        cursor: pointer;
        color: var(--color-red);
        background-color: var(--color-secondary);
    }
</style>
