import React, { useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

class SubMenu extends Component {
  state = {
    subnav: false,
    selected: "",
  };
  //const [subnav, setSubnav] = useState(false);

  //const showSubnav = () => setSubnav(!subnav);

  componentDidMount() {
    this.setState({ selected: this.props.selected });
  }

  showSubnav = (title) => {
    if (this.props.item.subNav) {
      this.setState({ subnav: !this.state.subnav });
    }
    this.props.setChangeColor(title);
  };

  render() {
    const { selected } = this.state;
    console.log(this.props.selected);
    return (
      <>
        <SidebarLink
          to={this.props.item.path}
          onClick={() => this.showSubnav(this.props.item.title)}
          style={{
            backgroundColor:
              this.props.item.title === this.props.selected
                ? "#252831"
                : "#15171c",
            borderLeft:
              this.props.item.title === this.props.selected
                ? "4px solid #C67405"
                : "",
          }}
        >
          <div>
            {this.props.item.icon}
            <SidebarLabel>{this.props.item.title}</SidebarLabel>
          </div>
          <div>
            {this.props.item.subNav && this.state.subnav
              ? this.props.item.iconOpened
              : this.props.item.subNav
              ? this.props.item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {this.state.subnav &&
          this.props.item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </>
    );
  }
}

export default SubMenu;
