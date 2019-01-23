
//List of movie details
const moviesList=[
    {title:"The Wizard" ,year:1989 ,tag:4 },
    {title:"Mac and Me" ,year:1988 ,tag:7  },
    {title:"Free willy" ,year:1993 ,tag:6 },
    {title:"Herry and the Hender sons" ,year:1987 ,tag:5 },
    {title:"The never ending story" ,year:1984 ,tag:5 },
    {title:"stand by me" ,year:1986 ,tag:3}
];

//search strings
const searchStrings = ["the","me","and"];

//map movie title in an Array
let movieTitleArray = moviesList.map((movie)=>{
   return movie.title;
});

//print Array of titles(movieTitleArray)
console.log(movieTitleArray);

//Split each movie title into strings
let splitStrings =movieTitleArray.map((movie)=>{
return movie.split(" ");
});

//log splited Arrays
console.log(splitStrings);

//Implementation of function to compare 2 arrays
let findKeyWords= function (splitStrings,searchStrings)
{
    let foundKeywords = [];
    splitStrings.forEach((str)=>searchStrings.forEach((str1)     =>{
        if(str == str1)
        foundKeywords.push(str);
        console.log(foundkeywords);
        })
    )
    return foundKeywords;
}


console.log(findKeyWords);
