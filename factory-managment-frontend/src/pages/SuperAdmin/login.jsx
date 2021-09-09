import React, { Component } from "react";
import axios from "axios";
import img1 from './fac1.jpeg'
import img2 from './signIn1.webp'


class login extends Component {
  constructor(props) {
    super(props);   
    this.state = {
        users: [], addModalShow: false
    }
    this.login = this.login.bind(this);
}

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/login")
      .then((result) => {
        const user = result.data;
        
        this.setState({ users: user });
        // console.log(this.state.users.length);
      })
      .catch((err) => console.log(err.message));

      
  
  }
 
  login (event) {
    this.state.users.forEach(element => {
        if(element.email == event.target.email.value){
            const password = element.password;
            if(password == event.target.password.value){
                const user_role = element.userRole;
                localStorage.setItem('user_role', user_role);
                const user_full_name = element.fullName;
                localStorage.setItem('user_full_name', user_full_name);
                localStorage.setItem('user_email', element.email);
                localStorage.setItem('is_login', "1");
              //   if(user_role == 'Super Admin'){
              //       this.props.history.push('/super-admin-dashboard');
              //       window.location.reload();
              //   }
              //   if(user_role == 'employee'){
              //       this.props.history.push('/employee-dashboard');
              //       window.location.reload();
              //   }
              //   if(user_role == 'production team member'){
              //     this.props.history.push('/production-manager-dashboard');
              //     window.location.reload();
              // }
                
            }
        }
    });
  }


  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
            <div className="col-md-4">
            <img src={img1} alt="img1" />
            </div>
            <div className="col-md-4">
            <form  onSubmit={this.login} style={{ marginTop:"150px"}}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter password" required />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button style={{ backgroundColor: "#7121AD", color: "white" ,width:"330px"}} type="submit" className="btn btn-primary btn-block">Log In</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                </form>
            </div>
            <div className="col-md-4">
            <img src={img2} alt="img1" style={{marginTop:"450px"}}/>
            </div>
        </div>
      </React.Fragment>
    );
  }
};

export default  login;
