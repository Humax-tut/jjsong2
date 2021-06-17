import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';
import Usermng from './pages/usermng';
import Usermng_View from './pages/usermng_view';
import NotFound from './pages/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/usermng" component={Usermng} />
        <Route path="/usermng_view" component={Usermng_View} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )