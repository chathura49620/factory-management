import "./App.css";
// import login from "./pages/SuperAdmin/login";

import EmployeeDashboard from "./pages/Employee/EmployeeDashboard";
import Assignments from "./pages/Employee/Assignments";
import Calendar from "./pages/Employee/Calendar";
import Leave from "./pages/Employee/Leave";
import Payments from "./pages/Employee/Payments";
import Profile from "./pages/Employee/Profile";

// import Dashboard from "./pages/Dashboard";
// import SuperAdminSideNav from './components/SuperAdmin/sideNav/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeeSideNav from './components/Employee/EmpsideNav/EmpSidebar';

function App() {
  return (
    <Router>
            <EmployeeSideNav />
            {/* <NavBar /> */}
    <main className="container">
      <Switch>
          {/* <Route path='/super-admin-dashboard' exact component={SuperAdminDashboard} />
          <Route path='/basic-info' exact component={BasicInfo} />
          <Route path='/user-roles' exact component={UserRoles} />
          <Route path='/user-list' exact component={UserList} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/product-codes' exact component={ProductCodes} />
          <Route path='/metirial-codes' exact component={MaterialCodes} /> */}
          {/* <Route path="/smdashboard" component={SMDashBoard}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/items/:id" component={NewItemForm}></Route>
          <Route path="/items" component={Item}></Route>
          <Route path="/itemsrecords" component={ItemRecord}></Route>
          <Route path="/notfound" component={NotFound}></Route> */}

          //employee routes
          <Route path= '/employee-dashboard' exact component={EmployeeDashboard} />
          <Route path= '/assignments' exact component={Assignments}/>
          <Route path= '/calendar' exact component={Calendar}/>
          <Route path= '/profile' exact component={Profile}/>
          <Route path= '/payments' exact component={Payments}/>
          <Route path= '/leave' exact component={Leave}/>
         
       

           {/* <Redirect to="/notfound"></Redirect> */}
         </Switch>
       </main>
     </Router>
  );
}

export default App;
