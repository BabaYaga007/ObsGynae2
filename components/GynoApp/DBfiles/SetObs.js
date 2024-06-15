/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const SetObs = async obsInfo => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    parity,
    mode_birth,
    baby,
    outcome,
    gravida,
    birth_year,
    birth_wt,
    comments,
  } = obsInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setObs', {
      patient_id: patient_id,
      doc_nmc: doc_nmc,
      clinic_id: clinic_id,
      parity: parity,
      mode_birth: mode_birth,
      baby: baby,
      outcome: outcome,
      gravida: gravida,
      birth_year: birth_year,
      birth_wt: birth_wt,
      comments: comments,
    });

    if (response.data.success) {
      // Handle successful login
      console.log('Obs Data Set successful');
    } else {
      // Handle invalid credentials
      console.log('Obs Data set unsuccesful');
    }
  } catch (error) {
    console.error('Error during Obs Data Setting:', error.message);
  }
};

export default SetObs;
