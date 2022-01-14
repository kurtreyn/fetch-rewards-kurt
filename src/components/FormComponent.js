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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  async function fetchForm() {
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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder={name}
                      onChange={(e) => setName(e.target.value.trim())}
                    />
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value.trim())}
                    />
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value.trim())}
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
                    >
                      <option>Select State</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looking good</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" id="submit-button">
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
