import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppContext} from '../AppContext';
import axios from 'axios';
// import { View, Text, SafeAreaView } from 'react-native';
// import {GetDocDetails} from './DBfiles/GetDocDetails';

import {styles} from '../../assets/Style/styles';
// import GetUser from './DBfiles/GetUser';

export default function SignIn({navigation}) {
  function submitHandler() {
    // const formData = {};
    // console.log(formData);
    // SignInUser();
    searchUser();
  }

  const {docNmc, setDocNmc, docName, setDocName, clinicId, setClinicId} =
    useAppContext();

  // let displayName = '';

  // const [docData, setDocData] = useState({});

  const getDocDetails = async () => {
    console.log('Getting doc details');
    console.log('User:' + user_Id);

    // user_Id = Number(user_Id);

    // console.log(typeof user_Id);

    try {
      const response = await fetch('http://54.66.15.177:3000/getDoc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nmc: user_Id}),
      });

      const data = await response.json();
      console.log('Response:', data); // Log the entire response
      // setDocData(data);
      if (response.ok) {
        // Handle successful login
        console.log('Getting Doc Details successful');
        console.log(data);
        console.log(data[0].doc_name);
        console.log(data[0].email);
        console.log(data[0].clinic_id);

        if (data.length > 0) {
          setDocName(data[0].doc_name);
          setDocNmc(data[0].nmc);
          setClinicId(data[0].clinic_id);
          // displayName = results.rows.item(0).doc_name;
          console.log('Achint awesome');
          console.log(
            docName + ' ' + docNmc + ' ' + clinicId + '- Logs till SignIn Page',
          );
        } else {
          console.log('No data coming');
        }
      } else {
        // Handle invalid credentials
        console.log('Get Doc unsuccesful');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  var [user_Id, setUserId] = useState(0);
  const [pwd, setpwd] = useState();

  // const [userData, setUserData] = useState({});

  let searchUser = async () => {
    console.log('User:' + user_Id, ' Pwd:' + pwd);

    if (!user_Id) {
      alert('Please fill username');
      return;
    }
    if (!pwd) {
      alert('Please fill password');
      return;
    }

    // user_Id = Number(user_Id);

    // console.log(typeof user_Id);
    // console.log(typeof pwd);

    // fetch('http://54.66.15.177:3000/getUser', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     nmc: user_Id,
    //     pwd: pwd,
    //   }),
    // })
    //   .then(response => response.text())
    //   .then(result => setUserData(result))
    //   .catch(error => console.error(error));
    try {
      const response = await fetch('http://54.66.15.177:3000/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nmc: user_Id,
          pwd: pwd,
        }),
      });
      const data = await response.json();
      // const data = await response.json().then(json => {
      //   // Do something with the JSON data
      // });
      if (response.ok) {
        // Handle successful login
        console.log('Getting User SSSSSSuccessful');
        // setUserData(data);
        // console.log(userData);
        if (data.length > 0) {
          getDocDetails();
          console.log('User successfully Logged in ');
          navigation.navigate('Drawer');
        } else {
          alert('User not found');
        }
      } else {
        // Handle invalid credentials
        console.log(' Get User UNsuccesful');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View
      style={{
        paddingTop: 40,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{marginVertical: 20}}>
        <Text style={styles.heading}>OBGYN</Text>
        <Text style={styles.heading}>Prescriptions</Text>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 17, color: 'black'}}>
          Enter your phone number or state medical number
        </Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          {/* <Text style={styles.quesText}>Phone Number</Text> */}
          <TextInput
            style={styles.textInput}
            // inputMode="numeric"
            placeholder="NMC"
            placeholderTextColor="grey"
            onChangeText={user_Id => setUserId(user_Id)}
          />
        </View>
        <View style={styles.ques2}>
          {/* <Text style={styles.quesText}>Passworf</Text> */}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={pwd => setpwd(pwd)}
          />
        </View>
        <View style={styles.naviButton}>
          {/* {/* <Button
            title="Sign In"
            onPress={() => navigation.navigate("DrawerNavi")}
          /> *
          /} */}
          <TouchableOpacity style={styles.button_to} onPress={submitHandler}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('ForgotPass')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 15, marginTop: 10, color: 'black'}}>
            Don't have an account
          </Text>
          {/* <Button title="Sign Up" onPress={() => navigation.navigate('Register')} /> */}
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity>

          {/* <Text style={{fontSize: 15, marginTop: 10, color: 'black'}}>OR</Text>
          <Text style={{fontSize: 15, marginBottom: 10, color: 'black'}}>
            Login via
          </Text>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles2.button}
              // onPress={}
            >
              <Image
                source={require('../../assets/icons/google.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles2.button}
              // onPress={onPress}
            >
              <Image
                source={require('../../assets/icons/twitter.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles2.button}
              // onPress={onPress}
            >
              <Image
                source={require('../../assets/icons/facebook.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Facebook</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    // borderColor: "black",
    // borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
  },
});
