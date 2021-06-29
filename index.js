
//grab the form element
let emailCollectorForm = document.getElementById("Email-Collector")
console.log(emailCollectorForm);  

emailCollectorForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("it worked!!");
    let ourFormData = new FormData(e.target);
    const userFirstname = ourFormData.get("name");
    const userEmailAddress = ourFormData.get("emailAddress");
    const userPhoneNumber = ourFormData.get("phoneNumber");
    const updatedHTML = `<h1 class="secondary-header">Congratulations, ${userFirstname}!</h1>
           <h2> Your registration is complete. <br>
           <br>
           You're on your way to becoming a BBQ Master.</h2>
           <p class="fine-print">You'll receive a webinar invitation link via email and text to: ${userEmailAddress} and ${userPhoneNumber}.</p>`;
        let mainContent = document.getElementById("smaller-div");
        mainContent.innerHTML = updatedHTML;   
})