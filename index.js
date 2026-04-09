//Declaration et initialisatio de nos variables
let notesApp = document.getElementById("noteContainer");
let btnEl = document.getElementById("noteBtn");

//la fonction permettant d'ajouter la note sur la page.
getNotes().forEach((note) => {
	const noteEl = createNote(note.id, note.content);
	notesApp.insertBefore(noteEl, btnEl);
});

//la fonction permettant de creer la note
function createNote(id, content) {
	const textarea = document.createElement("textarea");
	textarea.classList.add("container-notes");
	textarea.placeholder = "Empty Note";
	textarea.value = content;

	return textarea;
}

function deleteNote(id, textContent){
	
}

function addNote() {
	const notes = getNotes();
	const noteObj = {
		id: Math.floor(Math.random() * 100000),
		content: "",
	};

	const noteElement = createNote(noteObj.id, noteObj.content);
	notesApp.insertBefore(noteElement, btnEl);

	notes.push(noteObj);

	saveNote(notes);
}

//la fonction permettant de sauvegardee la note dans local storage
function saveNote(notes) {
	localStorage.setItem("note", JSON.stringify(notes));
}

//fonction permettant de recuperer la note sauvegardee dans local storage.
function getNotes() {
	return JSON.parse(localStorage.getItem("note") || "[]");
}

btnEl.addEventListener("click", function () {
	console.log("King");
});
