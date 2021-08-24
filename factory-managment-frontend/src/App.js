
import './App.css';
import login from './pages/SuperAdmin/login';


import EmployeeDashboard from './pages/Employee/EmployeeDashboard';





// import routes from './route'
// import NotFound from "./components/storeManagerComponents/notfound";
import SMDashBoard from "./components/storeManagerComponents/sm_dashboard";
import NewItemForm from "./components/storeManagerComponents/newitemform";
import ItemRecord from "./components/storeManagerComponents/itemsrecords";
import MyProfile from "./components/storeManagerComponents/myprofile";
import NavBar from "./components/storeManagerComponents/navbar";
import Item from "./components/storeManagerComponents/items";
import Dashboard from "./pages/Dashboard";



import AddNewProductionRound from "./pages/ProductionManager/AddNewProductionRound";
import VIewNewProductionRound from "./pages/ProductionManager/VIewNewProductionRound";

function App() {
  return (
<<<<<<< HEAD
    <Router>
            <SuperAdminSideNav />
            {/* <NavBar /> */}
    <main className="container">
      <Switch>
          <Route path='/super-admin-dashboard' exact component={SuperAdminDashboard} />
          <Route path='/basic-info' exact component={BasicInfo} />
          <Route path='/user-roles' exact component={UserRoles} />
          <Route path='/user-list' exact component={UserList} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/product-codes' exact component={ProductCodes} />
          <Route path='/metirial-codes' exact component={MaterialCodes} />
          <Route path="/smdashboard" component={SMDashBoard}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/items/:id" component={NewItemForm}></Route>
          <Route path="/items" component={Item}></Route>
          <Route path="/itemsrecords" component={ItemRecord}></Route>
          {/* <Route path="/notfound" component={NotFound}></Route> */}

          //employee routes
          <Route path= '/employee-dashboard' exact component={EmployeeDashboard} />
          <Route path= '/assignments' exact component={Assignments}/>
          <Route path= '/calendar' exact component={Calendar}/>
          <Route path= '/profile' exact component={Profile}/>
          <Route path= '/payments' exact component={Payments}/>
          <Route path= '/leave' exact component={Leave}/>
=======


      <Dashboard />
    // <Router>
    //         <SuperAdminSideNav />
    //         {/* <NavBar /> */}
    // <main className="container">
    //   <Switch>
    //       <Route path='/login' exact component={login} />
    //       <Route path='/super-admin-dashboard' exact component={SuperAdminDashboard} />
    //       <Route path='/basic-info' exact component={BasicInfo} />
    //       <Route path='/user-roles' exact component={UserRoles} />
    //       <Route path='/user-list' exact component={UserList} />
    //       <Route path='/categories' exact component={Categories} />
    //       <Route path='/product-codes' exact component={ProductCodes} />
    //       <Route path='/metirial-codes' exact component={MaterialCodes} />
    //       <Route path="/smdashboard" component={SMDashBoard}></Route>
    //       <Route path="/myprofile" component={MyProfile}></Route>
    //       <Route path="/items/:id" component={NewItemForm}></Route>
    //       <Route path="/items" component={Item}></Route>
    //       <Route path="/itemsrecords" component={ItemRecord}></Route>
    //       {/* <Route path="/notfound" component={NotFound}></Route> */}

    //       {/* employee routes */}
    //       <Route path= '/employee-dashboard' exact component={EmployeeDashboard} />
    //       <Route path= '/assignments' exact component={Assignments}/>
    //       <Route path= '/calendar' exact component={Calendar}/>
    //       <Route path= '/profile' exact component={Profile}/>
    //       <Route path= '/payments' exact component={Payments}/>

    //       <Route path= '/leave' exact component={Leave}/>


    //       {/* production manager routers */}
    //       {/* <Route path= '/add-new-production-round' exact component={AddNewProductionRound} />
    //       <Route path= '/view-production-rounds' exact component={VIewNewProductionRound}/> */}



>>>>>>> ac31f3102674b83ea50610c76ee18218a901b208
         
       

    //       {/* <Redirect to="/notfound"></Redirect> */}
    //     </Switch>
    //   </main>
    // </Router>
  );
}

export default App;
