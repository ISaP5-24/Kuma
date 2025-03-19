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
        <button className="linkis"><link rel="https://t.me/Check_MI://t.me/" href="https://t.me/Check_MI" /></button>
    </div>
  );
}

export default Contact;