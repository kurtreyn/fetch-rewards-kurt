import React, { useState, useEffect } from 'react';
import { fetchForm, handleSubmit, findFormErrors } from './ActionComponent';
import { Form } from 'react-bootstrap';

export default function FormDropdown({
  required,
  type,
  placeholder,
  onChange,
  isInvalid,
  id,
  errors,
  fetchForm
}) {
  useEffect(() => {
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
              .querySelector('#occupations-field')
              .insertAdjacentHTML('afterbegin', occupations);

            const stateArray = data.states;
            const states = stateArray.map((state) => {
              return `<option>${state.name}</option>`;
            });
            document
              .querySelector('#states-field')
              .insertAdjacentHTML('afterbegin', states);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchForm();
  }, []);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            required={required}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            isInvalid={isInvalid}
            id={id}
          />
          <option>Choose your {placeholder}</option>
          <Form.Control.Feedback type="invalid">ERRORS</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" errors={errors}>
            {errors}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </>
  );
}
