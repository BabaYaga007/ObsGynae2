/* eslint-disable prettier/prettier */
import {useState} from 'react';
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
import {useAppContext} from '../../AppContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import InsertPresc from '../DBfiles/InsertPresc';

export default function PreviewSurg({navigation, route}) {
  let Presc_data = route.params;

  const [patient_id, setPatientId] = useState(Presc_data.patient_id.toString());
  // const [Patient_id, setPatientId] = useState(Presc_data.Patient_id.toString());
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

  const [surg, setSurg] = useState(Presc_data.surg_pro);
  const [intra, setIntra] = useState(Presc_data.surg_find);

  // console.log('PrescInfo =', Presc_data);

  const routes = navigation.getState()?.routes;
  let prevRoute = routes[routes.length - 2];

  prevRoute = prevRoute.key.slice(0, 7);

  // console.log('Previous Route ', prevRoute);

  const [editMode, setEditMode] = useState(prevRoute !== 'PatInfo');

  // console.log('Mode ', editMode);

  const Change_Presc = () => {
    if (editMode) {
      // Implement logic to save prescription changes

      // console.log(
      //   'vitals: ',
      //   Vitals_Table,
      //   ' pres_compl: ',
      //   Presenting_Complaints,
      //   ' med_history: ',
      //   Medical_History,
      //   'phy_exam: ',
      //   Physical_Examination,
      //   'prov_diag: ',
      //   Provisional_Diagnosis,
      //   'invest_rec: ',
      //   Investigations_Records,
      //   'medicine1: ',
      //   Medicine,
      //   'fav_invest: ',
      //   Investigations_Advised,
      //   'fav_advise: ',
      //   Advise,
      //   'follow_up: ',
      //   Follow_Up,
      // );

      const Insert_data = {
        docNmc: Presc_data.doc_nmc,
        clinicId: Presc_data.clinic_id,
        patName: Presc_data.pat_name,
        patAge: Presc_data.pat_age,
        patPhone: Presc_data.pat_phone,
        patGender: Presc_data.pat_gender,
        patHeight: Presc_data.height,
        vitalsTable: Vitals_Table,
        presCompl: Presenting_Complaints,
        medHistory: Medical_History,
        phyExam: Physical_Examination,
        provDiag: Provisional_Diagnosis,
        investRec: Investigations_Records,
        medicine1: Medicine,
        favInvest: Investigations_Advised,
        favAdvise: Advise,
        followDate: Follow_Up,
        patId: Presc_data.patient_id,
        form: Presc_data.form,
        presNotes: Presc_data.pres_notes,
        weight: Presc_data.weight,
        bp: Presc_data.blood_press,
        pEdema: Presc_data.pedal_ed,
        pallor: Presc_data.pallor,
        sPS: Presc_data.spot_bs,
        pulse: Presc_data.pulse,
        surgPro: surg,
        surgFind: intra,
      };

      // console.log('New Presc', Presc_data);

      InsertPresc(Insert_data);

      console.log('Prescription changes saved!');
      navigation.goBack();
    } else {
      // Implement logic to switch to edit mode
      console.log('Switching to edit mode...');
      setEditMode(true);
    }
  };

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
            editable={editMode}
            onChangeText={editMode ? setVitalsTable : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Presenting Complaints</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Presenting_Complaints}
            editable={editMode}
            onChangeText={editMode ? setPresentingComplaints : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medical History</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Medical_History}
            editable={editMode}
            onChangeText={editMode ? setMedicalHistory : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Physical Examination</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Physical_Examination}
            editable={editMode}
            onChangeText={editMode ? setPhysicalExamination : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Provisional Diagnosis</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Provisional_Diagnosis}
            editable={editMode}
            onChangeText={editMode ? setProvisionalDiagnosis : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigations Records</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Investigations_Records}
            editable={editMode}
            onChangeText={editMode ? setInvestigationsRecords : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medicine</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Medicine}
            editable={editMode}
            onChangeText={editMode ? setMedicine : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigations Advised</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Investigations_Advised}
            editable={editMode}
            onChangeText={editMode ? setInvestigationsAdvised : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Advise</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Advise}
            editable={editMode}
            onChangeText={editMode ? setAdvise : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Follow Up</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Follow_Up}
            editable={editMode}
            onChangeText={editMode ? setFollowUp : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Surgical Procedures</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={surg}
            editable={editMode}
            onChangeText={editMode ? setSurg : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>IntraOperative Findings</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={intra}
            editable={editMode}
            onChangeText={editMode ? setIntra : undefined}
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

          <TouchableOpacity style={styles.button_to} onPress={Change_Presc}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              {editMode ? 'Save Prescription' : 'Edit Prescription'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
