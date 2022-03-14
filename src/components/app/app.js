import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service'; 
import { StarshipDetails } from '../sw-components';

import './app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PeoplePage,
        PlanetsPage,
        StarshipsPage } from '../pages';

export default class App extends Component {

  state = {
    swapiService: new SwapiService() 
  };

  onServiceChange = () => {
    this.setState (({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService: SwapiService;

    return {
      swapiService: new Service()
    };  
  });
}

  updateUrl = (newUrl) => {
    this.setState ( {page: newUrl} )
  }
  
  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value = {this.state.swapiService}>
          <Router>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Routes>
              <Route path = '/' element = {<h2>Welcome to StartDB</h2>} />
              <Route path = '*' element = {<h2>Page not ready</h2>} />
              <Route path = 'people' element = {<PeoplePage />} />
              <Route path = 'people/:id' element = {<PeoplePage />} />
              <Route path = 'planets' element = {<PlanetsPage />} />
              <Route path='starships' element = {<StarshipsPage  />} />
              <Route path='starships/:id' element = {<StarshipDetails />} />
              {/* </Route> */}
            </Routes>
          </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
