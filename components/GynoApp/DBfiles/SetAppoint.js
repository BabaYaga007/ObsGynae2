/* eslint-disable prettier/prettier */
import axios from 'axios';

const SetAppoint = async PatInfo => {
  // const {docNmc} = useAppContext();

  const {
    docNmc,
    pat_name,
    pat_phone,
    pat_age,
    pat_dob,
    sch_date,
    sch_time,
    status,
  } = PatInfo;

  try {
    const response = await axios.post(
      'http://54.66.15.177:3000/setAppoint', // Replace with your EC2 instance IP
      {
        docNmc,
        pat_name,
        pat_phone,
        pat_age,
        pat_dob,
        sch_date,
        sch_time,
        status,
      },
    );

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default SetAppoint;
