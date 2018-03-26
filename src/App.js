import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>

            

            <Switch>
              <Route path="/checkout" exact component ={Checkout}/>
              <Route path="/burgerbuilder" exact component ={BurgerBuilder}/>
              <Redirect to="/burgerbuilder"/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
