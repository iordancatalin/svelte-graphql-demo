import client from "../apollo-client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Actor = {
  __typename?: 'Actor';
  id: Scalars['String'];
  imageURL: Scalars['String'];
  name: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  id: Scalars['String'];
  name: Scalars['String'];
  playedBy?: Maybe<Actor>;
};

export type Movie = {
  __typename?: 'Movie';
  characters: Array<Character>;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Int'];
  genres: Array<Scalars['String']>;
  id: Scalars['String'];
  imageURL: Scalars['String'];
  reviews: Array<Review>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActor: Actor;
  createCharacter?: Maybe<Character>;
  createMovie: Movie;
  createReview?: Maybe<Review>;
  deleteActor?: Maybe<Scalars['String']>;
  deleteCharacter?: Maybe<Scalars['String']>;
  deleteMovie: Scalars['String'];
  deleteReview?: Maybe<Scalars['String']>;
};


export type MutationCreateActorArgs = {
  imageURL: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateCharacterArgs = {
  actorId: Scalars['String'];
  characterName: Scalars['String'];
  movieId: Scalars['String'];
};


export type MutationCreateMovieArgs = {
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['Int'];
  genres: Array<Scalars['String']>;
  imageURL: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateReviewArgs = {
  body: Scalars['String'];
  movieId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteActorArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCharacterArgs = {
  id: Scalars['String'];
  movieId: Scalars['String'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['String'];
};


export type MutationDeleteReviewArgs = {
  movieId: Scalars['String'];
  reviewId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  actors: Array<Actor>;
  allMovies: Array<Movie>;
  movieById?: Maybe<Movie>;
  moviesByGenre: Array<Movie>;
};


export type QueryMovieByIdArgs = {
  id: Scalars['String'];
};


export type QueryMoviesByGenreArgs = {
  genre: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type CreateActorMutationVariables = Exact<{
  name: Scalars['String'];
  imageURL: Scalars['String'];
}>;


export type CreateActorMutation = { __typename?: 'Mutation', createActor: { __typename?: 'Actor', id: string } };

export type DeleteActorMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteActorMutation = { __typename?: 'Mutation', deleteActor?: string | null };

export type DeleteCharacterMutationVariables = Exact<{
  movieId: Scalars['String'];
  id: Scalars['String'];
}>;


export type DeleteCharacterMutation = { __typename?: 'Mutation', deleteCharacter?: string | null };

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  genres: Array<Scalars['String']> | Scalars['String'];
  imageURL: Scalars['String'];
  duration: Scalars['Int'];
}>;


export type CreateMovieMutation = { __typename?: 'Mutation', createMovie: { __typename?: 'Movie', id: string } };

export type DeleteMovieMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMovieMutation = { __typename?: 'Mutation', deleteMovie: string };

export type ActorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ActorsQuery = { __typename?: 'Query', actors: Array<{ __typename?: 'Actor', id: string, name: string, imageURL: string }> };

export type MoviesSummaryQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesSummaryQuery = { __typename?: 'Query', allMovies: Array<{ __typename?: 'Movie', id: string, imageURL: string, title: string }> };

export type MovieByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MovieByIdQuery = { __typename?: 'Query', movieById?: { __typename?: 'Movie', id: string, title: string, description?: string | null, genres: Array<string>, imageURL: string, duration: number, reviews: Array<{ __typename?: 'Review', id: string, title: string, body: string, createdAt: string }>, characters: Array<{ __typename?: 'Character', id: string, name: string, playedBy?: { __typename?: 'Actor', id: string, name: string, imageURL: string } | null }> } | null };


export const CreateActorDoc = gql`
    mutation CreateActor($name: String!, $imageURL: String!) {
  createActor(name: $name, imageURL: $imageURL) {
    id
  }
}
    `;
export const DeleteActorDoc = gql`
    mutation DeleteActor($id: String!) {
  deleteActor(id: $id)
}
    `;
export const DeleteCharacterDoc = gql`
    mutation DeleteCharacter($movieId: String!, $id: String!) {
  deleteCharacter(movieId: $movieId, id: $id)
}
    `;
export const CreateMovieDoc = gql`
    mutation CreateMovie($title: String!, $description: String!, $genres: [String!]!, $imageURL: String!, $duration: Int!) {
  createMovie(
    title: $title
    description: $description
    genres: $genres
    imageURL: $imageURL
    duration: $duration
  ) {
    id
  }
}
    `;
export const DeleteMovieDoc = gql`
    mutation DeleteMovie($id: String!) {
  deleteMovie(id: $id)
}
    `;
export const ActorsDoc = gql`
    query Actors {
  actors {
    id
    name
    imageURL
  }
}
    `;
export const MoviesSummaryDoc = gql`
    query MoviesSummary {
  allMovies {
    id
    imageURL
    title
  }
}
    `;
export const MovieByIdDoc = gql`
    query MovieById($id: String!) {
  movieById(id: $id) {
    id
    title
    description
    genres
    imageURL
    duration
    reviews {
      id
      title
      body
      createdAt
    }
    characters {
      id
      name
      playedBy {
        id
        name
        imageURL
      }
    }
  }
}
    `;
export const CreateActor = (
            options: Omit<
              MutationOptions<any, CreateActorMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreateActorMutation, CreateActorMutationVariables>({
              mutation: CreateActorDoc,
              ...options,
            });
            return m;
          }
export const DeleteActor = (
            options: Omit<
              MutationOptions<any, DeleteActorMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DeleteActorMutation, DeleteActorMutationVariables>({
              mutation: DeleteActorDoc,
              ...options,
            });
            return m;
          }
export const DeleteCharacter = (
            options: Omit<
              MutationOptions<any, DeleteCharacterMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DeleteCharacterMutation, DeleteCharacterMutationVariables>({
              mutation: DeleteCharacterDoc,
              ...options,
            });
            return m;
          }
export const CreateMovie = (
            options: Omit<
              MutationOptions<any, CreateMovieMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreateMovieMutation, CreateMovieMutationVariables>({
              mutation: CreateMovieDoc,
              ...options,
            });
            return m;
          }
export const DeleteMovie = (
            options: Omit<
              MutationOptions<any, DeleteMovieMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DeleteMovieMutation, DeleteMovieMutationVariables>({
              mutation: DeleteMovieDoc,
              ...options,
            });
            return m;
          }
export const Actors = (
            options: Omit<
              WatchQueryOptions<ActorsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<ActorsQuery> & {
              query: ObservableQuery<
                ActorsQuery,
                ActorsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: ActorsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<ActorsQuery> & {
                query: ObservableQuery<
                  ActorsQuery,
                  ActorsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const MoviesSummary = (
            options: Omit<
              WatchQueryOptions<MoviesSummaryQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MoviesSummaryQuery> & {
              query: ObservableQuery<
                MoviesSummaryQuery,
                MoviesSummaryQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MoviesSummaryDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MoviesSummaryQuery> & {
                query: ObservableQuery<
                  MoviesSummaryQuery,
                  MoviesSummaryQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const MovieById = (
            options: Omit<
              WatchQueryOptions<MovieByIdQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MovieByIdQuery> & {
              query: ObservableQuery<
                MovieByIdQuery,
                MovieByIdQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MovieByIdDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MovieByIdQuery> & {
                query: ObservableQuery<
                  MovieByIdQuery,
                  MovieByIdQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        