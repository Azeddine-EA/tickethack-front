const btnSearch = document.querySelector("#btn-form")
const inputDeparture = document.querySelector("#departure-form")
const inputArrival = document.querySelector("#arrival-form")
const inputDate = document.querySelector("#date-form")


function allBtnBook(){
    let btnBooks = document.querySelectorAll('.btnBook > button')
    console.log(btnBooks)
    for (const btnBook of btnBooks) {
        
        btnBook.addEventListener("click",function(){
            
            fetch(`http://localhost:3000/panier/${btnBook.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ cityName }),
            }).then(response=>response.json())
            .then(panierData=>{
                console.log(panierData)
            })
        })
    }
    return btnBooks
}


btnSearch.addEventListener('click',
    function () {
        const containerTrajet = document.querySelector("#afficheTrips")
        containerTrajet.style.display="none";
        const resulttrue = document.querySelector("#trips")
        resulttrue.style.display="flex";
         resulttrue.innerHTML=''
        console.log('Click detected')
fetch(`http://localhost:3000/trips/${inputDeparture.value}/${inputArrival.value}/${inputDate.value}`)
.then(response => response.json())
.then(tripsData =>{
    const vide = []
    console.log(tripsData);
    if (tripsData.Trips.length === 0) {
        resulttrue.style.display="none";
        const notFound = document.querySelector("#resultfalse")
        notFound.style.display="flex"
        console.log('vide');
        
    }else{
        // console.log('trouve');
        const notFound = document.querySelector("#resultfalse")
        notFound.style.display="none";
        // console.log(tripsData.Trips)
        for (const trip of tripsData.Trips) {
        // console.log(trip.departure)
        resulttrue.innerHTML+=`
                    <div class="trip">
                        <div class="departure">
                            ${trip.departure} > ${trip.arrival}
                        </div>
                        <div class="time">
                            <p>${trip.date.slice(11,16)}</p>
                        </div>  
                         <div class="price">
                            <p>${trip.price}$</p>
                        </div>
                        <div class="btnBook">
                            <button id="${trip._id}"><a href ="./cart.html">Book</a></button>
                        </div>
                    </div>
         
        `
        }

        inputDeparture.value = ''
        inputArrival.value = ''
        inputDate.value = ''
        allBtnBook()
    }
    })




    }
    
)


// btnSearch.addEventListener('click', function(){

// fetch('https://')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     resultQuestion.textContent = data.setup
//     resultJoke.textContent = data.delivery


//   } )
// });