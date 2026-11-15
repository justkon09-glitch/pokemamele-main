import React from 'react';
import { PokemonList } from './pages/PokemonList';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <header style={{ 
        backgroundColor: '#cc0000', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1>Mi Pokédex Personal</h1>
      </header>

      <main>
        <PokemonList />
      </main>
    </div>
  );
}

export default App;