import { QueryResolvers } from '../generated/graphql.js';
import { AppContext } from '../resolvers.js';

const queryResolver: QueryResolvers<AppContext> = {
    movies: (_, __, { database }) => database.getAllMovies(),
}

export default queryResolver;