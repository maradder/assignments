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

const hamburger = document.querySelector(".fa-bars");
const hamburgerDiv = document.querySelector(".hamburger-nav");

hamburger.addEventListener("click", () => {
    console.log('hamburger');
    hamburgerDiv.style.display = "flex";
    hamburgerDiv.style.flexDirection = "column";
    hamburgerDiv.style.alignItems = "center";
    hamburgerDiv.style.position = "fixed";
    hamburgerDiv.style.position = "top: -15vh";
    hamburgerDiv.style.transform = "translateX(-87vw)";
    hamburgerDiv.style.borderRadius = "0";
    hamburgerDiv.style.boxShadow = "0 0 32px 2px #121212";
    hamburgerDiv.style.margin = "auto";
    hamburgerDiv.style.paddingTop = "45px";
    hamburgerDiv.style.zIndex = "4";
    hamburgerDiv.style.height = "300px";
    hamburgerDiv.style.minWidth = "100vw";
    hamburger.style.position = "absolute";
    hamburger.style.right = "25px";
    hamburger.style.top = "5px";
    
    const spreadNav = document.createElement('div');
    const readyMadeLink = document.createElement("a");
    readyMadeLink.setAttribute("href", "/index.html");
    readyMadeLink.classList.add('hamburgerText');
    readyMadeLink.style.display = "flex";
    readyMadeLink.innerText = "Everyday Favorites";

    const customMadeLink = document.createElement("a");
    customMadeLink.setAttribute("href", "/custom_order.html");
    customMadeLink.classList.add('hamburgerText');
    customMadeLink.style.display = "flex";
    customMadeLink.innerText = "Custom Treats";

    const contactLink = document.createElement("a");
    contactLink.setAttribute("href", "/contact.html");
    contactLink.classList.add('hamburgerText');
    contactLink.style.display = "flex";
    contactLink.innerText = "Contact Us";

    spreadNav.appendChild(readyMadeLink);
    spreadNav.appendChild(customMadeLink);
    spreadNav.appendChild(contactLink);
    hamburgerDiv.appendChild(spreadNav);

    hamburgerDiv.removeChild(hamburger);
    
    const closeBtn = document.createElement("a");
    hamburgerDiv.appendChild(closeBtn);
    closeBtn.classList.add('closeBtn');
    closeBtn.innerHTML = "<i class='fas fa-times'></i>";
    closeBtn.style.display = "flex";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "25px";
    closeBtn.style.top = "5px";
    closeBtn.style.fontSize = "48px";
    closeBtn.style.zIndex = "6px";
    closeBtn.style.color = "#ffffff";

});

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