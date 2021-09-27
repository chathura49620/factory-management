import React, { Component } from "react";
import axios from 'axios';


class Profile extends Component {

  state = {
    Profile: [],
    empProfile:{}, 
    id: ""
  };


  componentDidMount()  {

    axios
      .get("http://localhost:5000/api/profile-details")
      .then((result) => {
        const Profile = result.data;
        console.log(Profile);

        this.setState({ Profile: Profile });
      })
      .catch((err) => console.log(err.message));
  }

  setNewDetails = (profile) => {
    this.setState({ empProfile: profile});
  }

  handlePaymentsDelete = (profile) => {
    // console.log("Delete");
    const Profile = this.state.Profile.filter(l => l._id !== profile._id );
    this.setState({Profile:Profile});
  }



  render(){
    
  return (
    <React.Fragment>

     <p>Hello Sheikha</p>
        
      

      </React.Fragment>
  
  );
  }
};

export default Profile;
