import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.81) url("../assets/books-background.jpeg") center;
  background-blend-mode: overlay;
  padding: 30px;
  color: #FFFFFF;
  
  .default-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }
  .default-info p:last-of-type {
    margin-top: 4px;
    font-size: 14px;
  }
`;

const Footer = () => (
    <FooterContainer>
        <div className="site-map">

        </div>
        <div className="default-info">
            <p>School System Management</p>
            <p>Created by GDDario</p>
        </div>
    </FooterContainer>
);

export default Footer;