import React from 'react';
import Home from './components/Home';
import './App.css';
import Quiz from './components/QuizMain';
import {BrowserRouter as Router ,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <Route path="/" exact component={Home} />
    <Route path="/components/QuizMain" exact component={Quiz}/>

    </Router>
  );
}

export default App;
