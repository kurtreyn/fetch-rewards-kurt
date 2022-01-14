import React from 'react';

export default function ActionComponent({ children }) {
  async function loadForm() {
    const url = `https://frontend-take-home.fetchrewards.com/form`;
    const result = await fetch(`${url}`);
    const data = await result.json();
  }
  return <div></div>;
}
