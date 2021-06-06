
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BoardList } from './components/BoardList';
import {BoardDetail} from './components/BoardDetail'
import { Header } from './components/Header';
function App() {
  return (
    <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={BoardList} />
        <Route exact path="/:id" component={BoardDetail} />
        </Switch>
    </Router>
  );
}

export default App;