import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./containers/storefront/home/Home";
import Category from './containers/storefront/plp/category';
import Search from './containers/storefront/search/search';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/admin/category" />
              <Route path="/" exact component={Home}/>
              <Route path="/c/:code" component={Category}/>
              <Route path="/search" component={Search}/>
         </Switch>
      </div>
    );
  }
}

export default App;
