import React, { useState, Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  @media only screen and (max-width: 600px) {
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  }
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

class Sidebar extends Component {
  state = {
    sidebar: false,
    selectedNav: "Dashboard",
  };
  showBar = () => {
    this.setState({ sidebar: true });
  };

  handleSideBarChange = (title) => {
    console.log("sidebar wena patak", title);
    this.setState({ selectedNav: title });
  };
  //const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);
  render() {
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={this.showBar} />
            </NavIcon>
          </Nav>
          <SidebarNav sidebar={this.sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={this.showBar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu
                    item={item}
                    key={index}
                    selected={this.state.selectedNav}
                    setChangeColor={this.handleSideBarChange}
                  />
                );
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    );
  }
}

export default Sidebar;
