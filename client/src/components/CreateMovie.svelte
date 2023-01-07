<script lang="ts">
    import Genres from "./Genres.svelte";
    import { CreateMovie, MoviesSummaryDoc } from "../graphql/generated";

    let expanded = false;

    let title: string;
    let description: string;
    let imageURL: string;
    let genres: string[] = [];
    let duration: number;

    const toggle = () => {
        expanded = !expanded;
    };

    const handleGenresSelected = (
        selectedGenresEvent: CustomEvent<{ genres: string[] }>
    ) => {
        genres = selectedGenresEvent.detail.genres;
    };

    const createMovie = async (event: Event) => {
        event.preventDefault();

        await CreateMovie({
            variables: {
                title,
                description,
                duration,
                genres,
                imageURL,
            },
            refetchQueries: (mutationResult) =>
                !mutationResult.errors ? [MoviesSummaryDoc] : [],
        }).then(() => {
            title = undefined;
            description = undefined;
            imageURL = undefined;
            duration = undefined;
            genres = [];

            expanded = false;
        });
    };
</script>

<div class="create-movie-container">
    <form
        on:submit={createMovie}
        class:expanded
        class="create-movie-form-container"
    >
        <button
            on:click={() => (expanded = false)}
            type="button"
            class="close-modal-button"
        >
            &times;
        </button>

        <div class="inputs-container">
            <div class="form-field">
                <label for="movie-title"> Title* </label>
                <input bind:value={title} id="movie-title" type="text" />
            </div>

            <div class="form-field">
                <label for="movie-description"> Description </label>
                <textarea bind:value={description} id="movie-description" />
            </div>

            <div class="form-field">
                <label for="movie-image-url"> Image URL* </label>
                <input bind:value={imageURL} id="movie-image-url" type="text" />
            </div>

            <div class="form-field">
                <label for="movie-duration"> Duration (minutes)*</label>
                <input
                    bind:value={duration}
                    id="movie-duration"
                    type="number"
                />
            </div>

            <div class="form-field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label> Genres* </label>
                <Genres on:genresSelected={handleGenresSelected} />
            </div>
        </div>

        <button
            class="create-movie-button"
            disabled={!title ||
                !imageURL ||
                !duration ||
                !genres ||
                genres.length === 0}
        >
            Create
        </button>
    </form>

    <button on:click={toggle} class="toggle-modal-button">&plus;</button>
</div>

<style>
    .create-movie-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
    }

    .create-movie-form-container {
        display: none;
        flex-direction: column;

        padding: 20px;

        width: 350px;
        height: 700px;

        border-radius: 10px;

        background-color: var(--background-side-banner);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    }

    .create-movie-form-container.expanded {
        display: flex;
    }

    .create-movie-container .close-modal-button {
        color: var(--color-secondary);
        background-color: transparent;

        border: 0;
        align-self: flex-end;

        font-size: 20px;
        cursor: pointer;
    }

    .toggle-modal-button {
        cursor: pointer;
        font-size: 20px;

        width: 70px;
        height: 70px;
        background-color: var(--background-side-banner);
        color: var(--color-secondary);
        border: 0;

        border-radius: 1000px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    }

    .toggle-modal-button:hover {
        color: var(--background-side-banner);
        background-color: var(--color-secondary);
    }

    .create-movie-form-container .form-field {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .create-movie-container .inputs-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        flex-grow: 1;
    }

    .form-field label {
        color: var(--color-secondary);
    }

    .form-field input,
    .form-field textarea {
        color: var(--color-secondary);
        background-color: var(--background-side-banner-input);
        border: 1px solid var(--color-secondary);
        padding: 10px;
        border-radius: 7px;

        resize: none;
    }

    .create-movie-button {
        align-self: flex-end;

        padding: 10px 30px;
        background-color: var(--color-secondary);
        color: var(--background-color);
        cursor: pointer;

        border-radius: 10px;
    }

    .create-movie-button:disabled {
        cursor: not-allowed;
        background-color: var(--color-gray);
    }
</style>
