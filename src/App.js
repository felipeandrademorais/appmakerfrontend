import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import Administration from './pages/administrations';
import Questions from './pages/questions';


function App() {
  return (
   <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/administration" component={Administration} />
      <Route path="/questions" component={Questions} />
   </BrowserRouter>
  );
}

export default App;
