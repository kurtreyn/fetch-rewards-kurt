import React, { useState, useEffect } from 'react';
import { fetchForm, handleSubmit, findFormErrors } from './ActionComponent';
import { Form } from 'react-bootstrap';

export default function FormInput() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            required
            type="text"
            placeholder="placeholder"
            onChange=""
            isInvalid=""
          />
          <Form.Control.Feedback type="invalid">ERRORS</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </>
  );
}
