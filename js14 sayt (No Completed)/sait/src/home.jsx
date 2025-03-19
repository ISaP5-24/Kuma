import React from 'react';

function Home() {
  return (
    <div className="section">
      <img src="/logog.jpg" alt="Иван Иванов" className="worker-photo" />
      <h1>Иван Иванов</h1>
      <p className="specialization">Специалисты по укладке керамогранита</p>
      <p className="description">
        Опытный мастер с 10-летним стажем. Качественная укладка керамогранита, ремонт плитки и гидроизоляция.
      </p>
    </div>
  );
}

export default Home;