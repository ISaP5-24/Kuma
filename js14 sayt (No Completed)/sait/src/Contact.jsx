import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Сообщение отправлено!\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`);
  };

  return (
    <div className="section">
      <h2>Контакты</h2>
      <p>Телефон: +7 (123) 456-78-90</p>
      <p>Email: ivan.ivanov@example.com</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Ваше сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;