<script lang="ts">
    import { CreateActor, ActorsDoc } from "../graphql/generated";

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
    <div class:expanded class="create-actor-form-container">
        <button on:click={() => (expanded = false)} class="close-modal-button">
            &times;
        </button>

        <div class="inputs-container">
            <div class="form-field">
                <label for="actor-name"> Name </label>
                <input bind:value={name} id="actor-name" type="text" />
            </div>

            <div class="form-field">
                <label for="actor-name"> Image URL </label>
                <input bind:value={imageURL} id="actor-name" type="text" />
            </div>
        </div>

        <button
            on:click={createActor}
            class:disabled={!name || !imageURL}
            class="create-actor-button"
        >
            Create
        </button>
    </div>

    <button on:click={toggle} class="toggle-modal-button">&plus;</button>
</div>

<style>
    .create-actor-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .create-actor-form-container {
        display: none;
        flex-direction: column;

        padding: 20px;

        width: 350px;
        height: 400px;

        border-radius: 10px;

        background-color: var(--background-side-banner);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    }

    .create-actor-form-container.expanded {
        display: flex;
    }

    .create-actor-container .close-modal-button {
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

    .create-actor-form-container .form-field {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .create-actor-container .inputs-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        flex-grow: 1;
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

    .create-actor-button {
        align-self: flex-end;

        padding: 10px 30px;
        background-color: var(--color-secondary);
        color: var(--background-color);
        cursor: pointer;

        border-radius: 10px;
    }

    .create-actor-button.disabled {
        cursor: not-allowed;
        background-color: var(--color-gray);
    }
</style>
