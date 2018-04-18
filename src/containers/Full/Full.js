import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';
// Base
import Tables from '../../views/Base/Dashboard/';
import Login from '../../views/Pages/Login/';

// Icons
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';
// Notifications


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb/>
            <Container fluid>
              <Switch>
                <Route path="/base/dashboard" name="Dashboard" component={Tables}/>
                 <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                 <Redirect from="/" to="/login"/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;
