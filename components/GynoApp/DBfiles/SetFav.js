/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const SetMed = async medInfo => {
  const {docNmc, clinicId, newMed} = medInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setMed', {
      doc_nmc: docNmc,
      clinic_id: clinicId,
      medicine: newMed,
    });

    console.log(response);

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav Med Set successful');
    } else {
      // Handle invalid credentials
      console.log('Fav Med set unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Fav Med Setting:', error.message);
  }
};

const SetInv = async invInfo => {
  const {docNmc, clinicId, investName} = invInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setInv', {
      doc_nmc: docNmc,
      clinic_id: clinicId,
      investigation: investName,
    });

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav Investigations Set successful');
    } else {
      // Handle invalid credentials
      console.log('Fav Investigations set unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Fav Investigations Setting:', error.message);
  }
};

const SetAdv = async advInfo => {
  const {docNmc, clinicId, investAdvise} = advInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setAdv', {
      doc_nmc: docNmc,
      clinic_id: clinicId,
      advice: investAdvise,
    });

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav advice Set successful');
    } else {
      // Handle invalid credentials
      console.log('Fav advice set unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Fav advice Setting:', error.message);
  }
};

export {SetMed, SetInv, SetAdv};
