import React, { useState } from 'react';
import { Form, Button, Row, InputGroup, Col } from 'react-bootstrap';

export default function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="row form-row">
        <div className="col col-sm-12 col-md-10 col-lg-10 col-xl-10 mt-4 form-col">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="Full name" />
                <Form.Control.Feedback>Looking good</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="email" />
                <Form.Control.Feedback>Looking good</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="password" />
                <Form.Control.Feedback>Looking good</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="Occupation" />
                <Form.Control.Feedback>Looking good</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="State" />
                <Form.Control.Feedback>Looking good</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" id="submit-button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
