import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../features/counter/counterSlice";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuid(),
      name: name,
      email: email,
    };
    console.log(newUser);
    // Use the newUser object as needed, such as dispatching an action to update the state
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div style={{ backgroundColor: "orange", color: "white" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUserForm;

// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// export class AddUserForm extends Component {
//   constructor(props) {
//     const dispatch = useDispatch;
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       gen: "",
//     };
//   }

//   handleChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addUser(this.state);
//     console.log("form submit", this.state);
//     this.setState({
//       name: "",
//       email: "",
//       gen: "",
//     });
//   };

//   render() {
//     return (
//       <div style={{ backgroundColor: "orange", color: "white" }}>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicName">
//             <Form.Label>Name:</Form.Label>
//             <Form.Control
//               type="name"
//               placeholder="Enter name"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <Form.Text className="text-muted"></Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email Adress:</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicGen">
//             <Form.Label>Gen:</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Gen"
//               name="gen"
//               value={this.state.gen}
//               onChange={this.handleChange}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default AddUserForm;
