let moviesList=[
    {mName:"The Wizard" ,year:1989 ,tag:4 },
    {mName:"Mac and Me" ,year:1988 ,tag:7  },
    {mName:"Free willy" ,year:1993 ,tag:6 },
    {mName:"Herry and the Hender sons" ,year:1987 ,tag:5 },
    {mName:"The never ending story" ,year:1984 ,tag:5 },
    {mName:"stand by me" ,year:1986 ,tag:3}
];

moviesList = moviesList.filter((movie)=>{
    return movie.tag > 6;
}).map((movie)=>{
    return {Tag: movie.tag,
            movie : movie.mName};
})
console.log(" Arrays is " + moviesList);


