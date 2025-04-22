import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Веб-разработка',
      description: 'Создание современных веб-сайтов и приложений',
      price: 'от 20 000 ₽'
    },
    {
      id: 2,
      title: 'Дизайн',
      description: 'Разработка уникального дизайна для вашего бренда',
      price: 'от 15 000 ₽'
    },
    {
      id: 3,
      title: 'SEO-оптимизация',
      description: 'Повышение видимости вашего сайта в поисковых системах',
      price: 'от 10 000 ₽/мес'
    },
    {
      id: 4,
      title: 'Контент-маркетинг',
      description: 'Создание и продвижение контента для вашей аудитории',
      price: 'от 25 000 ₽/мес'
    }
  ];

  const handleOrderClick = () => {
    navigate('/');
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Наши услуги</h1>
          <p>Выберите подходящее решение для вашего бизнеса</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="price">{service.price}</div>
                <button 
                  className="order-btn"
                  onClick={handleOrderClick}
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;