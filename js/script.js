function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        phone : document.getAnimations("phone_num").value,
        email : document.getAnimations("email").value,
        message : document.getAnimations("message").value,
    }

    emailjs.send("service_mc0hf6g", "template_d598vrk",parms).then(alert("Email Sent!!"))
}