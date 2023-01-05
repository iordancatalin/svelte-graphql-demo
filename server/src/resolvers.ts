import { Database } from './db.js';
import { Resolvers } from './generated/graphql.js';
import Character from './resolvers/Character.js';
import Movie from './resolvers/Movie.js';
import Mutation from './resolvers/Mutation.js';
import Query from './resolvers/Query.js';

export interface AppContext {
    database?: Database;
}

const resolvers: Resolvers<AppContext> = {
    Query,
    Mutation,
    Movie,
    Character,
}

export default resolvers;