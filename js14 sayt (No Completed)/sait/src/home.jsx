import React from 'react';

function Home() {
  return (
    <div className="section">
      <h1>Иван Иванов</h1>
      <p className="specialization">Специалист по укладке керамогранита</p>
      <img src="https://via.placeholder.com/300" alt="Иван Иванов" className="worker-photo" />
      <p className="description">
        Опытный мастер с 10-летним стажем. Качественная укладка керамогранита, ремонт плитки и гидроизоляция.
      </p>
    </div>
  );
}

export default Home;