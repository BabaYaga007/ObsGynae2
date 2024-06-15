/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const SetUsg = async userInfo => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    usg_report,
    usg_date,
    pog,
    usg_sum,
    placenta,
    liquor,
  } = userInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setUsg', {
      patient_id,
      doc_nmc,
      clinic_id,
      usg_report,
      usg_date,
      pog,
      usg_sum,
      placenta,
      liquor,
    });

    if (response.data.success) {
      // Handle successful login
      console.log('Usg Data Set successful');
    } else {
      // Handle invalid credentials
      console.log('Usg Data set unsuccesful');
    }
  } catch (error) {
    console.error('Error during Usg Data Setting:', error.message);
  }
};

export default SetUsg;
