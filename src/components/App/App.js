import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import DetailedArticle from '../DetailedArticle/DetailedArticle';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route 
            exact path='/'
            render={() => <LandingPage setSearchTerm={setSearchTerm}/>}
          />
          <Route 
            exact path='/:id'
            render={() => <DetailedArticle />}
          />
          <Route 
            render={() => <Redirect to="/" />} 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
