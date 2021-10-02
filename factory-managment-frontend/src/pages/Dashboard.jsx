import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SuperAdminSideNav from '../components/SuperAdmin/sideNav/Sidebar';
// import EmpsideNav from '../components/Employee/EmpsideNav/EmpSidebar';
// import ProManagerNav from '../components/ProductionManager/ProManagersideNav/EmpSidebar';
import FinanceTeamMemberSideNav from '../components/FinanceTeamMember/sideNav/Sidebar';

// import ProductionManagerDashboard from './ProductionManager/ProManagerDashboard'
 
// import Sidebar from "../components/storeManagerComponents/sideNavigation/Sidebar";
 

import SuperAdminDashboard from './SuperAdmin/Dashboard'
// import EmployeeDashboard from './Employee/EmployeeDashboard'
 
//super admin routers
import BasicInfo from './SuperAdmin/BasicInfo';
import UserRoles from './SuperAdmin/UserRoles';
import UserList from './SuperAdmin/UserList';
import Categories from './SuperAdmin/Categories';   
import ProductCodes from './SuperAdmin/ProductCodes';
import MaterialCodes from './SuperAdmin/MaterialCodes';
import  login  from './SuperAdmin/login';

import EmployeeSideNav from '../components/Employee/EmpsideNav/EmpSidebar';

// //employee routes
import EmployeeDashboard from './Employee/EmployeeDashboard';
import Assignments from './Employee/Assignments';
import Calendar from './Employee/Calendar';
import Leave from './Employee/Leave';
import Payments from './Employee/Payments';
import Profile from './Employee/Profile';



import Sidebar from "../components/storeManager/sideNavigation/Sidebar";

//stock manager routers
import SMDashBoard from "./storeManager/sm_dashboard";
import NewItemForm from "../components/storeManager/forms/newitemform";
import ItemRecord from "./storeManager/itemsrecords";
import MyProfile from "./storeManager/myprofile";
import Item from "./storeManager/items";
import WastedItem from "./storeManager/wasteditems";
import ReturnedProduct from "./storeManager/returnedproducts";
import NewReturnedProductForm from "./../components/storeManager/forms/newreturnedproductform";
import ItemRequest from "./storeManager/itemrequests";


//production manager routes
import AddNewProductionRound from "./ProductionManager/AddNewProductionRound";
import VIewNewProductionRound from "./ProductionManager/VIewNewProductionRound";
import ViewProductList from "./ProductionManager/ViewProductList";
import AddPreviousProductionRound from "./ProductionManager/AddPreviousProductionRound";
import VIewPreviousProductionRound from "./ProductionManager/VIewPreviousProductionRound";
import AddStockDetails from "./ProductionManager/AddStockDetails";
import ViewOrderDetails from "./ProductionManager/ViewOrderDetails";
import ViewFeedback from "./ProductionManager/ViewFeedback";

//wholesale buyer routes
import WholesaleDashboard from "./WholesaleBuyer/wholesalBuyerDashboard";
import FeedbackPage from "./WholesaleBuyer/FeedbackPage";
import ViewStockDetails from "./WholesaleBuyer/ViewStockDetails";
import ReturnOrder from "./WholesaleBuyer/ReturnOrder";
import ViewPlacedOrderDetails from "./WholesaleBuyer/ViewPlacedOrderDetails";
import AddOrder from "./WholesaleBuyer/AddOrder";


//finance team member routers
import BillType from "./FinanceTeamMember/BillType";
import FinancialAdminDashboard from "./FinanceTeamMember/Dashboard";
import Salaries from "./FinanceTeamMember/Salaries";
import Bills from "./FinanceTeamMember/Bills";
import MaterialCost from "./FinanceTeamMember/MaterialCost";
import SalesReports from "./FinanceTeamMember/SalesReports";
import Profit from "./FinanceTeamMember/Profit";

import ProManagerNav from "../components/ProductionManager/ProManagersideNav/EmpSidebar";
import WholesaleBuyerNav from "../components/WholeSaleBuyer/wholesaleBuyerSideNav/EmpSidebar";

import ProductionManagerDashboard from "./ProductionManager/ProManagerDashboard";

class Dashboard extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            superAdmin: false
        }
        this.renderSideNavigation = this.renderSideNavigation.bind(this);
        this.renderDashboard = this.renderDashboard.bind(this);
    }

    renderSideNavigation(){
        const user_role = localStorage.getItem('user_role');
        const is_login = localStorage.getItem('is_login');
        if(is_login != '1'){
                return false;
        }else{
            if(user_role == 'employee'){
                return (
                    <EmployeeSideNav />
                );
            }
            if(user_role == 'stock member'){
                return (
                    <Sidebar />
                );
            }
            if(user_role == 'production team member'){
                return (
                    <ProManagerNav />
                );
            }
            if(user_role == 'Super Admin'){
                return (
                    <SuperAdminSideNav/> 
                );
            }
            if(user_role == 'finance team member'){
                return (
                    <FinanceTeamMemberSideNav/>   
                );
            }
            if(user_role == 'Whole Sale Buyer'){
                return (
                    <WholesaleBuyerNav/>   
                );
            }
            else{
                return false;
            }
        }
    }



    renderDashboard(){
        const user_role = localStorage.getItem('user_role')
        const is_login = localStorage.getItem('is_login')
        if(is_login != '1'){
            return (
                <div>
                    <Route path= '/' exact component={login} />
                </div>
            );
        }else{
            if(user_role == 'employee'){
                return (
                    <div>
                        <Route path="/myprofile" component={MyProfile}></Route>
                        <Route path= '/' exact component={EmployeeDashboard} />
                        <Route path= '/assignments' exact component={Assignments}/>
                        <Route path="/calendar" exact component={Calendar}/>
                        <Route path= '/profile' exact component={Profile}/>
                        <Route path= '/payments' exact component={Payments}/>
                        <Route path= '/leave' exact component={Leave}/>
                    </div>
                );
            }
            if(user_role == 'Super Admin'){
                return (
                    <div>
                        <Route path="/myprofile" component={MyProfile}></Route>
                        <Route path='/' exact component={SuperAdminDashboard} />
                        <Route path='/basic-info' exact component={BasicInfo} />
                        <Route path='/user-roles' exact component={UserRoles} />
                        <Route path='/user-list' exact component={UserList} />
                        <Route path='/categories' exact component={Categories} />
                        <Route path='/product-codes' exact component={ProductCodes} />
                        <Route path='/metirial-codes' exact component={MaterialCodes} />
                    </div>
                );
                }
                if(user_role == 'finance team member'){
                    return (
                        <div>
                            <Route path="/myprofile" component={MyProfile}></Route>
                            <Route path='/' exact component={FinancialAdminDashboard} />
                            <Route path='/salaries' exact component={Salaries} />
                            <Route path='/sales-reports' exact component={SalesReports} />
                            <Route path='/profits' exact component={Profit} />
                            <Route path='/material-cost' exact component={MaterialCost} />
                            <Route path='/bill-types' exact component={BillType} />
                            <Route path='/bills' exact component={Bills} />
                           
                        </div>
                    ); 
                }
                if(user_role == 'production team member'){
                return (
                    <div>
                        <div>
                        <Route path="/myprofile" component={MyProfile}></Route>
                        <Route path="/" exact component={ProductionManagerDashboard} />
                        <Route
                            path="/add-new-production-round"
                            exact
                            component={AddNewProductionRound}
                        />
                        <Route
                            path="/view-production-rounds"
                            exact
                            component={VIewNewProductionRound}
                        />
                        <Route
                            path="/add-pre-production-round"
                            exact
                            component={AddPreviousProductionRound}
                        />
                        <Route
                            path="/view-preproduction-rounds"
                            exact
                            component={VIewPreviousProductionRound}
                        />
                        <Route
                            path="/view-product-list"
                            exact
                            component={ViewProductList}
                        />
                        <Route
                            path="/add-stock-details"
                            exact
                            component={AddStockDetails}
                        />
                        <Route
                            path="/view-order-details"
                            exact
                            component={ViewOrderDetails}
                        />
                        <Route path="/view-feedback" exact component={ViewFeedback} />
                        </div>
                    </div>
                );
            }if(user_role == 'stock member'){
                return (
                    <div>
                        <div>
                        <Route path="/" exact component={SMDashBoard}></Route>
                        <Route path="/myprofile" component={MyProfile}></Route>
                        <Route
                            path="/it/new/myItem"
                            exact
                            component={NewItemForm}
                        ></Route>
                        <Route
                            path="/it/new/product/returned"
                            exact
                            component={NewReturnedProductForm}
                        ></Route>
                        <Route path="/items/:id" component={NewItemForm}></Route>
                        <Route path="/it/new/wasted/item" component={WastedItem} />
                        <Route
                            path="/it/new/returned/product"
                            component={ReturnedProduct}
                        />
                        <Route path="/requests/for/items" component={ItemRequest}></Route>
                        <Route path="/items" component={Item}></Route>
                        <Route path="/itemsrecords" component={ItemRecord}></Route>
                        </div>
                    </div>
                );
            }if(user_role == 'Whole Sale Buyer'){
                return (
                    <div>
                        <div>
                        <Route path="/myprofile" component={MyProfile}></Route>
                        <Route path= '/' exact component={ProductionManagerDashboard}/>
                        <Route path="/" exact component={WholesaleDashboard} />
                        <Route path="/add-order" exact component={ViewStockDetails} />
                        <Route path="/add-order-details" exact component={AddOrder} />
                        <Route path="/add-feedback" exact component={FeedbackPage} />
                        <Route path="/return-order" exact component={ReturnOrder} />
                        <Route
                            path="/placed-order"
                            exact
                            component={ViewPlacedOrderDetails}
                        />
                        </div>
                    </div>
                );
            }
            else{
                return false;
            }
        }
    }

    render(){
       return(
           <div>
                 {this.renderSideNavigation()}
                 {this.renderDashboard()}
           </div> 
       );
    }
}

export default Dashboard;
