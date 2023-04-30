import React from "react";
import styled from "styled-components";
import {FaFilter, FaSearch, FaCaretDown} from "react-icons/fa";
import {Link} from "react-router-dom";
import GreetingMenu from "./GreetingMenu";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  background-color: #271815;
  color: #FFFFFF;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  width: 25%;
  min-width: 400px;
  height: 30px;
  border-radius: 2px;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-right: 1px solid #271815;
    height: 100%;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
  }
  
  span {
    margin-left: 5px;
  }
`;

const SearchFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  
  input {
    height: 100%;
    border: none;
    width: 100%;
    padding: 0 5px;
    font-size: 16px;
  }
`;

const SearchField = () => (
    <SearchFieldWrapper>
        <input type="text"/>
        <button><FaSearch /></button>
    </SearchFieldWrapper>
);

const SearchBar = () => (
    <SearchBarWrapper>
        <button>
            <FaFilter/>
            <span>Title</span>
        </button>
        <SearchField />
    </SearchBarWrapper>
);

const NavigationLinks = styled.div`
  a {
    margin: 0 12px;
    text-decoration: none;
    font-size: 20px;
    color: #FFFFFF;
  }
`;

const Navbar = () => (
    <NavbarWrapper>
        <span>Logo</span>
        <SearchBar />
        <NavigationLinks>
            <Link to="/">Home</Link>
            <Link to="/">Library</Link>
            <Link to="/">Contact</Link>
        </NavigationLinks>
        <GreetingMenu>
            <span>Good morning, User!</span>
            <FaCaretDown />
        </GreetingMenu>
    </NavbarWrapper>
);

export default Navbar;