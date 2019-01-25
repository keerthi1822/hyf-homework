
//List of movie details
const moviesList = [
    { title: "The Wizard", year: 1989, tag: 4 },
    { title: "Mac and Me", year: 1988, tag: 7 },
    { title: "Free willy", year: 1993, tag: 6 },
    { title: "Herry and the Hender sons", year: 1987, tag: 5 },
    { title: "The never ending story", year: 1984, tag: 5 },
    { title: "stand by me", year: 1986, tag: 3 }
];


const moviewContainingKeyword = moviesList.filter((movie) => {

    return doesMovieTitleContainKeyword(movie.title);
})

console.log(moviewContainingKeyword.length);

function doesMovieTitleContainKeyword(title) {
    console.log(title);
    
    //search strings
    const searchStrings = ["the", "me", "and"];
    let movieContainsKeyword = false;
    //console.log(title);
    
    searchStrings.forEach((searchString) => {
        if (title.toLowerCase().includes(searchString)) {
            //console.log('contians keyword!!!'); 
            movieContainsKeyword = true;
        }

    })

    return movieContainsKeyword;

}
//  ["the","me","and"]
//console.log(doesMovieTitleContainKeyword('hey hey hey')); // return false
//console.log(doesMovieTitleContainKeyword('hey hey me')); // return true
