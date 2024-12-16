function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        text : document.getElementById("phonum").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_mc0hf6g", "template_d598vrk",parms).then(alert("Thank you for your inquire!"))
}