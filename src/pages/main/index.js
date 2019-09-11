import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

const pages = () => {
  return(
    <div className="container-main">
      <Link to={'/admin'} className="link" >Administração</Link>
      <Link to={'/questions'} className="link" >Questões</Link>
    </div>
  );
};

export default pages;
