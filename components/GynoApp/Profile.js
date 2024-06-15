import {useCallback} from 'react';
import {useState, useEffect, useFocusEffect} from 'react';
import {
  ScrollView,
  // FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {useAppContext} from '../AppContext';
import GetDocDetails from './DBfiles/GetDocDetails';
import UpdateDoc from './DBfiles/UpdateDoc';

export default function Profile({navigation}) {
  const {docNmc} = useAppContext();

  const [docData, setDocData] = useState([]);

  // console.log('Inside Profile');

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('Inside UseFocusEffect');
  //     GetDocDetails(docNmc)
  //       .then(result => {
  //         setDocData(result);
  //       })
  //       .catch(error => {
  //         console.log('Error fetching data: ', error);
  //       });
  //   }, []),
  // );

  useEffect(() => {
    // This code will run once when the component mounts
    GetDocDetails(docNmc)
      .then(result => {
        setDocData(result);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, []); // The empty dependency array [] ensures this effect runs only once

  // console.log('Docdata', docData);

  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [qualification, setQualification] = useState('');
  let [designation, setDesignation] = useState('');
  let [clinicN, setClinicN] = useState('');
  let [address, setAddress] = useState('');
  let [clinicP, setClinicP] = useState('');

  // Set state variables once docData is available
  useEffect(() => {
    if (docData.length > 0) {
      const {
        // doc_id,
        doc_name,
        doc_contact_id,
        email,
        qualification,
        designation,
        clinic,
        address,
        clinic_phn,
      } = docData[0];
      setName(doc_name);
      setPhone(doc_contact_id?.toString());
      setEmail(email);
      setQualification(qualification);
      setDesignation(designation);
      setClinicN(clinic);
      setAddress(address);
      setClinicP(clinic_phn?.toString());
    }
  }, [docData]);

  function updateDoc() {
    console.log('Updating Doc Details');

    let docInfo = {
      name,
      phone,
      email,
      qualification,
      designation,
      clinicN,
      address,
      clinicP,
      docNmc,
    };
    console.log('Just Before Updating', docInfo);

    UpdateDoc(docInfo);

    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Edit your Profile Here</Text>
        {/* <Text>Prescriptions</Text> */}
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.quesText}>Full Name</Text>
        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            value={name}
            // placeholder="Name"
            placeholderTextColor="grey"
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="Phone"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={value => setPhone(value)}
            value={phone}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={value => setEmail(value)}
            value={email}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Personal Qualifications</Text>
          <TextInput
            style={styles.textInput}
            // placeholder=""
            placeholderTextColor="grey"
            onChangeText={value => setQualification(value)}
            value={qualification}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Designation / Hospital Affliation</Text>
          <TextInput
            style={styles.textInput}
            // placeholder=""
            placeholderTextColor="grey"
            onChangeText={value => setDesignation(value)}
            value={designation}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Name</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="Clinic Name"
            placeholderTextColor="grey"
            onChangeText={value => setClinicN(value)}
            value={clinicN}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Address</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="Clinic Address"
            placeholderTextColor="grey"
            onChangeText={value => setAddress(value)}
            value={address}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Phone</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="Clinic Ph Number"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={value => setClinicP(value)}
            value={clinicP}
          />
        </View>
        {/* <View style={styles.ques}>
          <Text>Clinic Logo</Text>
        </View> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <TouchableOpacity style={styles.button_to} onPress={updateDoc}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Update Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
