# Svelte and GraphQL project

### Description
---
The purpose of this project is to play around with GraphQL and Svelte. It's an application where the user can add movies, actors, can assing an actor to a movie and view details of a movie.

### Starting the application
---

1. Go into the `client` directory and run

```
npm ci
```

2. Go into the `server` directory and run

```
npm ci
```

3. Go to the `root` directory and run 

```
npm run start
```

The application client application should start at `http://localhost:8080` and the server should start at `http://localhost:4000`

### Client app known limitations
---
* It is not possible to view the reviews of a movie or to add a revie from client yet (the server supports this kind of operation).
* It is not possible to assing an actor to a movie from client yet (the server supports this kind of operation)

NOTE: Since the scope of this project was to play around with GraphQL and Svelte I didn't focus on accessibility and others aspects that I and you should take into account when developing a production application. I just wanted to see how easy (or hard) it is to implement an application in Svelte with GraphQL without having any prior experience with any of the tools. The experience was really nice and an I like how easy is to use GraphQL and the flexibility that it offers. Svelte is super easy and enjoyable to use, it's very compact and it just feels good when using it, but when creating a production app I will go with SvelteKit.
