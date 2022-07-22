/*
Joe DeWeese
20 July 2022
problem1
 */

//JWD:  MOVIE TICKET CALCULATOR

//JWD:  BUTTON CODE
{
  document
    .querySelector("#calcTicketPrice")
    .addEventListener("click", function (e) {
      //JWD:  VALIDATION
      if (
        document.querySelector("#age").reportValidity() &&
        document.querySelector("#timeHours").reportValidity() &&
        document.querySelector("#timeMinutes").reportValidity()
      ) {
        //Extracting values and saving to new variable
        let age = document.querySelector("#age").value;
        let timeHR = document.querySelector("#timeHours").value;
        let timeMin = document.querySelector("#timeMinutes").value;

        let ticketPrice = 12.0;

        if (age >= 55 || age < 10) {
          ticketPrice = 7.0;

          document.querySelector(
            "#ticketPrice"
          ).innerHTML = `Age ${age} years young!  Congrats special ticket Price: $${ticketPrice.toFixed(
            2
          )}`;
        } else if (
          timeHR >= 2 &&
          timeHR <= 6 &&
          document.querySelector("#pm").checked
        ) {
          ticketPrice = 7.0;
          document.querySelector(
            "#ticketPrice"
          ).innerHTML = `Congrats special matinee ticket Price: $${ticketPrice.toFixed(
            2
          )}`;
        } else {
          ticketPrice = 12.0;
          document.querySelector(
            "#ticketPrice"
          ).innerHTML = `Enjoy the movie! the ticket price is $${ticketPrice}`;
        }
      }
    });
}
