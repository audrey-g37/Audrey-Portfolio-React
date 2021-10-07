import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "_replyto") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="page-todo">Contact</h1>
      <Form action="https://mailthis.to/audrey.gillies@gmail.com" method="POST">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Bob Smith"
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="form-label">Your Email:</Form.Label>
          <Form.Control
            type="email"
            name="_replyto"
            placeholder="name@example.com"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label className="form-label">Include a Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter message here..."
            value={message}
            onChange={handleInputChange}
            rows={3}
          />
        </Form.Group>
        <Button
          type="submit"
          onClick={handleSubmit}
          className="send-btn"
          size="lg"
        >
          Send Message
        </Button>
        <Form.Control type="hidden" name="_confirmation" value="Sent!" />
      </Form>
    </div>
  );
}
