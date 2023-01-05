import { readFileSync } from 'fs';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { GRAPHQL_SCHEMA_PATH } from './constants.js';
import { Database } from './db.js';
import resolvers, { AppContext } from './resolvers.js';

const typeDefs = readFileSync(GRAPHQL_SCHEMA_PATH, 'utf8')

const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    context: async (): Promise<AppContext> => Promise.resolve({
        database: Database.getInstance(),
    }),
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);