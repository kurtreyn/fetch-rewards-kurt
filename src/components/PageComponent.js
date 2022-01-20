import React, { useState, useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import InputContainer from './InputContainer';
import FormInput from './FormInput';
import Buttons from './Buttons';
import { fetchForm, handleSubmit, findFormErrors } from './ActionComponent';

export default function PageComponent() {
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
            onChange=""
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
            id=""
          />

          <InputContainer
            required
            type="text"
            placeholder="choose your state"
            onChange=""
            isInvalid=""
            id=""
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
