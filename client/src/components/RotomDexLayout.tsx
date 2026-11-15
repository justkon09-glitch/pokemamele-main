import React from 'react';

interface RotomDexLayoutProps {
  children: React.ReactNode;
}

export const RotomDexLayout: React.FC<RotomDexLayoutProps> = ({ children }) => {
  return (
    <div style={styles.rotomContainer}>
      {/* Antena superior de la RotomDex */}
      <div style={styles.antenna}></div>

      {/* Cuerpo principal rojo */}
      <div style={styles.rotomBody}>
        
        {/* Sección de los Ojos de Rotom (Parte superior) */}
        <div style={styles.eyesContainer}>
          <div style={styles.eye}>
            <div style={styles.pupil}></div>
          </div>
          <div style={styles.mask}></div>
          <div style={styles.eye}>
            <div style={styles.pupil}></div>
          </div>
        </div>

        {/* Pantalla Central (Donde va la interfaz de la Pokédex) */}
        <div style={styles.screenFrame}>
          <div style={styles.screenInner}>
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

// Estilos limpios en línea para simular el diseño sin requerir librerías externas de CSS
const styles: { [key: string]: React.CSSProperties } = {
  rotomContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    padding: '20px',
  },
  antenna: {
    width: '30px',
    height: '40px',
    backgroundColor: '#d62828',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    marginBottom: '-5px',
    zIndex: 2,
  },
  rotomBody: {
    backgroundColor: '#e63946', // El rojo clásico de Rotom
    borderRadius: '40px 40px 60px 60px',
    padding: '30px 25px',
    width: '100%',
    maxWidth: '900px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 5px 15px rgba(255,255,255,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '6px solid #9d0208',
  },
  eyesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    position: 'relative',
    width: '100%',
  },
  mask: {
    width: '120px',
    height: '25px',
    backgroundColor: '#111',
    borderRadius: '10px',
    margin: '0 -15px',
    zIndex: 1,
  },
  eye: {
    width: '65px',
    height: '65px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #111',
    zIndex: 2,
    boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.3)',
  },
  pupil: {
    width: '35px',
    height: '35px',
    backgroundColor: '#0077b6', // El azul característico de los ojos de la RotomDex
    borderRadius: '50%',
    border: '3px solid #111',
  },
  screenFrame: {
    backgroundColor: '#023e8a', // Marco azul de la pantalla
    borderRadius: '25px',
    padding: '15px',
    width: '100%',
    boxShadow: 'inset 0 8px 15px rgba(0,0,0,0.6)',
  },
  screenInner: {
    backgroundColor: '#f8f9fa', // Fondo de la pantalla digital donde corren los datos
    borderRadius: '15px',
    minHeight: '500px',
    maxHeight: '75vh',
    overflowY: 'auto',
    padding: '20px',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)',
  },
};