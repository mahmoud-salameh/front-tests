import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Fav from './components/Fav';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Favorit">
              <Fav/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
