
//grab the form element
let emailCollectorForm = document.getElementById("Email-Collector")
console.log(emailCollectorForm);  

emailCollectorForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("it worked!!");
})