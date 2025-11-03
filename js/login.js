const formLogin = document.querySelector("form");
const spanError = document.querySelector("#errorMessage");
const urls = new URLSearchParams(window.location.search);

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-user").value;
  const password = document.querySelector("#password-user").value;  

  const validEmail = email === auth.email;

  const validPassword = password === auth.password;

  if (validEmail && validPassword) {
    localStorage.setItem("email", email);
    localStorage.setItem("cart", JSON.stringify([]));

    location.href = `${urls.get("redirect")}?id=${urls.get("id")}`;
    return;
  }

  console.error("Autentificacion fallida. \nCredenciales Invalidas");

  spanError.style.color = "red";
  spanError.innerText = "Credenciales Invalidas";
});
