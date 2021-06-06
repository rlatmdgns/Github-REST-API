
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BoardList } from './components/BoardList';
import { Header } from './components/Header';
function App() {
  return (
    <>
        <Header/>
        <BoardList/>
    </>
  );
}

export default App;