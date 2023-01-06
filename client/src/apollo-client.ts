import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const cache = new InMemoryCache({
    addTypename: true,
});

const httpLink = new HttpLink({
    uri: 'http://localhost:4000',
});

export default new ApolloClient({
    cache,
    link: httpLink,
    connectToDevTools: true,
});
