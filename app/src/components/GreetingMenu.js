import {FaCaretDown} from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const GreetingMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  span {
    margin-right: 5px;
  }

  svg {
    font-size: 20px;
  }
`;


const GreetingMenu = () => (
    <GreetingMenuWrapper>
        <span>Good morning, User!</span>
        <FaCaretDown/>
    </GreetingMenuWrapper>
);

export default GreetingMenu;