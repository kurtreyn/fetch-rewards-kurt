import React, { useState, useEffect } from 'react';

export function testClick() {
  console.log('clicked');
}

export function mapAPI(items, id) {
  items = '';
  items.map((item) => {
    return `<option>${item}</option>`;
  });
  document.querySelector(`#${id}`).insertAdjacentHTML('afterbegin', `${items}`);
}

export async function fetchForm() {
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
}

export const findFormErrors = ({ form, errors }) => {
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

export async function handleSubmit(e, props) {
  e.preventDefault();
  const newErrors = findFormErrors();
  if (Object.keys(newErrors).length > 0) {
    props.setErrors(newErrors);
  } else {
    const response = await fetch(
      `https://frontend-take-home.fetchrewards.com/form`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: props.name,
          email: props.email,
          password: props.password,
          occupation: props.occupation,
          state: props.state,
        }),
      }
    )
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        if (data.status === 200) {
          alert('Thank you for your submission');
        } else {
          props.setMessage('Submission was unsuccessful');
          alert('Submission was unsuccessful');
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  }
}

export const setField =
  ({ form, setForm, errors, setErrors }) =>
  (field, value) => {
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
