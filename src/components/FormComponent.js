import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import {
  fetchForm,
  handleSubmit,
  setField,
  findFormErrors,
} from './ActionComponent';

export default function FormComponent() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('Enter full name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [occupation, setOccupation] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const occup = [];

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
                      onChange={(e) => setField('name', e.target.value.trim())}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder={email}
                      onChange={(e) => setField('email', e.target.value.trim())}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder={password}
                      onChange={(e) =>
                        setField('password', e.target.value.trim())
                      }
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      as="select"
                      aria-label="select occupation"
                      data-occupations="occupations"
                      onClick={fetchForm}
                      onChange={(e) =>
                        setField('occupation', e.target.value.trim())
                      }
                      isInvalid={!!errors.occupation}
                    >
                      <option>Select Occupation</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.occupation}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      as="select"
                      aria-label="select state"
                      data-states="states"
                      onClick={fetchForm}
                      onChange={(e) => setField('state', e.target.value.trim())}
                    >
                      isInvalid={!!errors.state}
                      <option>Select State</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" id="submit-button" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </div>
        </div>
      </div>
    </>
  );
}
