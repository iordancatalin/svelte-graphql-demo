import { Movie } from './generated/graphql.js';

export class Database {

    private static _db: Database | null = null;

    private _movies: Movie[] = [
        {
            title: 'Star Wars',
            genres: ['Action', 'Drama'],
            releaseYear: 1975,
            description: 'Star Wars',
            imageURL: '',
        },
        {
            title: 'Iron Man',
            genres: ['Action', 'Drama'],
            releaseYear: 1975,
            description: 'Iron Man',
            imageURL: '',
        },
        {
            title: 'The Batman',
            genres: ['Action', 'Drama'],
            releaseYear: 1975,
            description: 'The Batman',
            imageURL: '',
        }
    ]

    static getInstance() {
        if (Database._db == null) {
            Database._db = new Database();
        }

        return Database._db;
    }

    getAllMovies() {
        return this._movies;
    }
}