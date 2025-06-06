import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/common/Buttons.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleGoBack}>
      ← Wróć
    </button>
  );
};

export default BackButton;
