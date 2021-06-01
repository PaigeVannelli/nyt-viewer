import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import { getAllArticles } from '../../apiCalls';
require('dotenv').config()

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm) {
      getAllArticles(searchTerm)
    }
  })

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
