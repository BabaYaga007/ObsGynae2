/* eslint-disable prettier/prettier */
import axios from 'axios';

const SetPat = async patInfo => {
  const {
    docNmc,
    clinicId,
    pat_name,
    pat_gender,
    pat_phone,
    pat_email,
    pat_height,
    pat_dob,
  } = patInfo;

  try {
    const response = await axios.post(
      'http://54.66.15.177:3000/setPatient', // Replace with your EC2 instance IP
      {
        docNmc: docNmc,
        clinicId: clinicId,
        pat_name: pat_name,
        pat_gender: pat_gender,
        pat_phone: pat_phone,
        pat_email: pat_email,
        pat_height: pat_height,
        pat_dob: pat_dob,
      },
    );

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default SetPat;
