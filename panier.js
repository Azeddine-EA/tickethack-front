// const { response } = require("express");

const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

function afficherPanier() {
  cartItems.innerHTML = "";
  fetch("http://localhost:3000/panier")
    .then((Response) => Response.json())
    .then((panierData) => {
      //document.querySelector('#purchase').textContent = Data.value;
      console.log("ma data", panierData.Panier);
      let totalPrice = 0;
      for (const element of panierData.Panier) {
        // console.log(element.idTrip.departure);
        // console.log(element.idTrip.arrival);
        // div.classList.add("panierData-item");
        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${element.idTrip.departure} => ${
          element.idTrip.arrival
        }</span>
            <span>${element.idTrip.date.slice(11, 16)}</span>
            <span>${element.idTrip.price}€</span>
            <button class ="btnDelete" id="${element._id}" >X</button>
        </div>
      `;
        totalPrice += element.idTrip.price;
        totalEl.textContent = `Total : ${totalPrice}€`;
      }
      allBtn()

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

function supprimerTrajet(idPanier) {
  fetch(`http://localhost:3000/panier/${idPanier}`, {
    method: "DELETE",
  })
    .then((Response) => Response.json())
    .then((data) => {
      allBtn()
    });
}

function allBtn(){
    let btnDeletes = document.querySelectorAll(".btnDelete")
    for (const btnDelete of btnDeletes) {
        // console.log(btnDelete.parentNode)
        btnDelete.addEventListener('click', function(){
            fetch(`http://localhost:3000/panier/${btnDelete.id}`,{

                method: "DELETE",
            })
            .then(response => response.json())
            .then((newPanierData)=>{
                // console.log(newPanierData.Panier)
                let newTotalPrice = 0;
                btnDelete.parentNode.remove()
                for (const element of newPanierData.Panier){
                    newTotalPrice += element.idTrip.price;
                    totalEl.textContent = `Total : ${newTotalPrice}€`;
                }
            })
        })
    }
}

afficherPanier();
document.querySelector("#TICKETHACK").textContent;
