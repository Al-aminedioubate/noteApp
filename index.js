//Declaration et initialisatio de nos variables
let notes = document.getElementById("noteContainer");
let btn = document.getElementById("noteBtn");

function noteContent() {
	
	//Ajoutons une confirmation de suppression
	newNote.addEventListener("dblclick", () => {
		var userConfirmed = confirm("Do you want to delete this note ?");
		if (userConfirmed) {
			notes.removeChild();
		}
	});
}

btn.addEventListener("click", () => {
	noteContent();
});
