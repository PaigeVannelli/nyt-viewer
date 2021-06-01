import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
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
