import React from 'react';
import error from '../assets/404error.gif';

export default function NotFound() {
  return (
    <>
      <style >
        {'body { background-color: white; }'}
      </style>
      <section>
        <img src={error} alt="404 Error" />
      </section>
    </>
  );
}