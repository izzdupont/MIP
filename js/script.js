function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        text : document.getElementById("phonum").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_w6ukd88", "template_2akvs5s",parms).then(alert("Email Sent!!"))
}