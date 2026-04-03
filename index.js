//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

function noteContent() {
	//creation du textarea element.
	let newNote = document.createElement("textarea");
	newNote.placeholder = "Empty Note";

	//Ajoutons la note cree sur le container de la note.
	notes.prepend(newNote);

	//Recuperons la note sauvegardee
	let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

	//ajoutons les notes dans un tableau
	savedNotes.push("");
	localStorage.setItem("notes", JSON.stringify(savedNotes));

	//Sauvegarder quand l'utilisateur tape
	newNote.addEventListener("input", () => {
		let allNotes = document.querySelectorAll("textarea");
		let notesArray = [];

		allNotes.forEach(function (note) {
			notesArray.push(note.value);
		});

		localStorage.setItem("notes", JSON.stringify(notesArray));
	});

	savedNotes.forEach(function (note) {
		let textarea = document.createElement("textarea");
		textarea.value = note;
		textarea.placeholder = "Empty Note";

		notes.prepend(textarea);
	});

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
