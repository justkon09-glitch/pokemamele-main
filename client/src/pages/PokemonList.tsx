import React, { useEffect, useState } from 'react';
import { PokemonService } from '../services/pokemonService';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    PokemonService.getAll()
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar pokemons:', err);
        setError('No se pudo conectar con el servidor de NestJS. ¿Está encendido?');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Cargando Pokédex...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Lista de Pokémon</h1>
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
          gap: '16px',
          marginTop: '20px'
        }}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id} 
            pokemon={pokemon} 
            onClick={() => console.log(`Seleccionaste a ${pokemon.nombre}`)}
          />
        ))}
      </div>
    </div>
  );
};