import React from 'react';
import { RotomDexLayout } from './components/RotomDexLayout';
import { PokemonList } from './pages/PokemonList';

function App() {
  return (
    <RotomDexLayout>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#1d3557', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '2px' }}>
          RotomDex - Sistema Activo
        </h2>
      </header>
      <PokemonList />
    </RotomDexLayout>
  );
}

export default App;