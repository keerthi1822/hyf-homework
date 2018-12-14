//smart ease 
// Save a note
let notes = [];
let i;
let notesObject;
let maxnotes = 4;
let listid;
//function to add note to note id=1,2,3
function addNote(noteId, note) {
    notes.push({ id: noteId, notedata: note });
}
//function to get note from note id
function getNoteFromId(id) {
    let matchingNote;
    for (i = 0; i < maxnotes; i++) {
        // console.log(notes);
        // console.log(notes[i]);
        if (notes.length != 0 && notes[i].id == id) {
            //return notes[i]["notedata"];
            // console.log(notes[i]);
            matchingNote = notes[i];

        }
    }
    if (matchingNote === undefined) {
        return "no such id";
    }
    return matchingNote;

}
//adding notes
for (i = 1; i <= maxnotes; i++) {
    addNote(i, "my" + i + "th note");
}
//log all notes in notes array
function showAllNotes() {
    for (i = 0; i < maxnotes; i++) {

        console.log("The note with id:" + notes[i].id + ", has the following note text: my" + notes[i]["notedata"] + "th note");
    }
}
//log specific note 
console.log(getNoteFromId(2));
//calling function to log all notes
showAllNotes();





//callig addnote function and display all notes
// for(i=1;i<maxnotes;i++){
//     let notes = addNote(i ,"my"+ i+"th note" ); 
//     console.log(notes[i].id +" "+ notes[i].notedata);
//     }


//calling getNoteFromId and display note

// for(i=1;i<maxnotes;i++){

//     do{
//         idunique=Math.round(Math.random()*10);
//         for(let j=1;j<i;j++)
//         listid=notesObject[j]
//     }     
//     while( idunique !==listid )
//     notesObject=addNote("my"+ i+"th note" , idunique );

// }


