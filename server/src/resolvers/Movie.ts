import { MovieResolvers } from '../generated/graphql.js';
import { AppContext } from '../resolvers.js';
import {
  transformCharacter,
  transformReview,
} from '../transformer.js';

const movieResolver: MovieResolvers<AppContext> = {
    reviews: (movie, _, { database }) => database.getMovieReviews(movie.id)
        .map(reviewDB => transformReview(reviewDB)),

    characters: (movie, _, { database }) => database.getMovieCharacters(movie.id)
        .map(characterDB => transformCharacter(characterDB)),
}

export default movieResolver;