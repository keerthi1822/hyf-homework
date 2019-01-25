//List of movie details
const moviesList=[
    {title:"The Wizard" ,year:1989 ,tag:4 },
    {title:"Mac and Me" ,year:1988 ,tag:7  },
    {title:"Free willy" ,year:1993 ,tag:6 },
    {title:"Herry and the Hender sons" ,year:1987 ,tag:5 },
    {title:"The never ending story" ,year:1984 ,tag:5 },
    {title:"stand by me" ,year:1986 ,tag:3}
];

//mapping tag key from an array and finding average using 'reduce'
let tags = moviesList.map((movie)=>{
    return movie.tag
}).reduce((sum, tagval,index,array)=>{
    sum+=tagval;
    if(index == array.length-1)
        return sum/array.length
    else
        return sum;

},0)

console.log("average is: " +tags);
