import React, { useState, useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import InputContainer from './InputContainer';
import DropdownContainer from './DropdownContainer';
import Buttons from './Buttons';
import {
  fetchForm,
  handleSubmit,
  setField,
  findFormErrors,
  mapAPI,
} from './ActionComponent';

export default function PageComponent() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    console.log(field, value);
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
      console.log(document.querySelector('#states-field'));
    }
    fetchForm();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <HeaderComponent />
      </div>
      <div className="container form-container">
        <div className="row form-row">
          <InputContainer
            required
            type="text"
            placeholder="full name"
            onChange={(e) => setField('name', e.target.value.trim())}
            isInvalid=""
          />

          <InputContainer
            required
            type="text"
            placeholder="email"
            onChange=""
            isInvalid=""
          />
        </div>

        <div className="row form-row">
          <DropdownContainer
            as="select"
            required
            type="text"
            placeholder="choose your occupation"
            onChange=""
            isInvalid=""
            id="occupations-field"
          />

          <DropdownContainer
            as="select"
            required
            type="text"
            placeholder="choose your state"
            onChange=""
            isInvalid=""
            id="states-field"
          />
        </div>

        <div className="row form-row">
          <InputContainer
            required
            type="password"
            placeholder="password"
            onChange=""
            isInvalid=""
          />

          <InputContainer
            required
            type="password"
            placeholder="confirm password"
            onChange=""
            isInvalid=""
          />
        </div>
        <div className="row form-row">
          <Buttons />
        </div>
      </div>
    </>
  );
}
