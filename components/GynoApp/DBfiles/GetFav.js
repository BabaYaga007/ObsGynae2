/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
// import GetDocDetails from './GetDocDetails';

let GetMed = async docNmc => {
  console.log('In FavMed NMC :', docNmc);
  const favMed = 'No Fav Meds found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getMed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doc_nmc: docNmc,
      }),
    });
    if (response.ok) {
      // Handle successful login
      const data = await response.json();
      console.log('Getting Fav Meds Successful');
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        console.log(' Get Fav Meds UNsuccesful', response.statusText);
        return favMed;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Fav Meds UNsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

let GetAdv = async docNmc => {
  // console.log('NMC :', docNmc);
  const favAdv = 'No Fav Advices found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getAdv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doc_nmc: docNmc,
      }),
    });
    const data = await response.json();
    console.log('Getting Fav Advices Successful');
    if (response.ok) {
      // Handle successful login
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return favAdv;
      }
    } else {
      // Handle invalid credentials
      console.log('Getting Fav Advices UnnnnnSuccessful', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

let GetInv = async docNmc => {
  // console.log('NMC :', docNmc);
  const favInv = 'No Fav Invetigations found';
  try {
    const response = await fetch('http://54.66.15.177:3000/getInv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doc_nmc: docNmc,
      }),
    });
    const data = await response.json();
    console.log('Getting Fav Invetigations  Successful');
    if (response.ok) {
      // Handle successful login
      // console.log(data);
      if (data.length > 0) {
        // setPatData(data);
        return data;
      } else {
        return favInv;
      }
    } else {
      // Handle invalid credentials
      console.log(' Get Fav Invetigations  UNsuccesful', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export {GetMed, GetAdv, GetInv};
