/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PreviewPrsc({navigation, route}) {
  const Presc_data = route.params;

  console.log('At PreviewPrsc = ', Presc_data);

  const [patient_id, setPatientId] = useState(Presc_data.patient_id.toString());
  const [Vitals_Table, setVitalsTable] = useState(Presc_data.vitals);
  const [Presenting_Complaints, setPresentingComplaints] = useState(
    Presc_data.pres_compl,
  );
  const [Medical_History, setMedicalHistory] = useState(Presc_data.med_history);
  const [Physical_Examination, setPhysicalExamination] = useState(
    Presc_data.phy_exam,
  );
  const [Provisional_Diagnosis, setProvisionalDiagnosis] = useState(
    Presc_data.prov_diag,
  );
  const [Investigations_Records, setInvestigationsRecords] = useState(
    Presc_data.invest_rec,
  );
  const [Medicine, setMedicine] = useState(Presc_data.medicine);
  const [Investigations_Advised, setInvestigationsAdvised] = useState(
    Presc_data.fav_invest,
  );
  const [Advise, setAdvise] = useState(Presc_data.fav_advise);
  const [Follow_Up, setFollowUp] = useState(Presc_data.follow_up);

  const routes = navigation.getState()?.routes;
  let prevRoute = routes[routes.length - 2];

  prevRoute = prevRoute.key.slice(0, 7);

  console.log('Previous Route ', prevRoute);

  const [editMode, setEditMode] = useState(prevRoute === 'PatInfo');

  console.log('Mode ', editMode);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Patient Id</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={patient_id}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Vitals Table</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Vitals_Table}
            editable={false}
            // onChangeText={setVitalsTable}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Presenting Complaints</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Presenting_Complaints}
            editable={false}
            // onChangeText={setPresentingComplaints}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medical History</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Medical_History}
            editable={false}
            // onChangeText={setMedicalHistory}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Physical Examination</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Physical_Examination}
            editable={false}
            // onChangeText={setPhysicalExamination}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Provisional Diagnosis</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Provisional_Diagnosis}
            editable={false}
            // onChangeText={setProvisionalDiagnosis}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigations Records</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Investigations_Records}
            editable={false}
            // onChangeText={setInvestigationsRecords}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medicine</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Medicine}
            editable={false}
            // onChangeText={setMedicine}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigations Advised</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Investigations_Advised}
            editable={false}
            // onChangeText={setInvestigationsAdvised}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Advise</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Advise}
            editable={false}
            // onChangeText={setAdvise}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Follow Up</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Follow_Up}
            editable={false}
            // onChangeText={setFollowUp}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            //   onPress={Save_Presc}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Edit Prescription
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
