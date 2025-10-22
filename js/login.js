//Predefinimos valores correctos para el inicio de sesion
    const email = "soyun@correo.com";
    const password = "pro123";
//Capturamos el boton para enviar
    const buttonValidate = document.querySelector("#check");

//Funcion para validar si el correo y la contraseña son correctas
function validateCredentials(event){
        //Evita que se recargue la pagina
        event.preventDefault();
        let inputEmail = document.querySelector("#email-user").value.toLowerCase();
        let inputPassword = document.querySelector("#password-user").value;
        
        if(inputEmail === email && inputPassword === password){
        localStorage.setItem("email", email);
        window.location.href = "./index.html";
        } else {
            document.querySelector("#email-user").value = "";
            document.querySelector("#password-user").value = "";
            alert("Que intentas chaval, esta mal la contraseña!");
        }
    }

buttonValidate.addEventListener("click", validateCredentials);