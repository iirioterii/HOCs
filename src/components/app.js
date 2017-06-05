import React, { Component } from 'react';
import Header from "./header";
import {Route} from 'react-router-dom';
import Resources from '../components/resources';
import requireAuth from '../HOCs/require_authentication';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path="/resources" component={requireAuth(Resources)}/>
      </div>
    );
  }
}
