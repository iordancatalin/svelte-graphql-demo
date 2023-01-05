import { QueryResolvers } from '../generated/graphql.js';
import { AppContext } from '../resolvers.js';
import {
  transformActor,
  transformMovie,
} from '../transformer.js';

const queryResolver: QueryResolvers<AppContext> = {
    allMovies: (_, __, { database }) => database.getAllMovies()
        .map(movieDB => transformMovie(movieDB)),

    moviesByGenre: (_, { genre }, { database }) => database.getMoviesByGenre(genre)
        .map(movieDB => transformMovie(movieDB)),

    movieById: (_, { id }, { database }) => {
        const databaseMovie = database.getMovieById(id);

        return databaseMovie
            ? transformMovie(databaseMovie)
            : null;
    },

    actors: (_, __, { database }) => database.getAllActors()
        .map(actorDB => transformActor(actorDB))
}

export default queryResolver;