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
          <InputContainer />
        </div>
        <div className="row form-row">
          <InputContainer />
          <InputContainer />
        </div>
        <div className="row form-row">
          <InputContainer />
          <InputContainer />
        </div>
        <div className="row form-row">
          <Buttons />
        </div>
      </div>
    </>
  );
}
