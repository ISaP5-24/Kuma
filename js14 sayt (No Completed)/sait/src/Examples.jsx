import React from 'react';

function Examples() {
  const exampleWorks = [
    { id: 1, image: 'https://via.placeholder.com/300', description: 'Кухня с керамогранитом' },
    { id: 2, image: 'https://via.placeholder.com/300', description: 'Ванная комната' },
    { id: 3, image: 'https://via.placeholder.com/300', description: 'Гостиная с плиткой' },
    { id: 4, image: 'https://via.placeholder.com/300', description: 'Балкон с керамогранитом' },
  ];

  return (
    <div className="section">
      <h2>Примеры работ</h2>
      <div className="examples-grid">
        {exampleWorks.map((work) => (
          <div key={work.id} className="example-item">
            <img src={work.image} alt={work.description} className="example-image" />
            <p className="example-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Examples;