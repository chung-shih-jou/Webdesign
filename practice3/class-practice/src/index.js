import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScoreCard from './App';
import * as serviceWorker from './serviceWorker';


const scoreCard = { 
  name: 'Ric',
  records: [
    [ 'Math', 100 ],
    [ 'Chinese', 87 ],
    [ 'English', 100 ],
    [ 'Science', 100 ],
    [ 'Social', 0 ] 
  ]
};
const columnIndex = [ 'Subject', 'Score' ];


ReactDOM.render(
    <ScoreCard scoreCard = {scoreCard}
               columnIndex = {columnIndex} / >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
