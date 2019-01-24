//List of movie details
const moviesList=[
    {title:"The Wizard" ,year:1989 ,tag:4 },
    {title:"Mac and Me" ,year:1988 ,tag:7  },
    {title:"Free willy" ,year:1993 ,tag:6 },
    {title:"Herry and the Hender sons" ,year:1987 ,tag:5 },
    {title:"The never ending story" ,year:1984 ,tag:5 },
    {title:"stand by me" ,year:1986 ,tag:3}
];
let count = 0;

let tags = moviesList.map((movie)=>{
    return movie.tag
})

const moviesStatus = tags.reduce((moviesRange, tagval)=>{
    if ( tagval >= 7 )
        return moviesRange[good]++ ;
    elseif (tagval < 7 && tagval > 4)
        return moviesRange[avg]++ ;
    elseif (tagval <= 4)
    return moviesRange[bad]++ ;
    
},{good:0,avg:0,bad:0})


console.log(moviesStatus);
//no output