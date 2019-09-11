import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import Admin from './pages/admin';
import Questions from './pages/questions';


function App() {
  return (
   <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/admin" component={Admin} />
      <Route path="/questions" component={Questions} />
   </BrowserRouter>
  );
}

export default App;
