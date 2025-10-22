const formLogin = document.querySelector("form");
const spanError = document.querySelector("#errorMessage");
const urls = new URLSearchParams(window.location.search);

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements[0].value;
  const password = event.target.elements[1].value;

  const validEmail = email === auth.email;

  const validPassword = password === auth.password;

  if (validEmail && validPassword) {
    localStorage.setItem("email", email);

    location.href = `${urls.get("redirect")}?id=${urls.get("id")}`;
    return;
  }

  console.error("Autentificacion fallida. \nCredenciales Invalidas");

  spanError.style.textColor = "red";
  spanError.innerText = "Credenciales Invalidas";
});
