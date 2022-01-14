import React from 'react';

export default function ActionComponent({ children }) {
  async function loadForm() {
    const url = `https://frontend-take-home.fetchrewards.com/form`;
    const result = await fetch(`${url}`);
    const data = await result.json();
  }
  return <div></div>;
}
// async function submitForm(e) {
//   e.preventDefault();
//   const formData = new FormData(formElement);
//   const formDataSerialized = Object.fromEntries(formData);
//   console.log(formDataSerialized, 'formDataSerialized');
//   const jsonObject = {
//     ...formDataSerialized,
//   };
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(jsonObject),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     // const json = await response.json();
//     // console.log(json);
//   } catch (error) {
//     console.error(error);
//   }
// }
