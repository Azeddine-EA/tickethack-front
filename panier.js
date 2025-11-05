const cart = [
  { depart: "Toulouse", arrivee: "Lyon", heure: "20:09", prix: 103 },
  { depart: "Lyon", arrivee: "Paris", heure: "13:09", prix: 103 },
];

const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

function afficherPanier() {
  cartItems.innerHTML = "";

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const trajet = cart[i];
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
    <span>${trajet.depart} => ${trajet.arrivee}</span>
    <span>${trajet.heure}</span>
    <span>${trajet.prix}€</span>
    <button onclick="supprimerTrajet(${i})">X</button>
  `;
    cartItems.appendChild(div);
    total += trajet.prix;
  }

  totalEl.textContent = `Total : ${total}€`;
}

function supprimerTrajet(index) {
  cart.splice(index, 1);
  afficherPanier();
}

afficherPanier();
document.querySelector("#TICKETHACK").textContent;
