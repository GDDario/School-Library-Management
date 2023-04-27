import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #3E2723;
  color: #FFFFFF;
  padding: 15px 30px;
  border: 2px solid #3E2723;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 1px;
  
  &:hover {
    background: #FFFFFF;
    color: #3E2723;
  }
`;

export default Button;