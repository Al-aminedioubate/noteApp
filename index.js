//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

function noteContent() {
	//creation du textarea element.
	let newNote = document.createElement("textarea");
	newNote.placeholder = "Empty Note";

	//Ajoutons la note cree sur le container de la note.
	notes.prepend(newNote);

	//sauvergardons la note localement.
	let setNote = localStorage.setItem("note", newNote.value);

	//Recuperons la note sauvegarder
	let savedNotes = localStorage.getItem(setNote);

	newNote.value = savedNotes;

	//Ajoutons une confirmation de suppression
	newNote.addEventListener("dblclick", () => {
		var userConfirmed = confirm("Do you want to delete this note ?");
		if (userConfirmed) {
			notes.removeChild(newNote);
		}
	});
}

btn.addEventListener("click", () => {
	noteContent();
});
