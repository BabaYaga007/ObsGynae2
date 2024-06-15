/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const SetMonit = async userInfo => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    anteMDate,
    anteBP,
    anteOE,
    antePallor,
    antePog,
    anteWt,
    antePE,
  } = userInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setMonit', {
      patient_id,
      doc_nmc,
      clinic_id,
      antem_bp: anteBP,
      antem_oe: anteOE,
      antem_date: anteMDate,
      antem_pog: antePog,
      antem_wt: anteWt,
      antem_ped: antePE,
      antem_pallor: antePallor,
    });

    if (response.data.success) {
      // Handle successful login
      console.log('Monit Data Set successful');
    } else {
      // Handle invalid credentials
      console.log('Monit Data set unsuccesful');
    }
  } catch (error) {
    console.error('Error during Monit Data Setting:', error.message);
  }
};

export default SetMonit;
