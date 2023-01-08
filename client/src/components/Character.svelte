<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Character } from "../graphql/generated";

    export let character: Character;

    const dispatch = createEventDispatcher();

    const deleteCharacter = () => {
        dispatch("deleteCharater", {
            id: character.id,
        });
    };
</script>

<div class="character-container">
    <div class="image-container">
        <img
            src={character.playedBy.imageURL}
            alt={character.playedBy.name}
            width="80px"
            height="80px"
        />

        <div class="delete-container">
            <button on:click={deleteCharacter} type="button">&times;</button>
        </div>
    </div>

    <div class="information-container">
        <div class="actor-name">
            {character.playedBy.name}
        </div>

        <div class="character-name">
            {character.name}
        </div>
    </div>
</div>

<style>
    .character-container {
        max-height: 80px;
        display: flex;
    }

    .character-container .image-container {
        position: relative;

        width: 80px;
        height: 80px;

        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
        border-radius: 1000px;
        overflow: hidden;
    }

    .image-container img {
        transition: transform 0.5s;
    }

    .information-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        padding-left: 10px;
    }

    .information-container .actor-name {
        font-weight: bold;
        color: var(--color-secondary);
    }

    .information-container .character-name {
        color: var(--color-secondary);
        font-size: 12px;
    }

    .image-container:hover img {
        cursor: pointer;
        transform: scale(1.1);
    }

    .image-container:hover .delete-container {
        opacity: 1;
    }

    .delete-container {
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: 0;
        top: 0;

        height: 100%;
        width: 100%;
        opacity: 0;

        background-color: var(--color-transparent-red);

        transition: opacity 0.5s ease-in-out;
    }

    .delete-container button {
        width: 40px;
        height: 40px;
        border-radius: 1000px;

        color: var(--color-secondary);
        background-color: transparent;
        border: 1px solid var(--color-secondary);

        transition: color 0.5s, background-color 0.5s;
    }

    .delete-container button:hover {
        cursor: pointer;
        color: var(--color-red);
        background-color: var(--color-secondary);
    }
</style>
