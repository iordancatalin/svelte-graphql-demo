import {
  ActorDB,
  CharacterDB,
  MovieDB,
  ReviewDB,
} from './db.js';
import {
  Actor,
  Character,
  Movie,
  Review,
} from './generated/graphql.js';

export const transformMovie = (movieDB: MovieDB): Movie => ({
  id: movieDB.id,
  title: movieDB.title,
  description: movieDB.description,
  directors: movieDB.directors,
  duration: movieDB.duration,
  genres: movieDB.genres,
  imageURL: movieDB.imageURL,
  reviews: [],
  characters: [],
});

export const transformReview = (reviewDB: ReviewDB): Review => ({
  id: reviewDB.id,
  body: reviewDB.body,
  title: reviewDB.title,
  createdAt: reviewDB.createdAt
});

export const transformActor = (actorDB: ActorDB): Actor => ({
  id: actorDB.id,
  name: actorDB.name,
  imageURL: actorDB.imageURL,
});

export const transformCharacter = (characterDB: CharacterDB): Character => ({
  id: characterDB.id,
  name: characterDB.name,
  // this property will be filled by CharacterResolver
  // but it needs the actorId to find the actor
  playedBy: {
    id: characterDB.actorId,
    name: '',
    imageURL: '',
  }
});