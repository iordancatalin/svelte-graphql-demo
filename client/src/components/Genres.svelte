<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let genres = [
        "Action",
        "Adventure",
        "Drama",
        "Crime",
        "Horror",
        "Thriller",
    ];

    const dispatch = createEventDispatcher();
    const selectedGenres: string[] = [];

    const handleSelectGenre = (genre: string) => {
        const index = selectedGenres.indexOf(genre);

        index !== -1
            ? selectedGenres.splice(index, 1)
            : selectedGenres.push(genre);

        genres = genres;
        dispatch("genresSelected", { genres: selectedGenres });
    };
</script>

<div class="genres-container">
    {#each genres as genre}
        <button
            on:click={() => handleSelectGenre(genre)}
            class:selected={selectedGenres.includes(genre)}
            type="button"
            class="genre"
        >
            {genre}
        </button>
    {/each}
</div>

<style>
    .genre {
        cursor: pointer;

        display: inline-block;
        margin-left: 5px;
        margin-top: 5px;

        font-size: 12px;
        color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
        background-color: transparent;

        padding: 8px 10px;
        border-radius: 50px;

        transition: color 0.5s, background-color 0.5s;
    }

    .genre.selected,
    .genre:hover {
        background-color: var(--color-secondary);
        color: var(--background-color);
    }
</style>
