import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import {Home} from './Home'
import {About} from './About'
import {NoMatch} from './NoMatch'
import {Layout} from './components/Layout'
import {NavigationTop} from './components/Navigation_top'
import {NavigationBut} from './components/Navigation_buttom'
import {Jumbotron} from './components/Jumbotron'
import {allPresent} from './containers/allPresent'
import {allPresent_Web} from './containers/allPresent_web'
import {allPresent_CV} from './containers/allPresent_CV'
import {allPresent_GR} from './containers/allPresent_GR'

class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<React.Fragment>
			 <Router>
			  <NavigationTop />
			  <Jumbotron />
			  <Layout>
    			 <Switch>
    			  <Route exact path = "/" component = {Home} />
    			 </Switch>
			  </Layout>
    			 <Switch>
    			  <Route exact path = "/presentation" component = {allPresent} />
    			  <Route path="/Presentation/GR" component={allPresent_GR} / >
    			  <Route path="/Presentation/Web" component={allPresent_Web} / >
    			  <Route path="/Presentation/CV" component={allPresent_CV} / >
    			 </Switch>
			 <NavigationBut />
			 </Router>  
			</React.Fragment>
		)
	}
}

export default App
