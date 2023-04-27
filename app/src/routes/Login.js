import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import {Link} from "react-router-dom";
import Button from "../components/Button";

const Login = () => (
    <div className="side-by-side">
        <div className="left-side">
            <Container >
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
        </div>
        <div className="right-side">
            <div className="right-side-text">
                <p>School System Management</p>
                <p>Created by GDDario</p>
            </div>
        </div>
    </div>
);

export default Login;