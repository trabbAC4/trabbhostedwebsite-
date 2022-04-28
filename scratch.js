let i = 0;
let random_num;
let pokemon;
let random_pokemon;


function fetchKantoPokemon(random_num){

    fetch('https://pokeapi.co/api/v2/pokemon/' + random_num + '/')
    .then(response => response.json())
    .then(function(single_pokemon) {
        pokemon = single_pokemon.name;
        console.log(pokemon);
    })
  }

function onClick() {
    let pokemon_chosen = document.getElementById('randomized');
    random_num = Math.floor(Math.random() * 150);
    random_pokemon = fetchKantoPokemon(random_num);
    let pokemon_name =  document.createElement('h3');
    pokemon_name.innerText = pokemon;
    pokemon_chosen.appendChild(pokemon_name);
    //corresponding pokemon image
    let poke_image = document.createElement('img');
    poke_image.scrset= 'https://pokeres.bastionbot.org/images/pokemon/${random_num}.png';
    pokemon_chosen.appendChild(poke_image);


    /*
    const newDiv = document.createElement("div");
    const pokemon_name = document.createTextNode(random_pokemon);
    newDiv.appendChild(pokemon_name);
    const currentDiv = document.getElementById("randomized");
    */


}
