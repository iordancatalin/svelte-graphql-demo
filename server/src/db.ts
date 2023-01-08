import {
  readFileSync,
  writeFileSync,
} from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { DB_PATH } from './constants.js';
import {
  Movie,
  Review,
} from './generated/graphql.js';

export interface CharacterDB {
    id: string;
    name: string;
    actorId: string;
}

export interface MovieDB {
    id: string;
    title: string;
    description?: string;
    duration: number;
    genres: string[];
    imageURL: string;
    reviews: string[];
    characters: CharacterDB[];
}

export interface ReviewDB {
    id: string;
    movieId: string;
    title: string;
    body: string;
    createdAt: string;
}

export interface ActorDB {
    id: string;
    name: string;
    imageURL: string;
}

interface DatabaseModel {
    movies: MovieDB[];
    reviews: ReviewDB[];
    actors: ActorDB[];
}

export class Database {

    private _data: DatabaseModel;
    private static _db: Database | null = null;

    constructor() {
        const data = readFileSync(DB_PATH, {
            encoding: "utf8"
        });

        this._data = JSON.parse(data);

        this._data.movies = this._data.movies ?? [];
        this._data.reviews = this._data.reviews ?? [];
        this._data.actors = this._data.actors ?? [];
    }

    static getInstance() {
        if (Database._db == null) {
            Database._db = new Database();
        }

        return Database._db;
    }

    getAllMovies() {
        return this._data.movies;
    }

    getMoviesByGenre(genre: string) {
        return this._data.movies.filter(movie => movie.genres.includes(genre));
    }

    getMovieById(id: string) {
        return this._data.movies.find(movie => movie.id === id);
    }

    createMovie(movieData: Omit<Movie, 'characters' | 'reviews' | 'id'>) {
        const createdMovie: MovieDB = {
            id: 'movie-' + uuidv4(),
            reviews: [],
            characters: [],
            ...movieData
        };

        this._data.movies = [
            ...this._data.movies,
            createdMovie,
        ]

        this._updateDatabaseFile();

        return createdMovie;
    }

    deleteMovie(id: string): string {
        const filteredMovies = this._data.movies.filter(movie => movie.id !== id);

        if (filteredMovies.length !== this._data.movies.length) {
            this._data.movies = filteredMovies;
            this._updateDatabaseFile();
        }

        return id;
    }

    getMovieReviews(movieId: string) {
        return this._data.reviews.filter(review => review.movieId !== movieId);
    }

    getMovieCharacters(movieId: string) {
        const movie = this._data.movies.find(movie => movie.id === movieId);

        return movie?.characters ?? [];
    }

    createReview(movieId: string, review: Omit<Review, 'id' | 'createdAt'>) {
        const movie = this._data.movies.find(movie => movie.id === movieId);

        if (movie) {
            const createdReview: ReviewDB = {
                id: 'review-' + uuidv4(),
                movieId: movie.id,
                createdAt: new Date().toString(),
                ...review
            }

            movie.reviews = movie.reviews ?? [];

            this._data.reviews.push(createdReview);
            movie.reviews.push(createdReview.id);

            this._updateDatabaseFile();

            return createdReview;
        }

        return null;
    }

    deleteReview(movieId: string, reviewId: string) {
        const movie = this._data.movies.find(movie => movie.id === movieId);

        if (movie && movie.reviews) {
            movie.reviews = movie.reviews.filter(id => id !== reviewId);
            this._data.reviews = this._data.reviews.filter(review => review.id !== reviewId);

            this._updateDatabaseFile();

            return reviewId;
        }

        return null;
    }

    getAllActors() {
        return this._data.actors;
    }

    getActorById(actorId: string) {
        return this._data.actors.find(actor => actor.id === actorId);
    }

    createActor(name: string, imageURL: string) {
        const actor: ActorDB = {
            id: 'actor-' + uuidv4(),
            imageURL,
            name
        };

        this._data.actors.push(actor);
        this._updateDatabaseFile();

        return actor;
    }

    deleteActor(id: string) {
        this._data.actors = this._data.actors.filter(actor => actor.id !== id);
        this._updateDatabaseFile();

        return id;
    }

    createCharacter(movieId: string, name: string, actorId: string) {
        const movie = this._data.movies.find(movie => movie.id === movieId);
        const actor = this._data.actors.find(actor => actor.id === actorId);

        if (movie && actor) {
            const character: CharacterDB = {
                id: 'character-' + uuidv4(),
                actorId,
                name
            };

            movie.characters = movie.characters ?? [];

            movie.characters.push(character);
            this._updateDatabaseFile();

            return character;
        }

        return null;
    }

    deleteCharacter(movieId: string, id: string) {
        const movie = this._data.movies.find(movie => movie.id === movieId);

        if (movie) {
            movie.characters = movie.characters.filter(character => character.id !== id);
            this._updateDatabaseFile();

            return id;
        }

        return null;
    }

    private _updateDatabaseFile() {
        writeFileSync(DB_PATH, JSON.stringify(this._data));
    }
}