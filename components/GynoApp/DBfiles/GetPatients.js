/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useState} from 'react';

let GetPatients = async docNmc => {
  // console.log('NMC :', docNmc);
  const patData = 'No patients found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getPatients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nmc: docNmc,
      }),
    });
    const data = await response.json();
    console.log('Getting Patient Successful');
    if (response.ok) {
      // Handle successful login
      console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return patData;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Patient UNsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetPatients;
