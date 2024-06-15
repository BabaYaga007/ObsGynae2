/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from '../../assets/Style/styles.js';
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import SetUser from './DBfiles/SetUser.js';
import SetDoctor from './DBfiles/SetDoctor.js';

// const db = openDatabase({
//   name: 'OBGYNdb',
//   createFromLocation: '~OBGYNdb.db',
//   location: 'Library',
// });

export default function Register({navigation}) {
  // var db = openDatabase({name: 'OBGYNdb.db'});

  // let [clinic_id, setClinicId] = useState('A001');
  let [doc_name, setDocName] = useState('');
  //let [role_id, setRoleId] = useState('1');
  let [nmc, setnmc] = useState('');
  let [pwd, setpwd] = useState('');
  let [doc_contact_id, setDocContactId] = useState('');
  let [email_id, setEmailId] = useState('');
  let [qualification, setQualification] = useState('');
  let [designation, setDesignation] = useState('');
  let [clinic, setClinic] = useState('');
  let [address, setAddress] = useState('');
  let [clinic_phn, setClinicPhn] = useState('');
  let status = 1;
  let role_id = 1;
  let clinic_id = '111';
  let [logo, setlogo] = useState('LOGO');

  // const SignIn = ({ navigation }) => {

  let registerUser = () => {
    // let [email_id, setEmailId] = useState('');
    console.log(
      doc_name,
      role_id,
      nmc,
      doc_contact_id,
      qualification,
      designation,
      clinic,
      address,
      clinic_phn,
      logo,
    );

    if (!doc_name) {
      alert('Please fill name');
      return;
    }
    if (!doc_contact_id) {
      alert('Please fill Contact Number');
      return;
    }
    if (!nmc) {
      alert('Please fill NMC');
      return;
    }

    if (!pwd) {
      alert('Please set 5 digit password');
      return;
    }

    if (!email_id) {
      alert('Please fill Email Address');
      return;
    }
    if (!qualification) {
      alert('Please fill Qualification');
      return;
    }
    if (!designation) {
      alert('Please fill Designation');
      return;
    }

    if (!clinic) {
      alert('Please fill Clinic');
      return;
    }

    if (!address) {
      alert('Please fill Address');
      return;
    }

    if (!clinic_phn) {
      alert('Please fill Clinic Phone');
      return;
    }

    console.log(
      'nmc:' +
        nmc +
        'userid:' +
        doc_contact_id +
        'role:' +
        role_id +
        'pwd:' +
        pwd,
      'status:' + status,
    );

    const userInfo = {nmc, doc_contact_id, role_id, pwd, status};

    SetUser(userInfo);

    const docInfo = {
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
    };

    SetDoctor(docInfo);
    navigation.navigate('SignIn');

    // db.transaction(function (txn) {
    //   console.log(
    //     'Alert Amit is happyNow' +
    //       'nmc:' +
    //       nmc +
    //       'doccontactid:' +
    //       doc_contact_id +
    //       'role:' +
    //       role_id +
    //       'pwd:' +
    //       pwd +
    //       'status:' +
    //       status,
    //   );

    //   txn.executeSql(
    //     'INSERT INTO tblUserMaster (user_id,doc_contact_id, role_id,pwd,status,created_dt) VALUES (?,?,?,?,?,?)',
    //     [nmc, doc_contact_id, role_id, pwd, status],
    //     (txn, results) => {
    //       console.log('Results UserMaster', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         console.log('Alert here User Master');
    //         alert(
    //           'Success',
    //           'You User Registered Successfully',
    //           [
    //             {
    //               text: 'Ok',
    //             },
    //           ],
    //           {cancelable: false},
    //         );
    //       } else
    //         console.log(
    //           'user registration failed ' +
    //             'nmc:' +
    //             nmc +
    //             'userid:' +
    //             doc_contact_id +
    //             'role:' +
    //             role_id +
    //             'pwd:' +
    //             pwd,
    //         ) +
    //           'status:' +
    //           status;
    //     },
    //   ),
    //     error => {
    //       console.log('error: UsrMaster' + error);
    //     };
    // });
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Text>Enter your phone number or state medical number</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Full Name"
            placeholderTextColor="grey"
            onChangeText={doc_Name => setDocName(doc_Name)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>NMC Number</Text>
          <TextInput
            style={styles.textInput}
            // inputMode="numeric"
            placeholder="NMC"
            placeholderTextColor="grey"
            onChangeText={nmc => setnmc(nmc)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Password</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="PWD"
            placeholderTextColor="grey"
            onChangeText={pwd => setpwd(pwd)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={doc_contact_id => setDocContactId(doc_contact_id)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={email_id => setEmailId(email_id)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Personal Qualifications</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Personal Qualifications"
            placeholderTextColor="grey"
            onChangeText={qualification => setQualification(qualification)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>
            Designation / Hospital Affiliation
          </Text>
          <TextInput
            style={[styles.textInput, style2.fontSize]}
            multiline
            placeholder="Designation / Hospital Affiliation"
            placeholderTextColor="grey"
            onChangeText={designation => setDesignation(designation)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Name</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Clinic Name"
            placeholderTextColor="grey"
            onChangeText={clinic => setClinic(clinic)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Address</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Clinic Address"
            placeholderTextColor="grey"
            onChangeText={address => setAddress(address)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Ph Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Clinic Ph Number"
            placeholderTextColor="grey"
            inputMode="numeric"
            onChangeText={clinic_phn => setClinicPhn(clinic_phn)}
          />
        </View>
        {/* <View style={styles.ques}> */}
        {/* <TextInput style={styles.textInput} placeholder="Clinic Logo" /> */}
        {/* <Text style={styles.quesText}>Clinic Logo</Text> */}
        {/* {resourcePath.data && (
            <Image
              source={{
                uri: 'data:image/jpeg;base64,' + resourcePath.data,
              }}
              style={{width: 100, height: 100}}
            />
          )}
          {resourcePath.uri && (
            <Image
              source={{uri: resourcePath.uri}}
              style={{width: 200, height: 200}}
            />
          )} */}
        {/* <Text style={{alignItems: 'center'}}>{resourcePath.uri}</Text>
          <TouchableOpacity onPress={selectFile} style={styles.button_to}>
            <Text style={styles.button_to_text}>Select File</Text>
          </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
            <Text style={styles.buttonText}>Launch Camera Directly</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}>
            <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity> */}
        {/* </View> */}
        <View>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <TouchableOpacity
            style={styles.button_to}
            // onPress={() => navigation.navigate('Drawer'),}>
            onPress={registerUser}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Submit</Text>
          </TouchableOpacity>
          {/* <Button title="Forgot Password" /> */}

          {/* <View>
            <Text style={{}}>We need permission for the services you use</Text>
            <TouchableOpacity style={({ width: "30%" }, styles.button_to)}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

// }
const style2 = StyleSheet.create({
  fontSize: {
    fontSize: 15,
  },
});

// Styles for Image Picker
const styles3 = StyleSheet.create({
  fab: {
    backgroundColor: '#EA5B70',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
