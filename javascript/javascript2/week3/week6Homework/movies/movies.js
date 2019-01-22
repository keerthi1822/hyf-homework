let moviesList=[
    {mName:"The Wizard" ,year:1989  },
    {mName:"Mac and Me" ,year:1988  },
    {mName:"Free willy" ,year:1993  },
    {mName:"Herry and the Hender sons" ,year:1987  },
    {mName:"The never ending story" ,year:1984  },
    {mName:"stand by me" ,year:1986 }
]



let num_filterMovies = moviesList.filter((list)=>{
  
    return (list.year >= 1980 && list.year <= 1989)
       
}).length;
console.log(num_filterMovies);

