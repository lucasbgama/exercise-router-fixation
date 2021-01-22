import React from 'react';

const Users = ({ greetingMessage = 'Hi There', id = "stranger"}) => (
  <div>
    <h2> Users </h2>
      <p> {greetingMessage}, { id } this is my awesome Users component </p>
  </div>
);

export default Users;
