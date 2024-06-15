/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useState} from 'react';

let GetPresc = async (docNmc, patId) => {
  // console.log('NMC :', docNmc);
  const prescData = 'No prescriptions found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getPresc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nmc: docNmc,
        patient_id: patId,
      }),
    });
    const data = await response.json();
    console.log('Getting Prescription Successful');
    if (response.ok) {
      // Handle successful login
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return prescData;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Prescription UNsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetPresc;
