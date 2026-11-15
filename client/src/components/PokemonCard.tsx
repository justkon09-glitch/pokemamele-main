import React from 'react';
import { Pokemon } from '../interfaces/pokemon'; // Ajusta la ruta según tu estructura de carpetas

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'pointer',
        background: '#f9f9f9',
        maxWidth: '200px',
        textAlign: 'center'
      }}
    >
      <span style={{ color: '#666', fontSize: '0.9rem' }}>
        #{String(pokemon.numeroPokedex).padStart(3, '0')}
      </span>
      <h3 style={{ textTransform: 'capitalize', margin: '8px 0' }}>{pokemon.nombre}</h3>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <span style={{ background: '#eee', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
          {pokemon.tipoPrimario?.nombre}
        </span>
        {pokemon.tipoSecundario && (
          <span style={{ background: '#eee', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
            {pokemon.tipoSecundario.nombre}
          </span>
        )}
      </div>
    </div>
  );
};