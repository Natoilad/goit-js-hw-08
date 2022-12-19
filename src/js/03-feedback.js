import throttle from "lodash.throttle";
const formE = document.querySelector("form");
const keyData = "feedback-form-state";
let localStorageData = {};
formE.addEventListener("input", addToLocalStorege);
function addToLocalStorege(e) {
  localStorageData[e.target.name] = e.target.value.trim();
  localStorage.setItem(keyData, JSON.stringify(localStorageData));
}
formE.addEventListener("submit", logData);
function logData(e) {
  e.preventDefault();
  const mail = e.target.email.value;
  const message = e.target.message.value;
  console.log(localStorageData);
  formE.reset();
  localStorage.removeItem(keyData);
}
try {
  const writeData = localStorage.getItem(keyData);
  const parcData = JSON.parse(writeData);
  for (const key in parcData) {
    formE.elements[key].value = parcData[key] || "";
    formE.elements[key].value = parcData[key] || "";
  }
} catch (errorAlarm) {
  console.log(writeData);
  console.log(errorAlarm.name);
  console.log(errorAlarm.message);
}
