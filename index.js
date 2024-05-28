// Higher order function to toggle display of a paragraph
function toggleParagraph(paragraph, button) {
  return function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.textContent = "-";
    } else {
      paragraph.style.display = "none";
      button.textContent = "+";
    }
  };
}

// Select all paragraphs and buttons
const paragraphs = [
  document.querySelector("#hidden-1"),
  document.querySelector("#hidden-2"),
  document.querySelector("#hidden-3"),
  document.querySelector("#hidden-4"),
];

const buttons = [
  document.getElementById("button-1"),
  document.getElementById("button-2"),
  document.getElementById("button-3"),
  document.getElementById("button-4"),
];

// Add event listeners using the higher-order function
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(
    "click",
    toggleParagraph(paragraphs[i], buttons[i])
  );
}
