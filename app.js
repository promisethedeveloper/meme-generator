// select the input tags
const imageURL = document.querySelector("#the_image_url");
const imageOnTop = document.querySelector("#the_text_on_top_url");
const imageOnBottom = document.querySelector("#the_text_on_bottom_url");
const section = document.querySelector("section");

// Select the form
const form = document.querySelector("form");

// add event listener to the form
form.addEventListener("submit", (e) => {
	// prevent the form from making a submission and reloading
	e.preventDefault();

	// create a div element for the top text
	const divTop = document.createElement("div");

	// create a div element for the bottom text
	const divBottom = document.createElement("div");

	// create an image tag
	const img = document.createElement("img");

	if (imageURL.value) {
		// set the image src attribute of the image tag to the value of the image URL
		img.setAttribute("src", imageURL.value);

		// set the width of the image to 100%
		img.style.width = "100%";

		// set the text of the top div to the value of the text input
		divTop.textContent = imageOnTop.value;

		// set the text of the bottom div to the value of the text input
		divBottom.textContent = imageOnBottom.value;

		// add a class of text_top to the div
		divTop.classList.add("text_top");

		// add a class of text_bottom to the div
		divBottom.classList.add("text_bottom");

		// create a div named memeContainer for placing the memes
		const memeContainer = document.createElement("div");

		// add a class of meme_style to the created div
		memeContainer.classList.add("meme_style");

		// apend the image to the created div
		memeContainer.appendChild(img);

		// append the text_top to the div
		memeContainer.appendChild(divTop);

		// append the text_bottom to the div
		memeContainer.appendChild(divBottom);

		// ADD OVERLAY TO THE MEME
		section.classList.add("img__overlay");

		// append the div to the section tag
		section.appendChild(memeContainer);

		// create a delete meme button
		const deleteMeme = document.createElement("button");

		// set the text of the delete button
		deleteMeme.textContent = "Delete meme";

		// append the delete button to the section
		section.appendChild(deleteMeme);

		imageURL.value = "";
		imageOnTop.value = "";
		imageOnBottom.value = "";
	} else {
		imageOnTop.value = "";
		imageOnBottom.value = "";
		alert("Please add image URL");
	}
});

// Usign event delegation, add an event listener to the section tag, which is the parent of the memes
section.addEventListener("click", (e) => {
	// check if the tag clicked on is the button
	if (e.target.tagName === "BUTTON") {
		// remove the previous sibling of the button element
		e.target.previousElementSibling.remove();
		// remove the button element
		e.target.remove();
	}
});
