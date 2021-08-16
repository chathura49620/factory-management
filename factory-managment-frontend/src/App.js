import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Item from "./components/items";
import { Redirect } from "react-router-dom";
import NotFound from "./components/notfound";
import SMDashBoard from "./components/sm_dashboard";
import NewItemForm from "./components/newitemform";
import ItemRecord from "./components/itemsrecords";
import MyProfile from "./components/myprofile";

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
