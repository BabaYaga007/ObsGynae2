/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

// export default function UpdateDoc(docInfo) {
const UpdateDoc = async upInfo => {
  let {
    name,
    phone,
    email,
    qualification,
    designation,
    clinicN,
    address,
    clinicP,
    docNmc,
  } = upInfo;

  console.log(upInfo);

  try {
    const response = await axios.post(
      'http://54.66.15.177:3000/updateDoc', // Replace with your EC2 instance IP
      {
        name: name,
        phone: phone,
        email: email,
        qualification: qualification,
        designation: designation,
        clinicN: clinicN,
        address: address,
        clinicP: clinicP,
        docNmc: docNmc,
      },
    );
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default UpdateDoc;
