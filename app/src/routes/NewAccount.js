import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 800px;
  flex-basis: 50%;
  padding: 40px;
`;

const RightSide = styled.div`
  display: table;
  background: rgba(0, 0, 0, 0.81) url(${require("../assets/books-background.jpeg")}) center;
  background-blend-mode: overlay;
  padding: 30px;
  position: relative;
  flex-basis: 50%;

  .right-side-text {
    color: #fff;
    position: relative;
    display: table-cell;
    vertical-align: bottom;
    text-align: right;
  }
`;

const NewAccount = () => (
    <div className="side-by-side">
        <LeftSide>
            <Container >
                <h1>Create new account</h1>
                <form>
                    <label className="form-label" htmlFor="ra">RA</label>
                    <Input id="ra" type="text"/>
                    <label className="form-label" htmlFor="email">Email</label>
                    <Input id="email" type="email"/>
                    <Button className="register-button" type="submit">Register</Button>
                    <Link className="link-space" to="/login">Already have a account? Login now</Link>
                </form>
            </Container>
        </LeftSide>
        <RightSide>
            <div className="right-side-text">
                <p>School System Management</p>
                <p>Created by GDDario</p>
            </div>
        </RightSide>
    </div>
);

export default NewAccount;