import React from 'react';

export default function ActionComponent({ children }) {
  async function loadForm() {
    const url = `https://frontend-take-home.fetchrewards.com/form`;
    const result = await fetch(`${url}`);
    const data = await result.json();
  }
  return <div></div>;
}

// async function fetchForm() {
//   fetch(`https://frontend-take-home.fetchrewards.com/form`, {
//     method: 'GET',
//   })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       if (data) {
//         console.log(data.occupations);
//         const occupations = data.occupations.map((occupation) => {
//           console.log(occupation);
//           return `<li>${occupation}</li>`;
//         });
//         document
//           .querySelector('#occupations')
//           .insertAdjacentHTML('afterbegin', occupations);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
