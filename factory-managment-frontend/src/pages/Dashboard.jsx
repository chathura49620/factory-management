import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "../components/storeManager/sideNavigation/Sidebar";

//stock manager routers
import SMDashBoard from "./storeManager/sm_dashboard";
import NewItemForm from "../components/storeManager/forms/newitemform";
import ItemRecord from "./storeManager/itemsrecords";
import MyProfile from "./storeManager/myprofile";
import Item from "./storeManager/items";
import WastedItem from "./storeManager/wasteditems";
import ReturnedProduct from "./storeManager/returnedproducts";
import NewReturnedItemForm from "./../components/storeManager/forms/newreturneditemform";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superAdmin: false,
    };
    this.renderSideNavigation = this.renderSideNavigation.bind(this);
    this.renderDashboard = this.renderDashboard.bind(this);
  }

  renderSideNavigation() {
    const user_role = "stock member";
    const is_login = localStorage.getItem("is_login");
    if (is_login != "1") {
      return false;
    } else {
      if (user_role == "employee") {
        // return <EmpsideNav />;
      }
      if (user_role == "stock member") {
        return <Sidebar />;
      }
      if (user_role == "production team member") {
        // return <ProManagerNav />;
      }
      if (user_role == "Super Admin") {
        // return <SuperAdminSideNav />;
      } else {
        return false;
      }
    }
  }

  renderDashboard() {
    const user_role = "stock member";
    const is_login = localStorage.getItem("is_login");
    if (is_login != "1") {
      // return (
      //   <div>
      //     <Route path="/" exact component={login} />
      //   </div>
      // );
    } else {
      if (user_role == "employee") {
        return (
          // <div>
          //   <Route path="/" exact component={EmployeeDashboard} />
          //   <Route path="/assignments" exact component={Assignments} />
          //   <Route path="/calendar" exact component={Calendar} />
          //   <Route path="/profile" exact component={Profile} />
          //   <Route path="/payments" exact component={Payments} />
          //   <Route path="/leave" exact component={Leave} />
          // </div>
          null
        );
      }
      if (user_role == "Super Admin") {
        return (
          // <div>
          //   <Route path="/" exact component={SuperAdminDashboard} />
          //   <Route path="/basic-info" exact component={BasicInfo} />
          //   <Route path="/user-roles" exact component={UserRoles} />
          //   <Route path="/user-list" exact component={UserList} />
          //   <Route path="/categories" exact component={Categories} />
          //   <Route path="/product-codes" exact component={ProductCodes} />
          //   <Route path="/metirial-codes" exact component={MaterialCodes} />
          // </div>
          null
        );
      }
      if (user_role == "production team member") {
        return (
          // <div>
          //   <div>
          //     <Route
          //       path="/"
          //       exact
          //       component={ProductionManagerDashboard}
          //     ></Route>
          //     <Route
          //       path="/add-new-production-round"
          //       exact
          //       component={AddNewProductionRound}
          //     />
          //     <Route
          //       path="/view-production-rounds"
          //       exact
          //       component={VIewNewProductionRound}
          //     />
          //     <Route
          //       path="/view-product-list"
          //       exact
          //       component={ViewProductList}
          //     />
          //   </div>
          // </div>
          null
        );
      }
      if (user_role == "stock member") {
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
                path="/it/new/myItem/returned"
                exact
                component={NewReturnedItemForm}
              ></Route>
              <Route path="/items/:id" component={NewItemForm}></Route>
              <Route path="/it/new/wasted/item" component={WastedItem} />
              <Route
                path="/it/new/returned/product"
                component={ReturnedProduct}
              />
              <Route path="/items" component={Item}></Route>
              <Route path="/itemsrecords" component={ItemRecord}></Route>
              {/* <Route path="/notfound" component={NotFound}></Route> */}
            </div>
          </div>
        );
      } else {
        return false;
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderSideNavigation()}
        {this.renderDashboard()}
      </div>
    );
  }
}

export default Dashboard;
