import React from 'react';
import wordsDisplay from '../components/words/Words';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Router>
       
        <Route exact path="/" component={wordsDisplay} />
      </Router>
    </>
  );

}
