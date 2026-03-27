//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");

let btn = document.getElementById("noteBtn");

function noteContent() {
	let newNote = document.createElement("textarea");

	notes.appendChild(newNote);
}

btn.addEventListener("click", () => {
	noteContent();
});
