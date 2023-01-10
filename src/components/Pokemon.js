import {useEffect, useState} from 'react';

const AllPokemon = (props) => {
    const [pokemon, setPokemon ] = useState([]);

    useEffect(() => {
        console.log('Pokemon!');
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            {pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    )
}
export default AllPokemon;