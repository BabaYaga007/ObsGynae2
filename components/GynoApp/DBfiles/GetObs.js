/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
// import GetDocDetails from './GetDocDetails';

let GetObs = async (docNmc, patId) => {
  // console.log('NMC :', docNmc);
  const obsData = 'No Obs Data found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getObs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doc_nmc: docNmc,
        patient_id: patId,
      }),
    });
    const data = await response.json();
    console.log('Getting Obs Data Successful');
    if (response.ok) {
      // Handle successful login
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return obsData;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Obs Data UNsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetObs;
