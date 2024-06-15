/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const SetUser = async userInfo => {
  const {nmc, doc_contact_id, role_id, pwd, status} = userInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setUser', {
      nmc,
      doc_contact_id,
      role_id,
      pwd,
      status,
    });

    if (response.data.success) {
      // Handle successful login
      console.log('User Set successful');
    } else {
      // Handle invalid credentials
      console.log('User set unsuccesful');
    }
  } catch (error) {
    console.error('Error during User Setting:', error.message);
  }
};

export default SetUser;
