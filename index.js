//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");
let btn = document.getElementById("noteBtn");

function createNote(id, content) {
	const textarea = document.createElement("textarea");
	textarea.classList.add("container-notes");
	textarea.placeholder = "Empty Note";
	textarea.value = content;

	return textarea;
}

btn.addEventListener("click", () => {
	noteContent();
});
