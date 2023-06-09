import React from "react";
import { Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function User() {
  const state = useSelector((state) => {
    return state.usersReducer;
  });
  console.log(state, "hu");

  return (
    <div>
      {state.users.map((user) => {
        return (
          <div>
            <Col md="3" style={{ color: "white" }}>
              <Card style={{ width: "13rem", backgroundColor: "orange" }}>
                <Card.Body>
                  <Card.Title>REGISTRATION</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    User Info
                  </Card.Subtitle>
                  <Card.Text>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email} </p>
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        );
      })}
    </div>
  );
}
