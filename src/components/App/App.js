import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import { getAllArticles } from '../../apiCalls';
import { dataCleaner } from '../../helperFunctions'
require('dotenv').config()

const App = () => {

  const [searchTerm, setSearchTerm] = useState('arts')
  const [searchedArticles, setSearchedArticles] = useState([])

  useEffect(() => {
    if (searchTerm) {
      getAllArticles(searchTerm)
        .then(data => {
          let cleanedData = dataCleaner(data)
          setSearchedArticles(cleanedData)
        })
    }
  }, [searchTerm])

  const getCurrentArticle = (id) => {
    let currentArticle = searchedArticles.find(article => {
      return article.id === parseInt(id)
    })
    return currentArticle
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route 
            exact path='/'
            render={() => <LandingPage setSearchTerm={setSearchTerm} searchedArticles={searchedArticles}/>}
          />
          <Route 
            exact path='/:id'
            render={({ match }) => <DetailedArticle currentArticle={getCurrentArticle(match.params.id)} />}
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
