document.addEventListener("DOMContentLoaded", () => {
    // 1) Almacenar el elemento cuyo id es cardContainer en una variable constante
    const cardContainer = document.getElementById("cardContainer");

    // 2) Eliminar el primer elemento hijo desde el padre
    cardContainer.removeChild(cardContainer.firstElementChild);

    // 3) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass"
    const redCard = cardContainer.querySelector(".redClass");
    if (redCard) {
        cardContainer.removeChild(redCard);
    }

    // 4) Crear un elemento h1 con vuestro nombre
    const nombreElement = document.createElement("h1");
    nombreElement.textContent = "Tu Nombre Aquí"; // Reemplaza con tu nombre

    // 5) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la página del Vedruna
    const enlaceElement = document.createElement("a");
    enlaceElement.href = "https://www.vedruna.es"; // URL del Vedruna
    enlaceElement.textContent = "Vedruna";

    // 6) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"
    const botonElement = document.createElement("button");
    botonElement.id = "botonJoker";
    botonElement.textContent = "boton";

    // 7) Crear un elemento div cuya clase sea "cards greenClass"
    const newCardDiv = document.createElement("div");
    newCardDiv.className = "cards greenClass";

    // 8) Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente
    newCardDiv.appendChild(nombreElement);
    newCardDiv.appendChild(enlaceElement);
    newCardDiv.appendChild(botonElement);

    // 9) Añadir a cardContainer el div del apartado anterior
    cardContainer.appendChild(newCardDiv);
});
