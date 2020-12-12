import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HomePage } from './components/homePage';
import { AddItem } from './components/add-item';
import { EditItem } from "./components/edit-item";// import { UserList } from './components/user-list';
import { GlobalProvider } from './context/global-state';

function App() {
  return (
    <div style={{ maxWidth:'30rem', margin:'4rem auto'}}>
    <GlobalProvider>
      <BrowserRouter>
          <Switch>
            < Route exact path="/" component={ HomePage } />
            < Route path="/add" component={ AddItem } />
            < Route path="/edit/" component={ EditItem } />
          </Switch>
        </BrowserRouter>
    </GlobalProvider>
    </div>
  )
};

export default App;
