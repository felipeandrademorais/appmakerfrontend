import React from 'react';
import { Link } from "react-router-dom";

const pages = () => {
  return(
    <div>
      <Link to={'/administration'}>Administração</Link>
      <Link to={'/questions'}>Questões</Link>
    </div>
  );
};

export default pages;
