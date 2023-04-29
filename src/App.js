import logo from "./logo.svg";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Component/Users";
import AddUserForm from "./Component/AddUserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "baba kojo",
          email: "baba@gmail.com",
          gen: 10,
        },
        {
          name: "tunde kwesi",
          email: "tunde@gmail.com",
          gen: 10,
        },
        {
          name: "kofi yaayi",
          email: "kofi@gmail.com",
          gen: 10,
        },
      ],
    };
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
