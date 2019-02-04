

// Fetch movies from this api: https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
.then(response=>response.json())
.then((movies)=>{
    console.log("all movies:");
    console.log(movies);
getlongmovies(movies);
getbadmovies(movies);


});

//Create an array called long movies that contain an array of long movies. A long movie has a running time of larger than 7000
//Create an array called longMovieTitles. That contain only the titles of the long movies.
function getlongmovies(movies){
    const longMovies = movies.filter((movie)=>{
        return movie.running_times > 7000;
    }).map((movie)=>{
        return movie.title;
    });
    console.log("long movies: ");
    console.log(longMovies);
}

//Log out an array of bad movies
function getbadmovies(movies){
    const badMovies = movies.filter((movie)=>{
        return movie.rating < 4
    });
    console.log("bad movies are:")
    console.log(badMovies);
    getbadmoviessince2000(badMovies);
}

//Log out an array of bad movies since year 2000
function getbadmoviessince2000(badmovies){
    const badMoviesSince2000 = badmovies.filter((badmovie)=>{
        return badmovie.year >= 2000;
    });
    console.log("bad movies since 2000 are:")
    console.log(badMoviesSince2000);
    gettitlesofbadmoviessince2000(badMoviesSince2000);
}

//only log the titles of the bad movies since year 2000
function  gettitlesofbadmoviessince2000(badMoviesSince2000){
    const titlesOfBadMoviesSince2000 = badMoviesSince2000.map((movie)=>{
        return movie.title;
    })
    console.log(" bad movies titles since 2000 are: ");
        console.log(titlesOfBadMoviesSince2000);
}



