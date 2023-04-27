import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import {Link} from "react-router-dom";
import Button from "../components/Button";

const NewAccount = () => (
    <div className="side-by-side">
        <div className="left-side">
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
        </div>
        <div className="right-side">
            <div className="right-side-text">
                <p>School System Management</p>
                <p>Created by GDDario</p>
            </div>
        </div>
    </div>
);

export default NewAccount;