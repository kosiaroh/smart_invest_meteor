import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Product from '../pages/Products.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/products' component={Product} />
              <Route path = '/about' component={About} />
              <Route path = '/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
