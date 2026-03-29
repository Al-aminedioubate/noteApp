//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

//creation du textarea element.
let newNote = document.createElement("textarea");
newNote.placeholder = "Empty Note";

function noteContent() {
	notes.prepend(newNote);
}

btn.addEventListener("click", () => {
	noteContent();
});
