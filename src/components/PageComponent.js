import React, { useState, useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import InputContainer from './InputContainer';
import FormInput from './FormInput';
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
          <InputContainer
            required
            type="text"
            placeholder="choose your occupation"
            onChange=""
            isInvalid=""
            id="occupations"
          />

          <InputContainer
            required
            type="text"
            placeholder="choose your state"
            onChange=""
            isInvalid=""
            id="states"
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
