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
          <InputContainer />
          {/* ^^FULL NAME^^ */}
          <InputContainer />
          {/* ^^EMAIL^^ */}
        </div>
        <div className="row form-row">
          <InputContainer />
          {/* ^^OCCUPATION^^ */}
          <InputContainer />
          {/* ^^STATE^^ */}
        </div>
        <div className="row form-row">
          <InputContainer />
          {/* ^^PASSWORD^^ */}
          <InputContainer />
          {/* ^^CONFIRM PASSWORD^^ */}
        </div>
        <div className="row form-row">
          <Buttons />
        </div>
      </div>
    </>
  );
}
