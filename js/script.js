function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        text : document.getElementById("phonum").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

<<<<<<< HEAD
    emailjs.send("service_w6ukd88", "template_2akvs5s",parms).then(alert("Email Sent!!"))
=======
    emailjs.send("service_mc0hf6g", "template_d598vrk",parms).then(alert("Email Sent!!"))
>>>>>>> parent of ff60741 (Update EmailJS)
}