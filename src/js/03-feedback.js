import throttle from "lodash.throttle";
const formE = document.querySelector("form");
const keyData = "feedback-form-state";
let localStorageData = {};
formE.addEventListener("input", addToLocalStorege);
function addToLocalStorege(e) {
  localStorageData[e.target.name] = e.target.value;
  localStorage.setItem(keyData, JSON.stringify(localStorageData));
}
formE.addEventListener("submit", logData);

function logData(e) {
  e.preventDefault();
  const mail = e.target.elements.input;
  const message = e.target.message.value;
  console.log({
    mail,
    message,
  });
  formE.reset();
  localStorage.removeItem(keyData);
}
try {
  const writeData = localStorage.getItem(keyData);
  const parcData = JSON.parse(writeData);
  if (writeData) {
    formE.elements.email.value = parcData.email || "";
    formE.elements.message.value = parcData.message || "";
  }
} catch (errorAlarm) {
  console.log(errorAlarm.name);
  console.log(errorAlarm.message);
}
