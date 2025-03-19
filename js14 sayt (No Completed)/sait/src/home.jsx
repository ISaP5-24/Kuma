import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="section">
      <img src="/logog.jpg" alt="Иван Иванов" className="worker-photo" />
      <h1 className='textt'>Иван Иванов</h1>
      <p className="specialization">Специалисты по укладке керамогранита</p>
      <p className="description">
        Опытный мастер с 10-летним стажем. Качественная укладка керамогранита, ремонт плитки и гидроизоляция.
      </p>
    </div>
  );
}

export default Home;