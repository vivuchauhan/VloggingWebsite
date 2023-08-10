function getDetails(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(!name == 0 && !email == 0 && !message==0){
        console.log("Name: "+name);
        console.log("Email: "+email);
        console.log("Message: "+ message + alert("succesfully submitted!"));
        return;
    }
}