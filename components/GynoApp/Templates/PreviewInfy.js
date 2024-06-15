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
import DateTimePicker from '@react-native-community/datetimepicker';
import InsertPresc from '../DBfiles/InsertPresc';

export default function PreviewInfy({navigation, route}) {
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

  const [Patient_Invest, setPatientInvest] = useState(
    Presc_data.patient_invest,
  );
  const [Femp_Date, setFempDate] = useState(Presc_data.femp_date);
  const [Fem_U_Date, setFemUDate] = useState(Presc_data.fem_u_date);
  const [Fem_EB_Date, setFemEBDate] = useState(Presc_data.fem_eb_date);
  const [Fem_H_Date, setFemHDate] = useState(Presc_data.fem_h_date);
  const [Hyst_Date, setHystDate] = useState(Presc_data.hyst_date);
  const [Lap_Date, setLapDate] = useState(Presc_data.lap_date);
  const [Fem_HB, setFemHB] = useState(Presc_data.fem_hb);
  const [Fem_BG, setFemBG] = useState(Presc_data.fem_bg);
  const [Fem_BS, setFemBS] = useState(Presc_data.fem_bs);
  const [Fem_HIV, setFemHIV] = useState(Presc_data.fem_hiv);
  const [Fem_HBsAg, setFemHBsAg] = useState(Presc_data.fem_hbsag);
  const [Fem_VDRL, setFemVDRL] = useState(Presc_data.fem_vdrl);
  const [Fem_LH, setFemLH] = useState(Presc_data.fem_lh);
  const [Fem_FSH, setFemFSH] = useState(Presc_data.fem_fsh);
  const [Fem_TSH, setFemTSH] = useState(Presc_data.fem_tsh);
  const [Fem_E2, setFemE2] = useState(Presc_data.fem_e2);
  const [Fem_AMH, setFemAMH] = useState(Presc_data.fem_amh);
  const [Fem_Prolac, setFemProlac] = useState(Presc_data.fem_prolac);
  const [Fem_USG, setFemUSG] = useState(Presc_data.fem_usg);
  const [Fem_EB, setFemEB] = useState(Presc_data.fem_eb);
  const [Fem_HSG, setFemHSG] = useState(Presc_data.fem_hsg);
  const [Fem_Hystero, setFemHystero] = useState(Presc_data.fem_hystero);
  const [Fem_Lapro, setFemLapro] = useState(Presc_data.fem_lapro);
  const [SDate, setSDate] = useState(Presc_data.sdate);
  const [KDate, setKDate] = useState(Presc_data.kdate);
  const [Husb_Date, setHusbDate] = useState(Presc_data.husb_date);
  const [H_USG_Date, setHUSGDate] = useState(Presc_data.h_usg_date);
  const [HDFI_Date, setHDFIDate] = useState(Presc_data.hdfi_date);
  const [Husb_Invest, setHusbInvest] = useState(Presc_data.husb_invest);
  const [Husb_BG, setHusbBG] = useState(Presc_data.husb_bg);
  const [Husb_BS, setHusbBS] = useState(Presc_data.husb_bs);
  const [Husb_HIV, setHusbHIV] = useState(Presc_data.husb_hiv);
  const [Husb_HBsAg, setHusbHBsAg] = useState(Presc_data.husb_hbsag);
  const [Husb_VDRL, setHusbVDRL] = useState(Presc_data.husb_vdrl);
  const [Semen, setSemen] = useState(Presc_data.semen);
  const [Husb_USG, setHusbUSG] = useState(Presc_data.husb_usg);
  const [Husb_DFI, setHusbDFI] = useState(Presc_data.husb_dfi);
  const [Husb_Karyo, setHusbKaryo] = useState(Presc_data.husb_karyo);
  const [InferNotes, setInferNotes] = useState(Presc_data.inferNotes);

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

        femPDate: Femp_Date,
        fUDate: Fem_U_Date,
        fEBDate: Fem_EB_Date,
        fHDate: Fem_H_Date,
        hystDate: Hyst_Date,
        lapDate: Lap_Date,
        husbDate: Husb_Date,
        sDate: SDate,
        hUsgDate: H_USG_Date,
        hDfiDate: HDFI_Date,
        kDate: KDate,
        fHb: Fem_HB,
        fBG: Fem_BG,
        hBG: Husb_BG,
        fBS: Fem_BS,
        hBS: Husb_BS,
        fHbsAg: Fem_HBsAg,
        hHBsAg: Husb_HBsAg,
        fHIV: Fem_HIV,
        hHIV: Husb_HIV,
        fVDRL: Fem_VDRL,
        hVDRL: Husb_VDRL,
        fLH: Fem_LH,
        fFSH: Fem_FSH,
        fTSH: Fem_TSH,
        fE2: Fem_E2,
        fAMH: Fem_AMH,
        fPro: Fem_Prolac,
        fUsg: Fem_USG,
        fEB: Fem_EB,
        fHsg: Fem_HSG,
        hyst: Fem_Hystero,
        lap: Fem_Lapro,
        semen: Semen,
        hUsg: Husb_USG,
        hDfi: Husb_DFI,
        karyo: Husb_Karyo,
        inferNotes: InferNotes,
        patInvNotes: Patient_Invest,
        husbInvNotes: Husb_Invest,
      };

      console.log('New Presc', Insert_data);

      // InsertPresc(Insert_data);

      console.log('Prescription changes saved!');

      // navigation.goBack();
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
          <Text style={styles.quesText}>Patient Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Patient_Invest}
            editable={editMode}
            onChangeText={editMode ? setPatientInvest : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female P Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Femp_Date}
            editable={editMode}
            onChangeText={editMode ? setFempDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female U Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_U_Date}
            editable={editMode}
            onChangeText={editMode ? setFemUDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female EB Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_EB_Date}
            editable={editMode}
            onChangeText={editMode ? setFemEBDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female H Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_H_Date}
            editable={editMode}
            onChangeText={editMode ? setFemHDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hysteroscopy Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Hyst_Date}
            editable={editMode}
            onChangeText={editMode ? setHystDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Laparoscropy Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Lap_Date}
            editable={editMode}
            onChangeText={editMode ? setLapDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female HB</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_HB}
            editable={editMode}
            onChangeText={editMode ? setFemHB : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female Blood Group</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_BG}
            editable={editMode}
            onChangeText={editMode ? setFemBG : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female Blood Sugar</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_BS}
            editable={editMode}
            onChangeText={editMode ? setFemBS : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female HIV</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_HIV}
            editable={editMode}
            onChangeText={editMode ? setFemHIV : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female HBsAg</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_HBsAg}
            editable={editMode}
            onChangeText={editMode ? setFemHBsAg : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female VDRL</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_VDRL}
            editable={editMode}
            onChangeText={editMode ? setFemVDRL : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female LH</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_LH}
            editable={editMode}
            onChangeText={editMode ? setFemLH : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female FSH</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_FSH}
            editable={editMode}
            onChangeText={editMode ? setFemFSH : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female TSH</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_TSH}
            editable={editMode}
            onChangeText={editMode ? setFemTSH : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female E2</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_E2}
            editable={editMode}
            onChangeText={editMode ? setFemE2 : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female AMH</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_AMH}
            editable={editMode}
            onChangeText={editMode ? setFemAMH : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female Prolac</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_Prolac}
            editable={editMode}
            onChangeText={editMode ? setFemProlac : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female USG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_USG}
            editable={editMode}
            onChangeText={editMode ? setFemUSG : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female EB</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_EB}
            editable={editMode}
            onChangeText={editMode ? setFemEB : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female HSG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_HSG}
            editable={editMode}
            onChangeText={editMode ? setFemHSG : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female Hysteroscopy</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_Hystero}
            editable={editMode}
            onChangeText={editMode ? setFemHystero : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Female Laparoscopy</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fem_Lapro}
            editable={editMode}
            onChangeText={editMode ? setFemLapro : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>S Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={SDate}
            editable={editMode}
            onChangeText={editMode ? setSDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>K Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={KDate}
            editable={editMode}
            onChangeText={editMode ? setKDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_Date}
            editable={editMode}
            onChangeText={editMode ? setHusbDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband USG Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={H_USG_Date}
            editable={editMode}
            onChangeText={editMode ? setHUSGDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>HDFI Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HDFI_Date}
            editable={editMode}
            onChangeText={editMode ? setHDFIDate : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_Invest}
            editable={editMode}
            onChangeText={editMode ? setHusbInvest : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband Blood Group</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_BG}
            editable={editMode}
            onChangeText={editMode ? setHusbBG : undefined}
          />
        </View>

        {/* Continue the pattern for the remaining states */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband Blood Sugar</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_BS}
            editable={editMode}
            onChangeText={editMode ? setHusbBS : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband HIV</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_HIV}
            editable={editMode}
            onChangeText={editMode ? setHusbHIV : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband HBsAg</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_HBsAg}
            editable={editMode}
            onChangeText={editMode ? setHusbHBsAg : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband VDRL</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_VDRL}
            editable={editMode}
            onChangeText={editMode ? setHusbVDRL : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Semen</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Semen}
            editable={editMode}
            onChangeText={editMode ? setSemen : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband USG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_USG}
            editable={editMode}
            onChangeText={editMode ? setHusbUSG : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband DFI</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_DFI}
            editable={editMode}
            onChangeText={editMode ? setHusbDFI : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband Karyo</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husb_Karyo}
            editable={editMode}
            onChangeText={editMode ? setHusbKaryo : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Infertility Notes</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={InferNotes}
            editable={editMode}
            onChangeText={editMode ? setInferNotes : undefined}
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
