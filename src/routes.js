import React from 'react';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';
import Usermng from './pages/usermng';
import Usermng_View from './pages/usermng_view';
import NotFound from './pages/404';
import { Route, Switch, Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/usermng" component={Usermng} />
          <Route path="/usermng_view" component={Usermng_View} />
          <Route component={NotFound} />
        </Switch>
    );
  }
}


const mapStateToProps = ({ settings, auth }) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, {  })(App));;
