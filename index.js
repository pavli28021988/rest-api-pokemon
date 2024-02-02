

// -----------------then()  and   catch()--------------

/* fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
/* .then(response => console.log(response)) */
/* .then(response=> {
    if(!response.ok){
        throw new Error('Could not fetch resource')
    }
    return response.json();
})
/* .then(data => console.log(data.game_indices[0].game_index)) */

/* .then(data=> console.log(data))
.catch(error => console.error(error));
  */ 



//--------------async await----------------------------------------//





/* fetchData(); */
async function fetchData(){
    try{
       
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error('Could not fetch resource!')
        }

        const data = await response.json();
        //console.log(data.sprites.back_default);
        const imgData = data.sprites.back_default
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = imgData;
        imgElement.style.display = 'block';

        

    }
    catch{
        console.error(error);
    }
}