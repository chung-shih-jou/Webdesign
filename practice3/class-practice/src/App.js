import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class ScoreCard extends React.Component {
    constructor(){
        super();
    }
  render() {
    const rows = this.props.scoreCard.records.map((ele, idx) => (
        <tr key={idx}><td> {ele[0]} </td><td> {ele[1]} </td></tr>
    ))
    return (
      <table>
        <caption> {this.props.scoreCard.name}'s Score </caption>
        <thead>
          <tr><th> {this.props.columnIndex[0]} </th><th> {this.props.columnIndex[1]} </th></tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    );  
  }
}



export default ScoreCard;
