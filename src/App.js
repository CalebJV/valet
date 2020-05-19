import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Valet from './components/Valet';

import './App.css';
import Drivers from './components/Drivers';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/cars/:id" component={Valet} />
          <Route path="/cars" component={Valet} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/settings" component={Settings} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/cars" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
