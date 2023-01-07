import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Actor: ResolverTypeWrapper<Actor>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Character: ResolverTypeWrapper<Character>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Actor: Actor;
  Boolean: Scalars['Boolean'];
  Character: Character;
  Int: Scalars['Int'];
  Movie: Movie;
  Mutation: {};
  Query: {};
  Review: Review;
  String: Scalars['String'];
};

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedBy?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  characters?: Resolver<Array<ResolversTypes['Character']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActor?: Resolver<ResolversTypes['Actor'], ParentType, ContextType, RequireFields<MutationCreateActorArgs, 'imageURL' | 'name'>>;
  createCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<MutationCreateCharacterArgs, 'actorId' | 'characterName' | 'movieId'>>;
  createMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateMovieArgs, 'duration' | 'genres' | 'imageURL' | 'title'>>;
  createReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'body' | 'movieId' | 'title'>>;
  deleteActor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteActorArgs, 'id'>>;
  deleteCharacter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterArgs, 'id' | 'movieId'>>;
  deleteMovie?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteMovieArgs, 'id'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'movieId' | 'reviewId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  actors?: Resolver<Array<ResolversTypes['Actor']>, ParentType, ContextType>;
  allMovies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  movieById?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieByIdArgs, 'id'>>;
  moviesByGenre?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMoviesByGenreArgs, 'genre'>>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Actor?: ActorResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
};

