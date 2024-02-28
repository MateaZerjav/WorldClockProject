function updateTime() {
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let timeElementForParis = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = timeElementForParis.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = timeElementForParis.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let timeElementForLosAngeles = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    timeElementForLosAngeles.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = timeElementForLosAngeles.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
