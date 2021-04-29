let pokemonData = new XMLHttpRequest();

pokemonData.onreadystatechange = () => {
    if(pokemonData.readyState === 4 && pokemonData.status === 200) {
        const jsonData = pokemonData.responseText;
        const data = JSON.parse(jsonData);
        const pokemon = data.objects[0].pokemon;

        for (let i = 0; i < pokemon.length; i++) {
            let newPokeDiv = document.createElement('div');
            let pokemonH1 = document.createElement('h1');
            let target = document.querySelector('.results');

            newPokeDiv.style.height = "60px";
            newPokeDiv.style.margin = "20px auto";
            newPokeDiv.style.fontSize = "36px";
            newPokeDiv.style.display = "flex";
            newPokeDiv.style.flexDirection = "column";
            newPokeDiv.style.justifyContent = "center";
            newPokeDiv.style.alignItems = "left";
            pokemonH1.innerText = `${i+1}: ${pokemon[i].name}`;
            newPokeDiv.appendChild(pokemonH1);
            target.appendChild(newPokeDiv);
            // for (let x = 0; x < pokemon.length; x++) {

            //     let arr = pokemon[i];
            //     let pokeName = arr[x].name;
            //     console.log(x)
            //     console.log(pokeName)
            // }
        }

    }
    
}

pokemonData.open("GET", "https://api.vschool.io/pokemon", true);
pokemonData.send();
