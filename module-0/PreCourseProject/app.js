
// Convert the user input from three different treats into their biscuit value.
function convertDogTreats() {

    // Initialize the variables and create the arrays for qty of treats and the values of each treat
    var biscuitValue = 1;
    var jerkyStripValue = 6;
    var chewingStickValue = 12;
    var chewables = [parseFloat(document.getElementById("biscuits").value),
                    parseFloat(document.getElementById("jerkyStrips").value),
                    parseFloat(document.getElementById("chewingSticks").value)];
    var chewableValues = [biscuitValue, jerkyStripValue, chewingStickValue];
    var totalValue = 0

    // Iterate over the arrays to multiply the qty of each treat with its corresponding value.
    for (var i = 0; i < chewables.length; i++) {
    totalValue = totalValue + (chewableValues[i] * chewables[i]);
    }

    // Return the total converted value to the user along with a comment on the dog's diet.
    if (totalValue >= 20) {
        document.getElementById("judgement").innerHTML = "You're going to have a hefty dog.";
    }
    else {
        document.getElementById("judgement").innerHTML = "You need to treat your pup!";
    }
    
    document.getElementById("totalValue").innerHTML = "Your dog treats are worth " + totalValue + " biscuits.";
}

