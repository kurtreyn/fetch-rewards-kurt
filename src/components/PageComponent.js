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
  const [name, setName] = useState('Enter full name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [passconfirm, setPassconfirm] = useState('confirm password');
  const [occupation, setOccupation] = useState('select occupation');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');

  const setField = (field, value) => {
    // console.log(field, value);
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
    // console.log(form);
  };

  const findFormErrors = () => {
    const { name, email, password, passconfirm, occupation, state } = form;
    const newErrors = {};
    if (!name || name === '') {
      newErrors.name = 'name cannot be blank';
    } else if (name.length > 30) {
      newErrors.name = 'name is too long';
    } else if (!email || email === '') {
      newErrors.email = 'email cannot be blank';
    } else if (!email.includes('@')) {
      newErrors.email = 'email must contain and @ symbol';
    } else if (!password || password === '') {
      newErrors.password = 'password cannot be blank';
    } else if (password.length < 6) {
      newErrors.password = 'password must be at least 6 characters';
    } else if (password !== passconfirm) {
      newErrors.passconfirm = 'passwords do not match';
    } else if (!occupation || occupation === 'Select Occupation') {
      newErrors.occupation = 'must select an occupation';
    } else if (!state || state === 'Select State') {
      newErrors.state = 'must select a state';
    }
    console.log(`occupation: ${form.occupation}`);
    console.log(`state: ${form.state}`);

    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const response = await fetch(
        `https://frontend-take-home.fetchrewards.com/form`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            occupation: occupation,
            state: state,
          }),
        }
      )
        .then((data) => {
          console.log('Request succeeded with JSON response', data);
          if (data.status === 200) {
            setName('');
            setEmail('');
            setPassword('');
            setOccupation('');
            setState('');
            alert('Thank you for your submission');
          } else {
            setMessage('Submission was unsuccessful');
            alert('Submission was unsuccessful');
          }
        })
        .catch((error) => {
          console.log('Request failed', error);
        });
    }
  }

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
