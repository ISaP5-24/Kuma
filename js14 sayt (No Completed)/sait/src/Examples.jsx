import React from 'react';

function Examples() {
  const exampleWorks = [
    { id: 1, image: 'https://via.placeholder.com/300', description: 'Кухня с керамогранитом' },
    { id: 2, image: 'https://via.placeholder.com/300', description: 'Ванная комната' },
    { id: 3, image: 'https://via.placeholder.com/300', description: 'Гостиная с плиткой' },
    { id: 4, image: 'https://via.placeholder.com/300', description: 'Балкон с керамогранитом' },
  ];

  <div id="slider">
            <div id="slidescontain">
                <div id="slidesline" style="left: 0">
                    <div style="background-image: url(assets/1.jpg);"></div>
                    <div style="background-image: url(photo/2.jpg);"></div>
                    <div style="background-image: url(photo/3.jpg);"></div>
                    <div style="background-image: url(photo/4.jpg);"></div>
                </div> 
            </div>
        </div>

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