/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

// export default function UpdateDoc(docInfo) {
const UpdatePat = async upInfo => {
  let {
    docNmc,
    patient_id,
    pat_name,
    pat_gender,
    pat_email,
    pat_dob,
    pat_height,
  } = upInfo;

  console.log(upInfo);

  try {
    const response = await axios.post(
      'http://54.66.15.177:3000/updatePat', // Replace with your EC2 instance IP
      {
        pat_name: pat_name,
        pat_gender: pat_gender,
        pat_email: pat_email,
        pat_height: pat_height,
        pat_dob: pat_dob,
        docNmc: docNmc,
        patient_id: patient_id,
      },
    );
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default UpdatePat;
