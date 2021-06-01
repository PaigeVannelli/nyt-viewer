import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Switch>
          <Route 
            exact path='/'
            render={() => <LandingPage />}
          />
          <Route 
            exact path='/:id'
            render={() => <DetailedArticle />}
          />
          <Route 
            render={() => <Redirect to="/" />} 
          />
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
