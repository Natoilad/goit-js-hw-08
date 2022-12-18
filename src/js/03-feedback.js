const form = document.querySelector("form");
form.addEventListener("input", addToLocalStorege);
// const addToLocalStorege (e) {

// }
form.addEventListener("submit", logData);

function logData(e) {
  e.preventDefault();
  const mail = e.target.elements.input;
  const message = e.target.elements.textarea;

  console.dir({ mail, message });
}
