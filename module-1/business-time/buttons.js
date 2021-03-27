var customItem1 = document.getElementById("customItem1");
var customItem2 = document.getElementById("customItem2");
var customItem3 = document.getElementById("customItem3");


function showCustom2() {
    customItem1.style.display = "none"
    customItem2.style.display = "flex"
    customItem3.style.display = "none"
    console.log("go to 2")
}

function showCustom3() {
    customItem1.style.display = "none"
    customItem2.style.display = "none"
    customItem3.style.display = "flex"
    console.log("go to 3")

}


function showCustom1() {
    customItem1.style.display = "flex"
    customItem2.style.display = "none"
    customItem3.style.display = "none"
    console.log("go to 1")

}

function showHamburgerMenu() {
    
}

function closeSpecialOffer() {
    document.getElementById("specialOffer").style.transform = "translateY(-1515vh)"
}

function showOffer() {
    document.getElementById("specialOffer").style.transform = "translateY(1515vh)"
    // document.getElementById("specialOffer").style.top = "15vh"

}

setTimeout(showOffer, 2500);