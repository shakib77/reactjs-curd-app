import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HomePage } from './components/home';
import { AddUser } from './components/add-user';
import { EditUser } from './components/edit-user'

function App() {
  return (
    <div style={{ maxWidth:'30rem', margin:'4rem auto'}}>
      <BrowserRouter>
        <Switch>
          < Route exact path="/" component={ HomePage } />
          < Route path="/add" component={ AddUser } />
          < Route path="/edit:id" component={ EditUser } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
