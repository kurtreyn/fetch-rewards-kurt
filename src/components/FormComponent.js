import React, { useState } from 'react';

import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Control,
  Card,
  Label,
} from 'react-bootstrap';

export default function FormComponent() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('Enter full name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [occupation, setOccupation] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    occupation: false,
    state: false,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log('Current state is:' + JSON.stringify(this.state));
    alert('Current state is:' + JSON.stringify(this.state));
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  async function fetchForm(e) {
    e.preventDefault();
    fetch(`https://frontend-take-home.fetchrewards.com/form`, {
      method: 'GET',
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data) {
          const occupations = data.occupations.map((occupation) => {
            return `<option>${occupation}</option>`;
          });
          document
            .querySelector('#occupations')
            .insertAdjacentHTML('afterbegin', occupations);

          const stateArray = data.states;
          const states = stateArray.map((state) => {
            return `<option>${state.name}</option>`;
          });
          document
            .querySelector('#states')
            .insertAdjacentHTML('afterbegin', states);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const url = `https://frontend-take-home.fetchrewards.com/form`;
  const formElement = document.querySelector('.form');

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(formElement);
    const formDataSerialized = Object.fromEntries(formData);
    console.log(formDataSerialized, 'formDataSerialized');
    const jsonObject = {
      ...formDataSerialized,
    };
    const response = await fetch(
      `https://frontend-take-home.fetchrewards.com/form`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          occupation: occupation,
          state: state,
        }),
      }
    )
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        if (data.status === 200) {
          setName('');
          setEmail('');
          setPassword('');
          setOccupation('');
          setState('');
          alert('Thank you for your submission');
        } else {
          setMessage('Submission was unsuccessful');
          alert('Submission was unsuccessful');
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  }
  // const renders = () => {
  //   const errors = validate(
  //     state.name,
  //     state.email,
  //     state.password,
  //     state.occupation,
  //     state.state
  //   );
  // };
  const validate = (name, email, password, occupation, state) => {
    const errors = {
      name: '',
      email: '',
      password: '',
      occupation: '',
      state: '',
    };
    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters.';
      }
    }
    const reg = /^\d+$/;
    if (this.state.touched.email && !email.includes('@')) {
      errors.email = 'Email should contain an @ symbol.';
    }
    if (this.state.touched.password) {
      if (password.length < 2) {
        errors.password = 'Password must be at least 6 characters.';
      }
    }
    if (this.state.touched.occupation) {
      if (occupation === 'Select Occupation') {
        errors.occupation = 'Must select an occupation from the list';
      }
    }
    if (this.state.touched.state) {
      if (state === 'Select state') {
        errors.state = 'Must select an state from the list';
      }
    }
    return errors;
  };

  const handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  const handleInputChange = (e) => {
    setName(e.target.value.trim());
    setEmail(e.target.value.trim());
    setPassword(e.target.value.trim());
    setOccupation(e.target.value);
    setState(e.target.value);
    validate();
    // renders();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row form-row">
          <div className="col col-sm-12 col-md-10 col-lg-10 col-xl-10  form-col">
            <Card.Header className="user-header">
              <h1>Front End Take Home Exercise</h1>
              <h2>by: Kurt Reynolds</h2>
            </Card.Header>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="form"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder={name}
                      invalid={validate.errors.name}
                      onBlur={handleBlur('name')}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>
                      {validate.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="email"
                      invalid={validate.errors.email}
                      onBlur={handleBlur('email')}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>
                      {validate.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="password"
                      invalid={validate.errors.password}
                      onBlur={handleBlur('password')}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Select
                      aria-label="select occupation"
                      id="occupations"
                      onClick={fetchForm}
                      onChange={handleInputChange}
                    >
                      <option>Select Occupation</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Select
                      aria-label="select state"
                      id="states"
                      onClick={fetchForm}
                      onChange={handleInputChange}
                    >
                      <option>Select State</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" id="submit-button" onClick={submitForm}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </div>

          {/* <Button onClick={fetchForm}>Press</Button> */}
        </div>
      </div>
    </>
  );
}
