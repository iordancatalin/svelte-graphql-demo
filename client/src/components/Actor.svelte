<script lang="ts">
    import type { Actor } from "../graphql/generated";

    export let actor: Actor;
</script>

<div class="actor-container">
    <div class="actor-image-container">
        <img src={actor.imageURL} alt={actor.name} class="actor-image" />
    </div>

    <div class="actor-name-container">{actor.name}</div>
</div>

<style>
    .actor-container {
        display: flex;
        flex-direction: column;
    }

    .actor-image-container {
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

    .actor-image:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .actor-name-container {
        padding: 5px;
        text-align: center;

        color: var(--color-secondary);
    }
</style>
