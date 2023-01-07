<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Actor } from "../graphql/generated";

    export let actor: Actor;

    const dispatch = createEventDispatcher();

    const deleteActor = () => {
        dispatch("deleteActor", {
            id: actor.id,
        });
    };
</script>

<div class="actor-container">
    <div class="actor-image-container">
        <img src={actor.imageURL} alt={actor.name} class="actor-image" />

        <div class="delete-container">
            <button on:click={deleteActor}>&times;</button>
        </div>
    </div>

    <div class="actor-name-container">{actor.name}</div>
</div>

<style>
    .actor-container {
        display: flex;
        flex-direction: column;
    }

    .actor-image-container {
        position: relative;

        border-radius: 1000px;

        width: 150px;
        height: 150px;

        overflow: hidden;
    }

    .actor-image {
        width: 100%;
        height: 100%;

        transition: transform 0.5s;
    }

    .actor-image-container:hover .actor-image {
        cursor: pointer;
        transform: scale(1.1);
    }

    .actor-name-container {
        padding: 5px;
        text-align: center;

        color: var(--color-secondary);
    }
    .actor-image-container:hover .delete-container {
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
