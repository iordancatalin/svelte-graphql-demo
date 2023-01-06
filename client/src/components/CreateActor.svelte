<script lang="ts">
    import { CreateActor } from "../graphql/generated";

    let expanded = false;

    const toggle = () => {
        expanded = !expanded;
    };

    const createActor = async () => {
        await CreateActor({
            variables: {
                imageURL: "",
                name: "",
            },
        });

        expanded = false;
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
            <input id="actor-name" type="text" />
        </div>

        <div class="form-field">
            <label for="actor-name"> Image URL </label>
            <input id="actor-name" type="text" />
        </div>

        <button on:click={createActor}>Create</button>
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

        background-color: #121111;
        border: 0;

        color: var(--color-secondary);
    }

    .control-button:active {
        background-color: #121111;
    }

    .control-bar {
        width: 15px;
        height: 100%;

        background-color: #121111;
    }

    .form-container {
        overflow: hidden;
        width: 0;

        display: flex;
        flex-direction: column;
        gap: 10px;

        background-color: #121111;

        transition: width 0.5s;
    }

    .form-container.expanded {
        padding-top: 30px;
        padding-right: 15px;

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
        background-color: #0d0c0c;
        border: 0;
        padding: 10px;
        border-radius: 7px;
    }

    .form-container button {
        padding: 10px;
        background-color: var(--color-secondary);
        color: var(--background-color);
        cursor: pointer;
    }
</style>
