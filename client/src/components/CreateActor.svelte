<script lang="ts">
    import { CreateActor, ActorsDoc } from "../graphql/generated";
    import { createEventDispatcher } from "svelte";

    let expanded = false;
    let name: string;
    let imageURL: string;

    const toggle = () => {
        expanded = !expanded;
    };

    const createActor = async () => {
        await CreateActor({
            variables: {
                name,
                imageURL,
            },
            refetchQueries: (mutationResult) =>
                !mutationResult.errors ? [ActorsDoc] : [],
        }).then(() => {
            name = "";
            imageURL = "";

            expanded = false;
        });
    };
</script>

<div class="create-actor-container">
    <div class="control-container">
        <button on:click={toggle} type="button" class="control-button">
            {#if expanded}
                &rarr;
            {:else}
                &larr;
            {/if}
        </button>
        <div class="control-bar" />
    </div>

    <div class:expanded class="form-container">
        <div class="form-field">
            <label for="actor-name"> Name </label>
            <input bind:value={name} id="actor-name" type="text" />
        </div>

        <div class="form-field">
            <label for="actor-name"> Image URL </label>
            <input bind:value={imageURL} id="actor-name" type="text" />
        </div>

        <button on:click={createActor} class:disabled={!name || !imageURL}>
            Create
        </button>
    </div>
</div>

<style>
    .create-actor-container {
        display: flex;
        height: 100%;
    }

    .control-container {
        display: flex;
        height: 100%;

        align-items: center;
    }

    .control-button {
        cursor: pointer;

        height: 60px;
        width: 40px;

        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;

        background-color: var(--background-side-banner);
        border: 0;

        color: var(--color-secondary);
    }

    .control-button:active {
        background-color: var(--background-side-banner);
    }

    .control-bar {
        width: 15px;
        height: 100%;

        background-color: var(--background-side-banner);
    }

    .form-container {
        overflow: hidden;
        width: 0;

        display: flex;
        flex-direction: column;
        gap: 10px;

        background-color: var(--background-side-banner);

        transition: width 0.5s;
    }

    .form-container.expanded {
        padding-top: 30px;
        padding-right: 15px;
        padding-left: 15px;

        width: 400px;
    }

    .form-container .form-field {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-field label {
        color: var(--color-secondary);
    }

    .form-field input {
        color: var(--color-secondary);
        background-color: var(--background-side-banner-input);
        border: 1px solid var(--color-secondary);
        padding: 10px;
        border-radius: 7px;
    }

    .form-container button {
        padding: 10px;
        background-color: var(--color-secondary);
        color: var(--background-color);
        cursor: pointer;
    }

    .form-container button.disabled {
        cursor: not-allowed;
        background-color: var(--color-gray);
    }
</style>
