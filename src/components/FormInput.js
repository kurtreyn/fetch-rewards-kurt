import React, { useState, useEffect } from 'react';
import { fetchForm, handleSubmit, findFormErrors } from './ActionComponent';
import { Form } from 'react-bootstrap';

export default function FormInput({ required, type, placeholder, onChange, isInvalid }) {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
          required={required} type={type} placeholder={placeholder} onChange={onChange} isInvalid={isInvalid} 
          />
          <Form.Control.Feedback type="invalid">ERRORS</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </>
  );
}
