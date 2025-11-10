const params = new URLSearchParams(window.location.search);
const numero = params.get("numero");

async function drawPokemon(id) {
    const pokemon = await getPokemon("pokemon/" + id);
    
    document.title = `Pokemon - ${capitalizeFirstLetter(pokemon.name)}`;

    
}