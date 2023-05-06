import React from "react";
import styled from "styled-components";

const GreetingMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  z-index: 1000;

  span {
    margin-right: 5px;
  }

  svg {
    font-size: 20px;
  }

  .hide {
    display: none;
  }

  nav {
    position: absolute;
    bottom: -94px;
    left: 0;
    width: 230px;
    border: 1px solid #271815;
    border-radius: 2px 2px 6px 6px;
    background: #271815;
    padding-bottom: 10px;
  }

  li {
    display: flex;
    justify-content: left;
    align-items: center;
    list-style: none;
    padding: 5px;
    color: #FFFFFF;

    svg {
      margin-right: 6px;
    }
  }
  
  li:hover {
    color: #3E2723;
    background: #FFFFFF;
  }
  
  a {
    text-decoration: none;
  }
`;


const GreetingMenu = ({children, onClick}) => {
    return (
        <GreetingMenuWrapper onClick={onClick}>
            {children}
        </GreetingMenuWrapper>
    )
};

export default GreetingMenu;