import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCars } from "../redux/slices/carsSlice";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const cars = useSelector(selectCars);
  const [MenuBarOpen, setMenubarOpen] = useState(false);
  console.log(cars);
  return (
    <Container>
      <a>
        <svg
          className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="var(--tds-icon--fill, #171a20)"
          ></path>
        </svg>
      </a>

      <Menu>
        <li>
          {" "}
          <a href="#">Model S</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Model 3</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Model Y</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Solar panels</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Solar Roof</a>{" "}
        </li>
      </Menu>

      <LeftMenu>
        <li>
          {" "}
          <a href="#">Shop</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Account</a>{" "}
        </li>

        <p onClick={() => setMenubarOpen(true)}>Menu</p>
      </LeftMenu>
      <MenuBar show={MenuBarOpen}>
        <div className="cross" onClick={() => setMenubarOpen(false)}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
        <li>
          {" "}
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </MenuBar>
      {MenuBarOpen && <div className="blurEffect"></div>}
    </Container>
  );
}

export default Header;
const Container = styled.div`
  position: fixed;
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 2rem;
  z-index: 1;
  user-select: none;

  a {
    svg {
      width: 100px;
    }
  }
  .blurEffect {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 2s ease-out;
  }
`;
const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.4;
  font-weight: 800;

  li {
    padding: 5px 8px;
    border-radius: 15px;
    transition: background-color 0.2s ease-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
const LeftMenu = styled(Menu)`
  flex: 0.15;
`;
const MenuBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 12;
  list-style-type: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 0.4rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: -2px 2px 1px rgba(0, 0, 0, 0.05);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in 0.15s;

  .cross {
    text-align: right;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  li {
    flex: 1;
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #e9e9e9;
    }
    a {
      margin-left: 10px;
      font-weight: 600;
    }
  }
`;
