import React from 'react';

import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {

  validateUser = () => {
    const { user } = this.props;
    const { username, password } = user;
    if( username === 'joao' && password === '1234') return true;
    alert('Access denied');
    return false;
  }

  render(){
    return(
      <p>
        { this.validateUser() ? 'Welcome Joao!' : <Redirect to="/" />}
      </p>
    )
  }
}

export default StrictAccess;
