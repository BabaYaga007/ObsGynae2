/* eslint-disable prettier/prettier */
import React from 'react';

import axios from 'axios';

let GetDocDetails = async docNmc => {
  // const {docNmc} = docInfo;
  console.log('inside getting doc details');

  const noData = 'No data found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getDoc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({nmc: docNmc}),
    });

    const data = await response.json();
    console.log('Getting Doc Details successfulllll');
    // setDocData(data);
    if (response.ok) {
      // Handle successful login
      console.log('Response:', data); // Log the entire response
      if (data.length > 0) {
        return data;
      } else {
        console.log('No data coming');
        return noData;
      }
    } else {
      // Handle invalid credentials
      console.log('Get Doc unsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetDocDetails;
