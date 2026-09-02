import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', fontSize: '3em', margin: '20px' }}>🚀 Elisa HtmlTerra360</h1>
      <p style={{ color: '#666', fontSize: '1.2em' }}>Projeto de demonstração</p>
      <p style={{ color: '#999', marginTop: '20px' }}>Desenvolvido por: elisa30creative</p>
    </div>
  );
};

export default Home;
