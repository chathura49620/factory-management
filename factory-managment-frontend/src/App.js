import './App.css';
import login from './pages/SuperAdmin/login';
import Modal from 'react-modal';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import Assignments from './pages/Employee/Assignments';
import Calendar from './pages/Employee/Calendar';
import Leave from './pages/Employee/Leave';
import Payments from './pages/Employee/Payments';
import Profile from './pages/Employee/Profile';
import SMDashBoard from "./components/storeManagerComponents/sm_dashboard";
import NewItemForm from "./components/storeManagerComponents/newitemform";
import ItemRecord from "./components/storeManagerComponents/itemsrecords";
import MyProfile from "./components/storeManagerComponents/myprofile";
import NavBar from "./components/storeManagerComponents/navbar";
import Item from "./components/storeManagerComponents/items";
import Dashboard from "./pages/Dashboard";
import SuperAdminSideNav from './components/SuperAdmin/sideNav/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeSideNav from './components/Employee/EmpsideNav/EmpSidebar';


Modal.setAppElement('#root')

function App() {
  return (
    <Router>
            <EmployeeSideNav />

    <main className="container">
      <Switch>
         
          <Route path="/smdashboard" component={SMDashBoard}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/items/:id" component={NewItemForm}></Route>
          <Route path="/items" component={Item}></Route>
          <Route path="/itemsrecords" component={ItemRecord}></Route>
        

          //employee routes
          <Route path= '/employee-dashboard' exact component={EmployeeDashboard} />
          <Route path= '/assignments' exact component={Assignments}/>
          <Route path="/calendar" exact component={Calendar}/>
          <Route path= '/profile' exact component={Profile}/>
          <Route path= '/payments' exact component={Payments}/>
          <Route path= '/leave' exact component={Leave}/>
          
         </Switch>
       </main>
     </Router>
  );
}

export default App;
