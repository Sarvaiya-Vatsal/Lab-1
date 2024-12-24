const movies = [
    { 
        title: "Operation Fortune: Ruse de Guerre", 
        genre: "Action/Comedy", 
        rating: 6.3, 
        releaseYear: 2023 
    },
    { 
        title: "Transformers: Rise of the Beasts", 
        genre: "Action/Sci-fi", 
        rating: 6.0, 
        releaseYear: 2023 
    },
    { 
        title: "Pushpa 2: The Rule", 
        genre: "Action/Thriller", 
        rating: 6.6, 
        releaseYear: 2024 
    }
];

const addMovie = function(collection, movie) {
    collection.push(movie);
};

const newMovie = {
    title: "Tenet", 
    genre: "Sci-Fi", 
    rating: 7.5, 
    releaseYear: 2020 
};

addMovie(movies, newMovie);

const listMoviesByGenre = function(collection, genre) {
    let filteredMovies = collection.filter(function(movie) {
        return movie.genre === genre;
    });
    return filteredMovies;
};

const findHighestRatedMovie = function(collection) {
    let highestRated = collection.reduce(function(highest, movie) {
        if (movie.rating > highest.rating) {
            return movie;
        }
        return highest;
    });
    return highestRated;
};

const getMovieTitles = function(collection) {
    let movieTitles = collection.map(function(movie) {
        return movie.title;
    });
    return movieTitles;
};

const moviesAfterYear = function(collection, year) {
    let filteredMovies = collection.filter(function(movie) {
        return movie.releaseYear > year;
    });
    return filteredMovies;
};

const genreToList = "Sci-Fi";
const moviesReleasedAfter = 2020;

const filteredByGenre = listMoviesByGenre(movies, genreToList);
console.log(filteredByGenre);

const highestRated = findHighestRatedMovie(movies);
console.log(highestRated);

const titles = getMovieTitles(movies);
console.log(titles);

const afterYearMovies = moviesAfterYear(movies, moviesReleasedAfter);
console.log(afterYearMovies);

movies.forEach(function(movie) {
    let movieDetails = movie.title + " (" + movie.releaseYear + ") is a " + movie.genre + " movie with a rating of " + movie.rating + ".";
    console.log(movieDetails);
});
