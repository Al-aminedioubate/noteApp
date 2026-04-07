//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");
let btn = document.getElementById("noteBtn");

//la fonction permettant de creer la note
function createNote(id, content) {
	const textarea = document.createElement("textarea");
	textarea.classList.add("container-notes");
	textarea.placeholder = "Empty Note";
	textarea.value = content;

	return textarea;
}

//fonction permettant de recuperer la note sauvegardee dans local storage.
function getNotes() {
	return JSON.parse(localStorage.getItem("note") || "[]");
}

btn.addEventListener("click", () => {
	noteContent();
});
