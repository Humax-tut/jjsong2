import React, { Component } from 'react';
import MainApp from './routes';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';


// authUser 정보를 확인하여 정보가 없으면 login 페이지로 이동~
const RestrictedRoute = ({ component: Component, callback: Callback, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (authUser) {
          return <Component />;
        }
        
        return <Callback />;
      }}
    />
  );
};

const GoToMainPage = () => {
  alert("로그인을 해야 접근 가능합니다.");
  return <Redirect to="/login" />;
};


class App extends Component {
  render() {
    
    // AutoCheck 로컬스토리지 불러오기
    const myObject = JSON.parse(localStorage.getItem("persist:root")).user;
    const authenticated = myObject !== null && myObject !== undefined && myObject !== "null" && myObject !== "undefined";
    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <RestrictedRoute callback={GoToMainPage} component={MainApp} authUser={authenticated} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
