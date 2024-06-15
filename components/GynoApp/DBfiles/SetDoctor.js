/* eslint-disable prettier/prettier */
import React from 'react';

import axios from 'axios';
import {Alert} from 'react-native';

const SetDoctor = async docInfo => {
  const {
    clinic_id,
    role_id,
    doc_name,
    nmc,
    pwd,
    doc_contact_id,
    email_id,
    qualification,
    designation,
    clinic,
    address,
    clinic_phn,
    logo,
  } = docInfo;

  try {
    const response = await axios.post('http://54.66.15.177:3000/setDoc', {
      clinic_id,
      role_id,
      doc_name,
      nmc,
      pwd,
      doc_contact_id,
      email_id,
      qualification,
      designation,
      clinic,
      address,
      clinic_phn,
      logo,
    });

    if (response.data.success) {
      // Handle successful login
      console.log('Doc set successful');
      alert('Doctor Registered Successfully');
    } else {
      // Handle invalid credentials
      console.log('Doc set unsuccessful');
    }
  } catch (error) {
    console.error('Error during setDoc', error.message);
  }
};

export default SetDoctor;
