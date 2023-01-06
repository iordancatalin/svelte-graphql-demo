<script lang="ts">
    import { Actors } from "../graphql/generated";
    import Actor from "./Actor.svelte";
    import CreateActor from "./CreateActor.svelte";

    $: actors = Actors({});
</script>

<section class="actors-container">
    <div class="actors-panel">
        {#each $actors?.data?.actors || [] as actor}
            <Actor {actor} />
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
</style>
