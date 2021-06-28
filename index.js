
//grab the form element
let emailCollectorForm = document.getElementById("Email-Collector")
console.log(emailCollectorForm);  

emailCollectorForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("it worked!!");
    let ourFormData = new FormData(e.target);
    const userFirstname = ourFormData.get("name");
    const updatedHTML = `<h1 class="secondary-header">Congratulations, ${userFirstname}! </h1>
           <p> You're on your way to becoming a BBQ Master.</p>`;
        let mainContent = document.getElementById("smaller-div");
        mainContent.innerHTML = updatedHTML;   
})