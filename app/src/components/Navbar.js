import React, {useState} from "react";
import styled from "styled-components";
import {FaFilter, FaSearch, FaCaretDown} from "react-icons/fa";
import {CgProfile, CgDatabase, CgLogOut} from "react-icons/cg";
import {Link} from "react-router-dom";
import GreetingMenu from "./GreetingMenu";

// Will be received from the API
let categories = ["Title", "Author", "Subject"];

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  background-color: #271815;
  color: #FFFFFF;

  .logo {
    color: #FFFFFF;
    text-decoration: none;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  width: 25%;
  min-width: 400px;
  height: 30px;
  border-radius: 2px;
  z-index: 999;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    border-right: 1px solid #271815;
    height: 100%;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
  }

  .button-filter {
    width: 110px;
  }

  span {
    margin-left: 5px;
  }

  nav {
    position: absolute;
    bottom: -110px;
    left: 0;
    width: 110px;
    border: 1px solid #271815;
    border-radius: 2px;
    background: #FFFFFF;
  }

  .hide {
    display: none;
  }

  ul {
    list-style: none;
    color: #000000;
  }

  li {
    cursor: pointer;
    padding: 5px;
  }

  li:hover {
    background: #3E2723;
    color: #FFFFFF;
  }

  li:not(:first-of-type) {
    padding-top: 10px;
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

const SearchBar = () => {
    const [visible, setVisible] = useState(false);
    const [category, setCategory] = useState(categories[0]);
    const handleFilterClick = () => {
        setVisible(!visible);
    }
    const chooseCategory = (category) => {
        setVisible(!visible);
        setCategory(category);
    };

    const SearchField = () => {
        const [text, setText] = React.useState("");

        return (
            <SearchFieldWrapper>
                <input type="text" value={text} onChange={event => setText(event.target.value)}/>
                <Link to={`/search/${category.toLowerCase()}/${text}`}>
                    <button><FaSearch/></button>
                </Link>
            </SearchFieldWrapper>
        )
    };

    return (
        <SearchBarWrapper>
            <button className="button-filter" onClick={handleFilterClick}>
                <FaFilter/>
                <span>{category}</span>
            </button>
            <nav className={!visible ? 'hide' : ''}>
                <ul>
                    {categories.map(category => (<li onClick={() => chooseCategory(category)}>{category}</li>))}
                </ul>
            </nav>
            <SearchField/>
        </SearchBarWrapper>
    )
};

const NavigationLinks = styled.div`
  a {
    margin: 0 12px;
    text-decoration: none;
    font-size: 20px;
    color: #FFFFFF;
  }
`;

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const handleGreetingClick = () => {
        setVisible(!visible);
    }

    return (
        <NavbarWrapper>
            <Link className="logo" to="/">Logo</Link>
            <SearchBar/>
            <NavigationLinks>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </NavigationLinks>
            <GreetingMenu onClick={handleGreetingClick}>
                <span>Good morning, User!</span>
                <FaCaretDown/>
                <nav className={!visible ? 'hide' : ''}>
                    <ul>
                        <Link to="/profile"><li><CgProfile/>Profile</li></Link>
                        <Link to="/logout"><li><CgLogOut />Logout</li></Link>
                    </ul>
                </nav>
            </GreetingMenu>
        </NavbarWrapper>
    )
};

export default Navbar;
