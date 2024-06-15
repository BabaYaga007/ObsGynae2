/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
// import GetDocDetails from './GetDocDetails';

let GetUsg = async (docNmc, patId) => {
  // console.log('NMC :', docNmc);
  const usgData = 'No Usg Data found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getUsg', {
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
    console.log('Getting Usg Data Successful');
    if (response.ok) {
      // Handle successful login
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return usgData;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Usg Data UNsuccesful');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetUsg;
