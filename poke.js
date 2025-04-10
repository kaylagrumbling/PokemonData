async function fetchPokemonData(pokemonName) {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const PokemonData = await response.json();
            return PokemonData;
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
            throw error;
        }   
    }
    
    document.addEventListener('DOMContentLoaded', async () => {
    const pikachuData = await fetchPokemonData('pikachu');
    const pokemonInfoElement = document.getElementById('pokemon-info');
    
    
    pokemonInfoElement.innerHTML = `
    <h2>${pikachuData.name}</h2>
    <img src="${pikachuData.sprites.front_default}" alt="${pikachuData.name}">
    
    <h3>Abilities:</h3>
    <ul>
    ${pikachuData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
    </ul>
    <h3>Base Experience:</h3>
    <p>${pikachuData.base_experience}</p>
    <h3>Height:</h3>
    <p>${pikachuData.height}</p>
    `;
    
    });
        