# Covies API.

Simple movie & tv contents API server powered by Graphql.

## Movies.

- [x] Credits : Get the cast and crew for a movie.
- [x] Details : Get the primary information about a movie.
- [x] Image : Get the images that belong to a movies.
- [x] Keywords: Get the keywords that have been added to a movie.
- [x] Latests : Get the most newly created movie. This is a live response and will continuously change.
- [x] Now playing : Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
- [x] Populars : Get a list of the current popular movies on TMDB. This list updates daily.
- [x] Reviews : Get the user reviews for a movie.
- [x] Similars : Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
- [x] Top rated : Get the top rated movies on TMDB.
- [x] Upcomings : Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
- [x] Videos : Get the videos that have been added to a movie.

## TV.

- [x] Credits : Get the credits (cast and crew) that have been added to a TV show.
- [x] Details : Get the primary TV show details by id.
- [x] Images : Get the images that belong to a TV show.
- [x] Keywords : Get the keywords that have been added to a TV show.
- [ ] Latests : Get the most newly created TV show. This is a live response and will continuously change.
- [x] Populars : Get a list of the current popular TV shows on TMDB. This list updates daily.
- [ ] Reviews : Get the reviews for a TV show.
- [ ] Similars : Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
- [ ] Top rated : Get a list of the top rated TV shows on TMDB.
- [ ] Videos : Get the videos that have been added to a TV show.

## Others.

- [x] Trendings : Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.

## Sources.

- TMDB API (https://www.themoviedb.org).
