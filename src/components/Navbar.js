import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <IconContainer>
            <i class="fas fa-mobile-alt"></i>
          </IconContainer>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              SWAN STORE
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.7rem;
    text-transform: capitalize;
  }
`;

const IconContainer = styled.div`
  color: var(--mainYellow);
  font-size: 36px;
`;
