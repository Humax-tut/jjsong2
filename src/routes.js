import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';
import Usermng from './pages/usermng';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/usermng" component={Usermng} />
      <Route exact path="/" component={Login} />
    </Router>
  )