import React from 'react';
import { Pokemon } from '../interfaces/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        background: '#102a43', // Fondo azul oscuro muy limpio
        border: '2px solid #334e68',
        borderRadius: '12px',
        padding: '14px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#00f5d4';
        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,245,212,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#334e68';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
      }}
    >
      <span style={{ color: '#829ab1', fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
        N.º {String(pokemon.numeroPokedex).padStart(3, '0')}
      </span>
      <h3 style={{ textTransform: 'capitalize', margin: '8px 0', color: '#f0f4f8', fontSize: '1.1rem' }}>
        {pokemon.nombre}
      </h3>
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '8px' }}>
        <span style={{ background: '#243b53', color: '#00f5d4', border: '1px solid #334e68', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
          {pokemon.tipoPrimario?.nombre}
        </span>
        {pokemon.tipoSecundario && (
          <span style={{ background: '#243b53', color: '#62b6cb', border: '1px solid #334e68', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
            {pokemon.tipoSecundario.nombre}
          </span>
        )}
      </div>
    </div>
  );
};