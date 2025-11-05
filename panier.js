const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

function afficherPanier() {
  cartItems.innerHTML = "";
  fetch("http://localhost:3000/panier")
    .then((Response) => Response.json())
    .then((panierData) => {
      //document.querySelector('#purchase').textContent = Data.value;
      console.log("ma data", panierData.Panier);
      let totalPrice = 0
      for (const element of panierData.Panier) {
        // console.log(element.idTrip.departure);
        // console.log(element.idTrip.arrival);
        // div.classList.add("panierData-item");
        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${element.idTrip.departure} => ${element.idTrip.arrival}</span>
            <span>${element.idTrip.date.slice(11,16)}</span>
            <span>${element.idTrip.price}€</span>
            <button class="${element._id}" >X</button>
        </div>
      `;
        totalPrice += element.idTrip.price
      totalEl.textContent = `Total : ${totalPrice}€`;
      }
    //   const div = document.createElement("div");
      //         cartItems.appendChild(div);
      //         total += trajet.prix;
      //       }

      // });
    });
}
//   let total = 0;

//   document.querySelector("#purchase").textContent = `Total : ${total}€`;
// }
//.catch((err) => console.error("Erreur lors du chargement du panier :", err));

function supprimerTrajet(index) {
  cart.splice(index, 1);
  afficherPanier();
}

afficherPanier();
document.querySelector("#TICKETHACK").textContent;
