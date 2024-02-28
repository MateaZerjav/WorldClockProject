function updateTime() {
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let timeElementForParis = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = timeElementForParis.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = timeElementForParis.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let timeElementForLosAngeles = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      timeElementForLosAngeles.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = timeElementForLosAngeles.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
      <div>
         <h2>${cityName}</h2>
         <div class="date"> ${cityTime.format("MMMM Do YYYY")}
         
         </div>
         </div>
         <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
         </div>
         </div>
         <a href="/">Home</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
