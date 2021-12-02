import './App.css'
import {useState, useRef, useEffect, useContext} from "react"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
