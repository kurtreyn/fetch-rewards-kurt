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
  fetchForm,
}) {
  let occ;
  let stat;

  function mapIt(things, match) {
    let items = '';
    items = things.map((thing) => {
      return `<option>${thing}</option>`;
    });
    document.querySelector(match).insertAdjacentHTML('afterbegin', items);
  }

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
            occ = data.occupations;
            stat = data.states;
            console.log(`occ is: ${occ}`);
            mapIt(occ, '#occupations-field');
            mapIt(stat, '#states-field');
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
            type="select"
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
