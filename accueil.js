const btnSearch = document.querySelector("#btn-form")
const inputDeparture = document.querySelector("#departure-form")
const inputArrival = document.querySelector("#arrival-form")
const inputDate = document.querySelector("#date-form")



btnSearch.addEventListener('click',
    function () {
        const resulttrue = document.querySelector("#trips")
         resulttrue.innerHTML=''
        console.log('Click detected')
fetch(`http://localhost:3000/trips/${inputDeparture.value}/${inputArrival.value}/${inputDate.value}`)
.then(response => response.json())
.then(tripsData =>{
console.log(tripsData.Trips)

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
                            <button>Book</button>
                        </div>
                    </div>
         
        `
    }
})
inputDeparture.value = ''
inputArrival.value = ''
inputDate.value = ''
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