import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Drawing from './pages/Drawing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/drawing" component={Drawing} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;