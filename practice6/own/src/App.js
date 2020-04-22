import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { allPresent } from './containers/allPresent';
import { allPresent_Web } from './containers/allPresent_Web';
import { allPresent_CV } from './containers/allPresent_CV';
import { allPresent_GR } from './containers/allPresent_GR';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationTop } from './components/NavigationTop';
import { NavigationButtom } from './components/NavigationButtom';

import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationTop />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
            <Switch>
              <Route exact path="/presentation" component={allPresent} />
              <Route path="/presentation/Web" component={allPresent_Web} />
              <Route path="/presentation/CV" component={allPresent_CV} />
              <Route path="/presentation/GR" component={allPresent_GR} />
            </Switch>
         <NavigationButtom />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
