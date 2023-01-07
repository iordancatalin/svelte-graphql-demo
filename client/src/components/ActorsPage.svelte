<script lang="ts">
    import { Actors, ActorsDoc, DeleteActor } from "../graphql/generated";
    import Actor from "./Actor.svelte";
    import CreateActor from "./CreateActor.svelte";

    $: actors = Actors({});

    const handleDeleteActor = async (
        deleteActorEvent: CustomEvent<{ id: string }>
    ) => {
        await DeleteActor({
            variables: {
                id: deleteActorEvent.detail.id,
            },
            refetchQueries: (mutationResult) =>
                !mutationResult.errors ? [ActorsDoc] : [],
        });
    };
</script>

<section class="actors-container">
    <div class="actors-panel">
        {#each $actors?.data?.actors || [] as actor}
            <Actor on:deleteActor={handleDeleteActor} {actor} />
        {/each}
    </div>

    <div class="create-actor-panel">
        <CreateActor />
    </div>
</section>

<style>
    .actors-container {
        display: flex;
        width: 100%;
    }

    .actors-panel {
        padding: 10px;
        height: 0;

        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        flex: 1;

        padding: 20px;
    }

    .create-actor-panel {
        position: fixed;
        bottom: 20px;
        right: 0;

        width: 400px;
    }
</style>
