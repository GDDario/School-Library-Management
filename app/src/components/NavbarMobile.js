import React from "react";
import {BiMenu} from "react-icons/bi";
import styled from "styled-components";
import GreetingMenu from "./GreetingMenu";
import {FaCaretDown, FaFilter, FaSearch} from "react-icons/fa";

const NavbarMobileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  background: #271815;
  color: #FFFFFF;

  svg {
    font-size: 36px;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  min-width: 400px;
  height: 40px;
  border-bottom: 1px solid #271815;

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
        <button><FaSearch/></button>
    </SearchFieldWrapper>
);

const SearchBar = () => (
    <SearchBarWrapper>
        <button>
            <FaFilter/>
            <span>Title</span>
        </button>
        <SearchField/>
    </SearchBarWrapper>
);

const NavbarMobile = () => (
    <>
        <NavbarMobileTop>
            <BiMenu/>
            <p>Logo</p>
            <GreetingMenu>
                <span>Good morning, User!</span>
                <FaCaretDown/>
            </GreetingMenu>
        </NavbarMobileTop>
            <SearchBar/>
    </>
);

export default NavbarMobile;