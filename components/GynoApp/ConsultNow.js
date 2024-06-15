/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import PatCard from './PatCard';
import {useAppContext} from '../AppContext';

export default function ConsultNow({navigation, route}) {
  const PatInfo = route.params;

  const {docNmc, docName, clinicId} = useAppContext();

  const [presCompl, setPresCompl] = useState('');
  const [medHistory, setMedHistory] = useState('');
  const [presNotes, setPresNotes] = useState('');
  const [investRec, setPresInvest] = useState('');

  let Presc_data = {
    Presc_id: Math.floor(Math.random() * 10000000),
    patId: PatInfo.patient_id,
    patName: PatInfo.pat_name,
    patAge: PatInfo.pat_age,
    patPhone: PatInfo.pat_phone,
    patHeight: PatInfo.pat_height,
    patGender: PatInfo.pat_gender,
    // invest_upl1,
    // docNmc,
    // clinicId,
    // docName,
  };

  function handleNext() {
    // if (!presCompl) {
    //   alert('Please fill Presenting Complaints');
    //   return;
    // }
    // if (!medHistory) {
    //   alert('Please fill Medical History');
    //   return;
    // }
    // // if (!presNotes) {
    // //   alert('Please fill Notes');
    // //   return;
    // // }

    // if (!investRec) {
    //   alert('Please fill Investigation Records');
    //   return;
    // }

    Presc_data = {
      ...Presc_data,
      presCompl,
      medHistory,
      presNotes,
      investRec,
    };

    console.log('In Consultation ' + Presc_data);

    navigation.navigate('Prescription', Presc_data);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        {/* <View style={{ marginTop: 0 }}> */}
        <PatCard
          Id={PatInfo.patient_id}
          Name={PatInfo.pat_name}
          Age={PatInfo.pat_age}
          Num={PatInfo.pat_phone}
        />
        {/* </View> */}

        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Presenting Complaints</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Presenting Complaints"
            placeholderTextColor="grey"
            value={presCompl}
            onChangeText={value => setPresCompl(value)}
          />
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Past and Family History</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Medical History"
            placeholderTextColor="grey"
            onChangeText={value => setMedHistory(value)}
            value={medHistory}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Non Printable notes about Patient</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Notes"
            placeholderTextColor="grey"
            onChangeText={value => setPresNotes(value)}
            value={presNotes}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigation Records</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Investigations Record"
            placeholderTextColor="grey"
            onChangeText={value => setPresInvest(value)}
            value={investRec}
          />
        </View>

        {/* <View>s
          <TouchableOpacity></TouchableOpacity>
        </View> */}

        {/* <View>
          <TouchableOpacity style={styles.button_to}>
            <Text style={styles.button_to_text}>Upload Investigations</Text>
          </TouchableOpacity>
        </View> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={styles.button_to_text}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={styles.button_to_text}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
      {/* <FlashMessage
        position="bottom"
        floating="true"
        style={{
          backgroundColor: 'grey',
          height: 55,
          alignSelf: 'center',
          // padding: 0,
        }}
        titleStyle={{fontSize: 18}}
        // statusBarHeight={10}
        duration={2000}
      /> */}
    </View>
  );
}
