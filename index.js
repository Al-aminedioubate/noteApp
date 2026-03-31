//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

function noteContent() {
	//creation du textarea element.
	let newNote = document.createElement("textarea");
	newNote.placeholder = "Empty Note";

	//Ajoutons la note cree sur le container de la note.
	notes.prepend(newNote);

	//Ajoutons une confirmation de suppression
	var userConfirmed = confirm("Do you want to delete this note ?");
	if (userConfirmed) {
		newNote.addEventListener("dblclick", () => {
			notes.removeChild(newNote);
		});
	}
}

btn.addEventListener("click", () => {
	noteContent();
});
