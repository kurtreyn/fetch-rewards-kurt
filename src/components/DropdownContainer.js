import React from 'react';
import FormDropdown from './FormDropdown';

export default function DropdownContainer({ required, type, placeholder, onChange, isInvalid, id }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
      <FormDropdown required={required} type={type} placeholder={placeholder} onChange={onChange} isInvalid={isInvalid} />
    </div>
  );
}
