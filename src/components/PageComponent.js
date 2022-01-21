import React, { useState, useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import FormInput from './FormInput';
import FormDropdown from './FormDropdown';
import Buttons from './Buttons';
import { Form } from 'react-bootstrap';
import {
  fetchForm,
  handleSubmit,
  findFormErrors,
  mapAPI,
  testClick,
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

  return (
    <>
      <div className="container-fluid">
        <HeaderComponent />
      </div>
      <div className="container form-container">
        <div className="row form-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormInput
              required
              type="text"
              placeholder="full name"
              onChange={(e) => setField('name', e.target.value.trim())}
              isInvalid=""
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormInput
              required
              type="text"
              placeholder="email"
              onChange={(e) => setField('email', e.target.value.trim())}
              isInvalid=""
            />
          </div>
        </div>

        <div className="row form-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormDropdown
              required
              type="select"
              placeholder="occupation"
              onChange=""
              isInvalid=""
              id="occupations-field"
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormDropdown
              required
              type="select"
              placeholder="state"
              onChange=""
              isInvalid=""
              id="states-field"
            />
          </div>
        </div>

        <div className="row form-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormInput
              required
              type="password"
              placeholder="password"
              onChange={(e) => setField('password', e.target.value.trim())}
              isInvalid=""
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <FormInput
              required
              type="password"
              placeholder="confirm password"
              onChange={(e) => setField('passconfirm', e.target.value.trim())}
              isInvalid=""
            />
          </div>
        </div>
        <div className="row form-row">
          <Buttons onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}
