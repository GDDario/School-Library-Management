import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { IoSendSharp } from "react-icons/io5";

const Contact = () => (
  <>
    <Container divided>
      <div className="contact-container">
        <h2>Need a help or have a suggestion? Send us a message!</h2>

        <form action="" method="POST">
          <select>
            <option>Topic</option>
            <option>Help</option>
            <option>Suggestion</option>
          </select>
          <textarea rows="10" />
          <Button>
            Send <IoSendSharp />
          </Button>
        </form>
      </div>
    </Container>
  </>
);

export default Contact;
