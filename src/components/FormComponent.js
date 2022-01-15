import React, { useState } from 'react';

import { Form, Button, Row, Col, Card } from 'react-bootstrap';

export default function FormComponent() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('Enter full name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [occupation, setOccupation] = useState('select occupation');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, email, password, occupation, state } = form;
    const newErrors = {};
    if (!name || name === '') {
      newErrors.name = 'name cannot be blank';
    } else if (name.length > 30) {
      newErrors.name = 'name is too long';
    } else if (!email || email === '') {
      newErrors.email = 'email cannot be blank';
    } else if (!password || password === '') {
      newErrors.password = 'password cannot be blank';
    } else if (password.length < 6) {
      newErrors.password = 'password must be at least 6 characters';
    } else if (!occupation || occupation === 'Select Occupation') {
      newErrors.occupation = 'must select an occupation';
    } else if (!state || state === 'Select State') {
      newErrors.state = 'must select a state';
    }
    console.log(`occupation: ${form.occupation}`);
    console.log(`state: ${form.state}`);

    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
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
  }

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
            .querySelector('[data-occupations]')
            .insertAdjacentHTML('afterbegin', occupations);

          const stateArray = data.states;
          const states = stateArray.map((state) => {
            return `<option>${state.name}</option>`;
          });
          document
            .querySelector('[data-states]')
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
