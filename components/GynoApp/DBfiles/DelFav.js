/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const DelMed = async medInfo => {
  const {docNmc, key} = medInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/delMed', {
      doc_nmc: docNmc,
      med_id: key,
    });

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav Med Del successful');
    } else {
      // Handle invalid credentials
      console.log('Fav Med Del unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Fav Med Deleting:', error.message);
  }
};

const DelInv = async invInfo => {
  const {docNmc, key} = invInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/DelInv', {
      doc_nmc: docNmc,
      invest_id: key,
    });

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav Investigations Del successful');
    } else {
      // Handle invalid credentials
      console.log('Fav Investigations Del unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Del Investigations delting:', error.message);
  }
};

const DelAdv = async advInfo => {
  const {docNmc, key} = advInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/delAdv', {
      doc_nmc: docNmc,
      advice_id: key,
    });

    if (response.status == '200') {
      // Handle successful login
      console.log('Fav advice del successful');
    } else {
      // Handle invalid credentials
      console.log('Fav advice del unsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error during Fav advice deleting:', error.message);
  }
};

export {DelMed, DelInv, DelAdv};
