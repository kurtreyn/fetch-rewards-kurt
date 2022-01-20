import React from 'react';
import FormInput from './FormInput';

export default function InputContainer({ required, type, placeholder, onChange, isInvalid }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
      <FormInput required={required} type={type} placeholder={placeholder} onChange={onChange} isInvalid={isInvalid} />
    </div>
  );
}
