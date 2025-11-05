const bookingsContainer = document.querySelector("#bookings-items")
// const nowDate = new Date.slice()
fetch('http://localhost:3000/bookings')
.then(response=>response.json())
.then(bookingsData=>{
    for (const element of bookingsData.bookings) {
        console.log(element)
        bookingsContainer.innerHTML+=`
            <div class="bookings-item">
            <div id="departureBooking">
              <p>${element.idTrip.departure} > ${element.idTrip.arrival}</p>
            </div>
            <div id="hoursBooking">
              <p>${element.idTrip.date.slice(11,16)}</p>
            </div>
            <div id="priceBooking">
              <p>${element.idTrip.price}€</p>
            </div>
            <div id="departureInBooking">
              <p>departure in  </p>
            </div>
          </div>
        `
    }
})

