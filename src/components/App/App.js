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
  const [currentArticle, setCurrentArticle] = useState({})

  useEffect(() => {
    if (searchTerm) {
      getAllArticles(searchTerm)
        .then(data => {
          // console.log(data)
          let cleanedData = dataCleaner(data)
          setSearchedArticles(cleanedData)
        })
    }
  }, [searchTerm])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route 
            exact path='/'
            render={() => <LandingPage setSearchTerm={setSearchTerm} searchedArticles={searchedArticles} setCurrentArticle={setCurrentArticle}/>}
          />
          <Route 
            exact path='/article'
            render={() => <DetailedArticle currentArticle={currentArticle}/>}
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
