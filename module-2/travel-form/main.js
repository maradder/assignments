const flightBooking = document.flightBooking;
const firstName = document.flightBooking.firstName;
const lastName = document.flightBooking.lastName;
const age = document.flightBooking.age;
const gender = document.flightBooking.gender;
const destination = document.flightBooking.destination;
const dietaryRest = document.flightBooking.dietaryRest;

flightBooking.addEventListener("submit", (e) => {
    e.preventDefault();
    let dietaryRestrictions = [];
    for (let i = 0; i < dietaryRest.length; i++) {
        if (dietaryRest[i].checked === true) {
            dietaryRestrictions.push(dietaryRest[i].value);
        }
    }
    confirm("First Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + gender.value + "\nTravel Destination: " + destination.value +  "\nDietary Needs: " + dietaryRestrictions.toString(...dietaryRestrictions));
});