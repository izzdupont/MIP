function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        phone_num : document.getElementById("phone_num").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_mc0hf6g", "template_d598vrk",parms).then(alert("Email Sent!!"))
}