//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

function noteContent() {
	let newNote = document.createElement("textarea");
	newNote.placeholder = "Empty Note";

	notes.prepend(newNote);

    //Sauvegarde dans local storage
    

}

btn.addEventListener("click", () => {
	noteContent();
});
