import { CharacterResolvers } from '../generated/graphql.js';
import { AppContext } from '../resolvers.js';
import { transformActor } from '../transformer.js';

const characterResolver: CharacterResolvers<AppContext> = {
    playedBy: (character, _, { database }) => {
        const actor = database.getActorById(character.playedBy.id)

        return transformActor(actor);
    }
}

export default characterResolver;