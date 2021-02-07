import './App.css';
import NavbarComponent from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import AllPortfolio from './components/AllPortfolio/AllPortfolio'
import UserPortfolio from './components/UserPortfolio/UserPortfolio'
import Create from './components/UserPortfolio/Create/Create'
import Detail from './components/UserPortfolio/Detail/Detail'
import Edit from './components/UserPortfolio/Edit/Edit'

import UnPrivateRoute from './hocs/UnPrivateRoute'
import PrivateRoute from './hocs/PrivateRoute'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="route-body">
        <Route path="/" exact component={Home} />
        <Route path="/detail/:portfolio_id" exact component={Detail} />
        {/* filter by position */}
        <Route path="/all-portfolio/:position" component={AllPortfolio} />

        {/* Public */}
        
        <UnPrivateRoute path="/auth" exact component={Auth} />
        

        {/* Private */}
        <PrivateRoute path="/portfolio/:userId" component={UserPortfolio} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/edit/:portfolio_id" component={Edit} />
      </div>
    </Router>

  );
}

export default App;
