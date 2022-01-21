import React from 'react';
import { Button } from 'react-bootstrap';

export default function Buttons({ onClick }) {
  return (
    <Button className="form-button" onClick={onClick}>
      Submit
    </Button>
  );
}
