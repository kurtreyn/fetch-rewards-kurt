import React, { useState, useEffect } from 'react';
import { fetchForm, handleSubmit, findFormErrors } from './ActionComponent';
import { Form } from 'react-bootstrap';

export default function FormInput({
  required,
  as,
  type,
  placeholder,
  onChange,
  isInvalid,
  id,
  errors,
}) {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            as={as}
            required={required}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            isInvalid={isInvalid}
            id={id}
            errors={errors}
          />

          <Form.Control.Feedback type="invalid">
            {errors}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </>
  );
}
