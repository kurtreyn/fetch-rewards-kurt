import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
export function testClick() {
  console.log('clicked');
}

export const findFormErrors = ({ form, errors }) => {
  const { name, email, password, passconfirm, occupation, state } = form;
=======
export async function fetchForm(e, props) {
  e.preventDefault();
  fetch(`https://frontend-take-home.fetchrewards.com/form`, {
    method: 'GET',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data) {
        // console.log(`data is ${data.occupations}`);
        // props.occup.push(data.occupations);
        // console.log(props.occup);
        const occupations = data.occupations.map((occupation) => {
          return `<option>${occupation}</option>`;
        });
        document
          .querySelector('[data-occupations]')
          .insertAdjacentHTML('afterbegin', occupations);

        const stateArray = data.states;
        const states = stateArray.map((state) => {
          return `<option>${state.name}</option>`;
        });
        document
          .querySelector('[data-states]')
          .insertAdjacentHTML('afterbegin', states);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export const findFormErrors = ({ ...form }) => {
  const { name, email, password, occupation, state } = form;
>>>>>>> main
  const newErrors = {};
  if (!name || name === '') {
    newErrors.name = 'name cannot be blank';
  } else if (name.length > 30) {
    newErrors.name = 'name is too long';
  } else if (!email || email === '') {
    newErrors.email = 'email cannot be blank';
<<<<<<< HEAD
  } else if (!email.includes('@')) {
    newErrors.email = 'email must contain and @ symbol';
=======
>>>>>>> main
  } else if (!password || password === '') {
    newErrors.password = 'password cannot be blank';
  } else if (password.length < 6) {
    newErrors.password = 'password must be at least 6 characters';
<<<<<<< HEAD
  } else if (password !== passconfirm) {
    newErrors.passconfirm = 'passwords do not match';
  } else if (!occupation || occupation === 'Select Occupation') {
    newErrors.occupation = 'must select an occupation';
  } else if (!state || state === 'Select State') {
    newErrors.state = 'must select a state';
  }
  console.log(`occupation: ${form.occupation}`);
  console.log(`state: ${form.state}`);
=======
  } else if (occupation === 'Select Occupation') {
    newErrors.occupation = 'must select an occupation';
  }
>>>>>>> main

  return newErrors;
};

<<<<<<< HEAD
export async function handleSubmit(e, { form,errors, setErrors }) {
  e.preventDefault();
  const newErrors = findFormErrors();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
=======
export async function handleSubmit(e, props) {
  e.preventDefault();
  const newErrors = findFormErrors();
  if (Object.keys(newErrors).length > 0) {
    props.setErrors(newErrors);
>>>>>>> main
  } else {
    const response = await fetch(
      `https://frontend-take-home.fetchrewards.com/form`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
<<<<<<< HEAD
          name: form.name,
          email: form.email,
          password: form.password,
          passconfirm: form.passconfirm,
          occupation: form.occupation,
          state: form.state,
=======
          name: props.name,
          email: props.email,
          password: props.password,
          occupation: props.occupation,
          state: props.state,
>>>>>>> main
        }),
      }
    )
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        if (data.status === 200) {
<<<<<<< HEAD
          alert('Thank you for your submission');
        } else {
=======
          props.setName('');
          props.setEmail('');
          props.setPassword('');
          props.setOccupation('');
          props.setState('');
          alert('Thank you for your submission');
        } else {
          props.setMessage('Submission was unsuccessful');
>>>>>>> main
          alert('Submission was unsuccessful');
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  }
}

<<<<<<< HEAD
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
=======
export const setField = (props) => (field, value) => {
  props.setForm({
    ...props.form,
    [field]: value,
  });

  if (!!props.errors[field])
    props.setErrors({
      ...props.errors,
      [field]: null,
    });
};

export const passMask = function () {
  const passInput = document.querySelectorAll('[data-password]');
  if (passInput.type === 'password') {
    passInput.type = 'text';
  } else {
    passInput.type = 'password';
  }
};
>>>>>>> main
