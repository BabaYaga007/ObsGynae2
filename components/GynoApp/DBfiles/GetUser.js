/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
// import GetDocDetails from './GetDocDetails';

const GetUser = async userInfo => {
  const {nmc, pwd} = userInfo;
  try {
    const response = await axios.post(
      'http://54.66.15.177:3000/getUser', // Replace with your EC2 instance IP
      {
        nmc: nmc,
        pwd: pwd,
      },
    );
    console.log('Response:', response.data);
    if (response.data.success) {
      // Handle successful login
      console.log('Get User successful');
      return response.data;
      // GetDocDetails(userInfo);
    } else {
      // Handle invalid credentials
      console.log(' Get User unsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetUser;
