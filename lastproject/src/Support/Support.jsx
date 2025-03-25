import React, { useState } from 'react';
import './Support.css';
import { chatAI } from './Support';


const Popup = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleAI = async () => {
    if (input.trim() === '') return;

    const userMessage = {
      type: 'user',
      message: input,
    };

    setContent((prevContent) => [...prevContent, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await chatAI(input);
      const botMessage = {
        type: 'bot',
        message: res,
      };
      setContent((prevContent) => [...prevContent, botMessage]);
    } catch (error) {
      console.error('Lỗi khi gọi chatAI:', error);
      const errorMessage = {
        type: 'bot',
        message: 'Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại sau.',
      };
      setContent((prevContent) => [...prevContent, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAI();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="chat-content">
          {content.map((e, i) => {
            const { type, message } = e;
            return (
              <div
                key={i}
                className={type === 'user' ? 'userContent' : 'botContent'}
              >
                {message}
              </div>
            );
          })}
          {isLoading && (
            <div className="loadingMessage">
              Đang xử lý...
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            value={input}
            type="text"
            placeholder="Đặt câu hỏi ở đây"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button className="send-btn" onClick={handleAI} disabled={isLoading}>
            Gửi
          </button>
        </div>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
