import "./App.css";
import React, { Component } from "react";
import NavBar from "./storeManagerComponents/navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Item from "./storeManagerComponents/items";
import { Redirect } from "react-router-dom";
import NotFound from "./storeManagerComponents/notfound";
import SMDashBoard from "./storeManagerComponents/sm_dashboard";
import NewItemForm from "./storeManagerComponents/newitemform";
import ItemRecord from "./storeManagerComponents/itemsrecords";
import MyProfile from "./storeManagerComponents/myprofile";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/smdashboard" component={SMDashBoard}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/items/:id" component={NewItemForm}></Route>
          <Route path="/items" component={Item}></Route>
          <Route path="/itemsrecords" component={ItemRecord}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" exact to="/smdashboard"></Redirect>
          <Redirect to="/notfound"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
