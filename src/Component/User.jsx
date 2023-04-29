import React from "react";
import { Card, Col } from "react-bootstrap";

const User = (props) => {
  return (
    <Col md="3" style={{ color: "white" }}>
      <Card style={{ width: "13rem", backgroundColor: "orange" }}>
        <Card.Body>
          <Card.Title>REGISTRATION</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">User Info</Card.Subtitle>
          <Card.Text>
            <p>Name: {props.userInfo.name}</p>
            <p>Email:{props.userInfo.email}</p>
            <p>Gen: {props.userInfo.gen}</p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
