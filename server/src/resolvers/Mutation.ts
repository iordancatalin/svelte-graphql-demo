import { MutationResolvers } from '../generated/graphql.js';
import { AppContext } from '../resolvers.js';
import {
  transformActor,
  transformCharacter,
  transformMovie,
  transformReview,
} from '../transformer.js';

const movieMutationResolver: MutationResolvers<AppContext> = {
    createMovie(_, {
        title,
        description,
        duration,
        genres,
        imageURL
    }, { database }) {

        const createdMovie = database.createMovie({
            title,
            description,
            duration,
            genres,
            imageURL
        });

        return transformMovie(createdMovie);
    },

    deleteMovie(_, { id }, { database }) {
        return database.deleteMovie(id);
    },

    createReview(_, { movieId, body, title }, { database }) {
        const createdReview = database.createReview(movieId, { body, title });

        return transformReview(createdReview);
    },

    deleteReview(_, { movieId, reviewId }, { database }) {
        return database.deleteReview(movieId, reviewId);
    },

    createActor(_, { name, imageURL }, { database }) {
        const createdActor = database.createActor(name, imageURL);

        return transformActor(createdActor);
    },

    deleteActor(_, { id }, { database }) {
        return database.deleteActor(id);
    },

    createCharacter(_, { movieId, characterName, actorId }, { database }) {
        const createdCharacter = database.createCharacter(movieId, characterName, actorId);

        return createdCharacter
            ? transformCharacter(createdCharacter)
            : null;
    },

    deleteCharacter(_, { movieId, id }, { database }) {
        return database.deleteCharacter(movieId, id);
    }
}

export default movieMutationResolver;