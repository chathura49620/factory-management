
import "./App.css";
import SuperAdminSideNav from "./components/SuperAdmin/sideNav/Sidebar";
import Sidebar from "./components/storeManagerComponents/sideNavigation/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicInfo from "./pages/SuperAdmin/BasicInfo";
import UserRoles from "./pages/SuperAdmin/UserRoles";
import UserList from "./pages/SuperAdmin/UserList";
import Categories from "./pages/SuperAdmin/Categories";
import ProductCodes from "./pages/SuperAdmin/ProductCodes";
import MaterialCodes from "./pages/SuperAdmin/MaterialCodes";
import NotFound from "./components/storeManagerComponents/notfound";


import './App.css';
import login from './pages/SuperAdmin/login';


//import EmployeeDashboard from './pages/Employee/EmployeeDashboard';





// import routes from './route'
// import NotFound from "./components/storeManagerComponents/notfound";

import SMDashBoard from "./components/storeManagerComponents/sm_dashboard";
import NewItemForm from "./components/storeManagerComponents/newitemform";
import ItemRecord from "./components/storeManagerComponents/itemsrecords";
import MyProfile from "./components/storeManagerComponents/myprofile";
import NavBar from "./components/storeManagerComponents/navbar";
import Item from "./components/storeManagerComponents/items";

//import EmployeeDashboard from "./pages/Employee/EmployeeDashboard";
import Assignments from "./pages/Employee/Assignments";
import Calendar from "./pages/Employee/Calendar";
import Profile from "./pages/Employee/Profile";
import Payments from "./pages/Employee/Payments";
import Leave from "./pages/Employee/Leave";



import Dashboard from "./pages/Dashboard";



import AddNewProductionRound from "./pages/ProductionManager/AddNewProductionRound";
import VIewNewProductionRound from "./pages/ProductionManager/VIewNewProductionRound";


function App() {
  return (
      <Dashboard />
   );
  

}

export default App;
