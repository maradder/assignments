const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const name = data.name;
        document.getElementById("demo1").textContent = "JSON results: " + jsonData;
        document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://swapi.dev/api/people/1/", true);
xhr.send();
