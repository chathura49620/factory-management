import './App.css';
import Sidebar from './components/SuperAdmin/sideNav/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicInfo from './pages/SuperAdmin/BasicInfo';
import UserRoles from './pages/SuperAdmin/UserRoles';
import UserList from './pages/SuperAdmin/UserList';
import Categories from './pages/SuperAdmin/Categories';
import ProductCodes from './pages/SuperAdmin/ProductCodes';
import MaterialCodes from './pages/SuperAdmin/MaterialCodes';


// import routes from './route'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/basic-info' exact component={BasicInfo} />
        <Route path='/user-roles' exact component={UserRoles} />
        <Route path='/user-list' exact component={UserList} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/product-codes' exact component={ProductCodes} />
        <Route path='/metirial-codes' exact component={MaterialCodes} />
      </Switch>
    </Router>
  );
}

export default App;
