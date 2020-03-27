import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
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
*/
class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

export default Greeting ;
