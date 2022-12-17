const form = document.querySelector("form");
form.addEventListener("input", addToLocalStorege);
const addToLocalStorege (e) {

}
form.addEventListener("submit", logData);

const logData (e) {
    e.preventDefault();
    const mail = e.target.elements.input;
    const message = e.target.elements.;
    


    console.dir({mail,message});
}