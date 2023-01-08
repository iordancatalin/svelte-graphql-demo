<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { DeleteCharacter, Movie, MovieByIdDoc } from "../graphql/generated";
    import Character from "./Character.svelte";

    export let movie: Movie;

    const dispatch = createEventDispatcher();

    const closeDetails = () => {
        dispatch("closeDetails");
    };

    const handleDeleteCharacter = async (
        deleteCharacterEvent: CustomEvent<{ id: string }>
    ) => {
        console.log(deleteCharacterEvent);

        await DeleteCharacter({
            variables: {
                movieId: movie.id,
                id: deleteCharacterEvent.detail.id,
            },
            refetchQueries: [MovieByIdDoc],
        });
    };
</script>

<section class="movie-details-container">
    <button on:click={closeDetails} type="button" class="close-details-button">
        &times;
    </button>
    <div class="movie-details-title">
        {movie.title}
    </div>
    <div class="movie-details-duration">
        <span>{Math.floor(movie.duration / 60)}h</span>
        <span>{movie.duration - Math.floor(movie.duration / 60) * 60}m</span>
    </div>

    <div class="movie-details-image-container">
        <img
            width="350px"
            height="400px"
            src={movie.imageURL}
            alt={movie.title}
        />

        <div class="genres-container">
            {#each movie.genres as genre}
                <div class="genre-token">{genre}</div>
            {/each}
        </div>
    </div>

    <div class="movie-details-description">
        <p>{movie.description}</p>
    </div>

    {#if movie.characters?.length > 0}
        <div class="cast-container">
            <div class="section-title">Cast</div>

            <div class="characters-container">
                {#each movie.characters as character}
                    <Character
                        on:deleteCharater={handleDeleteCharacter}
                        {character}
                    />
                {/each}
            </div>
        </div>
    {/if}
</section>

<style>
    .movie-details-container {
        padding-left: 20px;

        display: flex;
        flex-direction: column;

        height: 100%;
        width: 100%;
        overflow: auto;

        background-color: var(--background-side-banner);
    }

    .close-details-button,
    .close-details-button:active {
        cursor: pointer;

        padding: 10px 20px;
        align-self: flex-end;

        font-size: 20px;
        border: 0;
        background-color: transparent;
        color: var(--color-secondary);
    }

    .movie-details-title {
        font-size: 1.5em;
        color: var(--color-secondary);
    }

    .movie-details-duration {
        padding-top: 5px;
        font-size: 14px;
    }

    .movie-details-description {
        color: var(--color-secondary);
    }

    .movie-details-description p {
        line-height: 20px;
        text-indent: 30px;
    }

    .movie-details-image-container {
        padding-top: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .movie-details-image-container img {
        border-radius: 10px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    }

    .genres-container {
        display: flex;
        gap: 10px;
        padding: 10px;
    }

    .genre-token {
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 40px;

        background-color: var(--color-secondary);
        color: var(--background-side-banner);
        border: 1px solid var(--color-secondary);
    }

    .cast-container {
        padding-right: 20px;
    }

    .section-title {
        font-size: 1.5rem;
        padding: 20px 0;
        color: var(--color-secondary);
        border-bottom: 1px solid var(--color-secondary);
    }

    .characters-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 20px 0;
    }
</style>
