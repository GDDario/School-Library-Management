import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
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

const Login = () => (
    <div className="side-by-side">
        <LeftSide>
            <Container>
                <h1>Welcome</h1>
                <p>Insert your access data to enter</p>
                <form>
                    <label className="form-label" htmlFor="email">Email</label>
                    <Input type="email"/>
                    <label className="form-label" htmlFor="password">Password</label>
                    <Input type="password"/>
                    <div className="login-options">
                        <Checkbox textString="Keep conected"/>
                        <Link className="forgot-password" to="/">Forgot password</Link>
                    </div>
                    <Button type="submit">Login</Button>
                    <Link className="link-space" to="/newAccount">Don't have a account? Register now</Link>
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

export default Login;