import React from "react";
import profile from "../../pages/assets/profile.png"

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function UserHeader() {
  return (
    <>
      
        <br></br>
        <img src={profile} alt="leavepic" /> 
        <span className="mask bg-gradient-default opacity-8" />

        
        <br></br>
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-6 text-black">Hello Sheikha Hanna!</h1>
              <p className="text-black mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks.
              </p>
              
            </Col>
          </Row>
        </Container>
      
    </>
  );
}

export default UserHeader;