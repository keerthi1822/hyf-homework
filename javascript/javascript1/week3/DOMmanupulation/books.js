let books = ["harrypotter", 
                "mahabarat", 
                "ramayan", 
                "vikrambetal", 
                "alladin"];
console.log(books);


let booksInfo = [
  {
         id :books[0],
         title : books[0].toUpperCase(),
         author :"author1",
         language: "english"

    },
   {
        id :books[1],
        title : books[1].toUpperCase(),
        author :"author2",
        language: "Sanskrit"
    },
  {
        id :books[2],
        title : books[2].toUpperCase(),
        author :"author3",
        language: "Sanskrit"
   },
   {
        id :books[3],
        title : books[3].toUpperCase(),
        author :"author4",
        language: "Telugu"
   },
   {
        id :books[4],
        title : books[4].toUpperCase(),
        author :"author5",
        language: "Hindi"
    }

]

let booksImgs = [{
   img : "Harrypotter.png" ,
    id : books[0]
},
   
{
    img : "ramayanimg.jpg" ,
    id:books[2]
},
{
   img : "vikrambetal.jpg" ,
    id:books[3]
},
{
    img : "Mahabharat.jpg" ,
      id:books[1]
  },
{
   img : "alladin.jpg",
    id:books[4]

}]

//implementing function to add imgs
function addImages()
{
    //selecting parent list
    let  parentList = document.getElementsByClassName("parentli");
    console.log( parentList.length);
    //creating image
    let imgTag = document.createElement("img");

    //comparing id's of 2 objects(if returns true add image tag)
    for (let i=0;i< parentList.length;i++){
        for (let j=0;j< parentList.length;j++){
            if(parentList[i].id === booksImgs[j].id ){
                imgTag.setAttribute("src",booksImgs[j].img)
                parentList[i].appendChild(imgTag);
               
            }
            
        }
    }
}


  
 // implementing function to create list of books and their description
function generateUlLi() {

    let uList = document.createElement("ul");
   
     for (let i = 0; i < books.length; i++) {
        //console.log("in generateulli");


         //creating parent list 
        let list = document.createElement("li");
        uList.appendChild(list);
        list.setAttribute("id", booksInfo[i].id);
        list.setAttribute("class", 'parentli')
        

        //creating H1 element and appending to list
        let heading = document.createElement('h1');
        heading.innerHTML=booksInfo[i].title;
        list.appendChild(heading);

        //creating div for description of each book
        let divx = document.createElement("div");
        divx.setAttribute("class","info");

        //creating unordered list inside div
        let dList = document.createElement("ul");
        
        //description(list) about books 
        let dtitle = document.createElement("li");
        dtitle.innerHTML =  booksInfo[i].title;
        dList.appendChild(dtitle);
        let dauthor = document.createElement("li");
        dauthor.innerHTML =  booksInfo[i].author;
        dList.appendChild(dauthor);
        let dlang = document.createElement("li");
        dlang.innerHTML =  booksInfo[i].language;
        dList.appendChild(dlang);
        let dId = document.createElement("li");
        dId.innerHTML =  booksInfo[i].id;
        dList.appendChild(dId);

        //appendng description list to div
        divx.appendChild(dList);

        //appending div to parent li
        list.appendChild(divx);
     }
     //appending parent li to parent ul
     document.body.appendChild(uList);
     

}

//calling functions
 generateUlLi();

 addImages();


 

 