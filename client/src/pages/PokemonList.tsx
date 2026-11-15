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
        setError('No se pudo conectar con el servidor de NestJS');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px', color: '#00f5d4', fontFamily: 'monospace', fontSize: '1.2rem' }}>
        <p>Inicializando base de datos RotomDex...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#ff4d6d', fontFamily: 'monospace' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '2px solid #3a86ff', 
        paddingBottom: '10px',
        marginBottom: '20px' 
      }}>
        <h2 style={{ color: '#ffffff', margin: 0, fontSize: '1.4rem', fontFamily: 'monospace', letterSpacing: '1px' }}>
          REGISTRO POKÉMON
        </h2>
        <span style={{ background: '#3a86ff', color: '#fff', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          Total: {pokemons.length}
        </span>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', 
          gap: '14px',
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