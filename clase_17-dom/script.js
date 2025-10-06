const main = document.querySelector("main");

const mensaje = `Escribe la etiqueta que quieres crear: \n
    button - input - textarea - h1 - p

    Si quieres salir pon "salir"
`;

let loop = true;

let text;
const init = () => {
  while (loop) {
    const etiqueta = window.prompt(mensaje).trim().toLowerCase();

    switch (etiqueta) {
      case "button":
        text = getText();
        const button = document.createElement("button");
        button.onclick = () => alert("Haz dado click");
        button.innerText = text;
        main.appendChild(button);
        break;

      case "input":
        text = getText();
        const input = document.createElement("input");
        const menssageTypeInput = `Que tipo de input quieres? 
            text - number - email - password - date - datetime
          `;
        const typeInput = window.prompt(menssageTypeInput);
        input.type = typeInput;
        input.placeholder = text;
        main.appendChild(input);
        break;

      case "textarea":
        text = getText();
        const textarea = document.createElement("textarea");
        textarea.placeholder = text;
        main.appendChild(textarea);
        break;

      case "h1":
        text = getText();
        const h1 = document.createElement("h1");
        h1.innerText = text;
        main.appendChild(h1);
        break;

      case "p":
        text = getText();
        const p = document.createElement("p");
        p.innerText = text;
        main.appendChild(p);
        break;

      case "salir":
        loop = false;
        break;
      default:
        console.log("Elemento desconocido");
    }
  }
};

const getText = () => {
  const text = window.prompt(
    "Ingrese el texto que tendra la etiqueta o el placeholder si es un input o textarea"
  );
  return text.trim();
};

init();
