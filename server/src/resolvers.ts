import { Database } from './db.js';
import { Resolvers } from './generated/graphql.js';
import Query from './resolvers/Query.js';

export interface AppContext {
    database?: Database;
}

const resolvers: Resolvers<AppContext> = {
    Query,
}

export default resolvers;