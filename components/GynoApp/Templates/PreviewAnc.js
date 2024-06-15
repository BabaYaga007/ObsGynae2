/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import InsertPresc from '../DBfiles/InsertPresc';

export default function PreviewAnc({navigation, route}) {
  const scrollViewRef = useRef(null);
  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  let Presc_data = route.params;

  const [patient_id, setPatientId] = useState(Presc_data.patient_id.toString());
  const [Vitals_Table, setVitalsTable] = useState(Presc_data.vitals);
  const [Presenting_Complaints, setPresentingComplaints] = useState(
    Presc_data.pres_compl,
  );
  const [Medical_History, setMedicalHistory] = useState(Presc_data.med_history);
  const [Physical_Examination, setPhysicalExamination] = useState(
    Presc_data.phy_exam,
  );

  const prov_diag = Presc_data.prov_diag + ' ' + Presc_data.obsFormula;
  const [Provisional_Diagnosis, setProvisionalDiagnosis] = useState(prov_diag);

  const [Investigations_Records, setInvestigationsRecords] = useState(
    Presc_data.invest_rec,
  );
  const [Medicine, setMedicine] = useState(Presc_data.medicine);
  const [Investigations_Advised, setInvestigationsAdvised] = useState(
    Presc_data.fav_invest,
  );
  const [Advise, setAdvise] = useState(Presc_data.fav_advise);
  const [Follow_Up, setFollowUp] = useState(Presc_data.follow_up);

  const [Parity, setParity] = useState(Presc_data.parity);
  const [Baby, setBaby] = useState(Presc_data.baby);
  const [BirthWeight, setBirthWeight] = useState(Presc_data.birth_wt);
  const [Comments, setComments] = useState(Presc_data.comments);
  const [ObstetricHistory, setObstetricHistory] = useState(Presc_data.obs_hist);
  const [Vaccination, setVaccination] = useState(Presc_data.vaccination);
  const [OtherInvestigations, setOtherInvestigations] = useState(
    Presc_data.other_invest,
  );
  const [LastMenstrualPeriod, setLastMenstrualPeriod] = useState(
    Presc_data.lmp_date,
  );

  const [Gravida, setGravida] = useState(Presc_data.gravida);
  const [Year, setYear] = useState(Presc_data.birth_year);
  // const [Gestational_Age, setGestationalAge] = useState(Presc_data.pog);
  const [Mode_of_Birth, setModeOfBirth] = useState(Presc_data.mode_birth);
  const [Outcome, setOutcome] = useState(Presc_data.outcome);
  const [USG_Date, setUSGDate] = useState(Presc_data.usg_date);
  const [POG, setPOG] = useState(Presc_data.pog);
  const [USG_Summary, setUSGSummary] = useState(Presc_data.usg_summary);
  const [Placenta, setPlacenta] = useState(Presc_data.placenta);
  const [Liquor, setLiquor] = useState(Presc_data.liquor);
  const [Ante_Date, setAnteDate] = useState(Presc_data.antem_date);
  const [AntePOG, setAntePOG] = useState(Presc_data.antem_pog);
  const [Wt, setWt] = useState(Presc_data.antem_wt);
  const [BP, setBP] = useState(Presc_data.antem_bp);
  const [Pallor, setPallor] = useState(Presc_data.antem_pallor);
  const [Pedal_Edema, setPedalEdema] = useState(Presc_data.antem_ped);
  const [O_E, setOE] = useState(Presc_data.antem_oe);
  const [BG, setBG] = useState(Presc_data.bg);
  const [Rubella_IgG, setRubellaIgG] = useState(Presc_data.rubella);
  const [Husband_BG, setHusbandBG] = useState(Presc_data.antem_h_bg);
  const [HPLC, setHPLC] = useState(Presc_data.hplc);
  const [ICT1, setICT1] = useState(Presc_data.ict_1visit);
  const [HIV, setHIV] = useState(Presc_data.hiv);
  const [ICT2, setICT2] = useState(Presc_data.ict_2visit);
  const [HBsAg, setHBsAg] = useState(Presc_data.hbsag);
  const [ICT3, setICT3] = useState(Presc_data.ict_3visit);
  const [HCV, setHCV] = useState(Presc_data.hcv);
  const [Anti_D, setAntiD] = useState(Presc_data.anti_D);
  const [VDRL, setVDRL] = useState(Presc_data.vdrl);
  const [Hb1, setHb1] = useState(Presc_data.hb_1);
  const [Hb2, setHb2] = useState(Presc_data.hb_2);
  const [Hb3, setHb3] = useState(Presc_data.hb_3);
  const [Urine_Culture, setUrineCulture] = useState(Presc_data.urine);
  const [Td, setTd] = useState(Presc_data.td);
  const [GTT1, setGTT1] = useState(Presc_data.gtt_1);
  const [GTT2, setGTT2] = useState(Presc_data.gtt_2);
  const [GTT3, setGTT3] = useState(Presc_data.gtt_3);
  const [TDaP, setTDaP] = useState(Presc_data.tdap);
  const [Fluvac, setFluvac] = useState(Presc_data.fluvac);
  const [TSH3, setTSH3] = useState(Presc_data.tsh_3);
  const [TSH1, setTSH1] = useState(Presc_data.tsh_1);
  const [TSH2, setTSH2] = useState(Presc_data.tsh_2);
  const [Dual_Screen, setDualScreen] = useState(Presc_data.dual_screen);
  const [Quad_Screen, setQuadScreen] = useState(Presc_data.quad_screen);
  const [NIPT, setNIPT] = useState(Presc_data.nipt);

  const [ICT1_Date, setICT1Date] = useState(Presc_data.ict_1date);
  const [ICT2_Date, setICT2Date] = useState(Presc_data.ict_2date);
  const [ICT3_Date, setICT3Date] = useState(Presc_data.ict_3date);
  const [HB1_Date, setHB1Date] = useState(Presc_data.hb_1date);
  const [HB2_Date, setHB2Date] = useState(Presc_data.hb_2date);
  const [HB3_Date, setHB3Date] = useState(Presc_data.hb_3date);
  const [GTT1_Date, setGTT1Date] = useState(Presc_data.gtt_1date);
  const [GTT2_Date, setGTT2Date] = useState(Presc_data.gtt_2date);
  const [GTT3_Date, setGTT3Date] = useState(Presc_data.gtt_3date);
  const [TSH1_Date, setTSH1Date] = useState(Presc_data.tsh_1date);
  const [TSH2_Date, setTSH2Date] = useState(Presc_data.tsh_2date);
  const [TSH3_Date, setTSH3Date] = useState(Presc_data.tsh_3date);

  const routes = navigation.getState()?.routes;
  let prevRoute = routes[routes.length - 2];

  prevRoute = prevRoute.key.slice(0, 7);

  // console.log('Previous Route ', prevRoute);

  const [editMode, setEditMode] = useState(prevRoute !== 'PatInfo');

  // console.log('Mode ', editMode);

  const Change_Presc = () => {
    if (editMode) {
      const insert_data = {
        patId: Presc_data.patient_id,
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
        form: Presc_data.form,
        presNotes: Presc_data.pres_notes,
        weight: Presc_data.weight,
        bp: Presc_data.blood_press,
        pEdema: Presc_data.pedal_ed,
        pallor: Presc_data.pallor,
        sPS: Presc_data.spot_bs,
        pulse: Presc_data.pulse,

        gravida: Gravida,
        birth_year: Year,
        parity: Parity, // You need to add the parity state if it's not already defined
        mode_birth: Mode_of_Birth,
        outcome: Outcome,
        baby: Baby, // You need to add the baby state if it's not already defined
        birth_wt: BirthWeight, // You need to add the birth_wt state if it's not already defined
        comments: Comments, // You need to add the comments state if it's not already defined
        usgDate: new Date(USG_Date),
        pog: POG,
        usgSum: USG_Summary,
        placenta: Placenta,
        liquor: Liquor,
        anteMDate: Ante_Date,
        antePog: AntePOG,
        anteWt: Wt,
        antePE: Pedal_Edema,
        antePallor: Pallor,
        anteBP: BP,
        anteOE: O_E,
        bg: BG,
        rubella: Rubella_IgG,
        husbBg: Husband_BG,
        hplc: HPLC,
        ict1: ICT1,
        ict2: ICT2,
        ict3: ICT3,
        hiv: HIV,
        hcv: HCV,
        hbsag: HBsAg,
        antiD: Anti_D,
        vdrl: VDRL,
        hb1: Hb1,
        hb2: Hb2,
        hb3: Hb3,
        urine: Urine_Culture,
        td: Td,
        gtt1: GTT1,
        gtt2: GTT2,
        gtt3: GTT3,
        tDaP: TDaP,
        fluvac: Fluvac,
        tsh1: TSH1,
        tsh2: TSH2,
        tsh3: TSH3,
        dualS: Dual_Screen,
        quadS: Quad_Screen,
        nipt: NIPT,
        obs_hist: ObstetricHistory, // You need to add the obs_hist state if it's not already defined
        vaccination: Vaccination, // You need to add the vaccination state if it's not already defined
        otherInv: OtherInvestigations, // You need to add the otherInv state if it's not already defined
        lmp: LastMenstrualPeriod, // You need to add the lmp state if it's not already defined
        ict1D: ICT1_Date,
        ict2D: ICT2_Date,
        ict3D: ICT3_Date,
        hb1D: HB1_Date,
        hb2D: HB2_Date,
        hb3D: HB3_Date,
        gtt1D: GTT1_Date,
        gtt2D: GTT2_Date,
        gtt3D: GTT3_Date,
        tsh1D: TSH1_Date,
        tsh2D: TSH2_Date,
        tsh3D: TSH3_Date,
      };

      console.log('LMP 2', insert_data.lmp);

      // console.log('New Presc', insert_data);

      // InsertPresc(insert_data);

      // console.log('Prescription changes saved!');

      // navigation.goBack();
    } else {
      // Implement logic to switch to edit mode
      console.log('Switching to edit mode...');
      setEditMode(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer} ref={scrollViewRef}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Patient Id</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={patient_id}
            editable={false}
          />
        </View>

        <Button title="Scroll to Bottom" onPress={scrollToBottom} />

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

        {/* Starting for ANC */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Gravida</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Gravida}
            editable={editMode}
            onChangeText={editMode ? setGravida : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Year</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Year}
            editable={editMode}
            onChangeText={editMode ? setYear : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Parity</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Parity}
            editable={editMode}
            onChangeText={editMode ? setParity : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Mode of Birth</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Mode_of_Birth}
            editable={editMode}
            onChangeText={editMode ? setModeOfBirth : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Outcome</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Outcome}
            editable={editMode}
            onChangeText={editMode ? setOutcome : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Baby</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Baby}
            editable={editMode}
            onChangeText={editMode ? setBaby : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Weight</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={BirthWeight}
            editable={editMode}
            onChangeText={editMode ? setBirthWeight : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Comments</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Comments}
            editable={editMode}
            onChangeText={editMode ? setComments : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={USG_Date}
            editable={editMode}
            onChangeText={editMode ? setUSGDate : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>POG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={POG}
            editable={editMode}
            onChangeText={editMode ? setPOG : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Summary</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={USG_Summary}
            editable={editMode}
            onChangeText={editMode ? setUSGSummary : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Placenta</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Placenta}
            editable={editMode}
            onChangeText={editMode ? setPlacenta : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Liquor</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Liquor}
            editable={editMode}
            onChangeText={editMode ? setLiquor : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal M Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Ante_Date}
            editable={editMode}
            onChangeText={editMode ? setAnteDate : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal POG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={AntePOG}
            editable={editMode}
            onChangeText={editMode ? setAntePOG : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal Wt</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Wt}
            editable={editMode}
            onChangeText={editMode ? setWt : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal Pedal Edema</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Pedal_Edema}
            editable={editMode}
            onChangeText={editMode ? setPedalEdema : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal Pallor</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Pallor}
            editable={editMode}
            onChangeText={editMode ? setPallor : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Antenatal Blood Pressure</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={BP}
            editable={editMode}
            onChangeText={editMode ? setBP : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>O/E</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={O_E}
            editable={editMode}
            onChangeText={editMode ? setOE : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Blood Group</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={BG}
            editable={editMode}
            onChangeText={editMode ? setBG : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Rubella IgG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Rubella_IgG}
            editable={editMode}
            onChangeText={editMode ? setRubellaIgG : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Husband's Blood Group</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Husband_BG}
            editable={editMode}
            onChangeText={editMode ? setHusbandBG : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>HPLC</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HPLC}
            editable={editMode}
            onChangeText={editMode ? setHPLC : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 1 Result</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT1}
            editable={editMode}
            onChangeText={editMode ? setICT1 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 2 Result</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT2}
            editable={editMode}
            onChangeText={editMode ? setICT2 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 3 Result</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT3}
            editable={editMode}
            onChangeText={editMode ? setICT3 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>HIV</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HIV}
            editable={editMode}
            onChangeText={editMode ? setHIV : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>HCV</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HCV}
            editable={editMode}
            onChangeText={editMode ? setHCV : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>HBsAg</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HBsAg}
            editable={editMode}
            onChangeText={editMode ? setHBsAg : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Anti D</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Anti_D}
            editable={editMode}
            onChangeText={editMode ? setAntiD : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>VDRL</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={VDRL}
            editable={editMode}
            onChangeText={editMode ? setVDRL : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 1</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Hb1}
            editable={editMode}
            onChangeText={editMode ? setHb1 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 2</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Hb2}
            editable={editMode}
            onChangeText={editMode ? setHb2 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 3</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Hb3}
            editable={editMode}
            onChangeText={editMode ? setHb3 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Urine Culture</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Urine_Culture}
            editable={editMode}
            onChangeText={editMode ? setUrineCulture : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Td</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Td}
            editable={editMode}
            onChangeText={editMode ? setTd : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 1</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT1}
            editable={editMode}
            onChangeText={editMode ? setGTT1 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 2</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT2}
            editable={editMode}
            onChangeText={editMode ? setGTT2 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 3</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT3}
            editable={editMode}
            onChangeText={editMode ? setGTT3 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TDaP</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TDaP}
            editable={editMode}
            onChangeText={editMode ? setTDaP : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Fluvac</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Fluvac}
            editable={editMode}
            onChangeText={editMode ? setFluvac : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 1</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH1}
            editable={editMode}
            onChangeText={editMode ? setTSH1 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 2</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH2}
            editable={editMode}
            onChangeText={editMode ? setTSH2 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 3</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH3}
            editable={editMode}
            onChangeText={editMode ? setTSH3 : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Dual Screen</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Dual_Screen}
            editable={editMode}
            onChangeText={editMode ? setDualScreen : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Quad Screen</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Quad_Screen}
            editable={editMode}
            onChangeText={editMode ? setQuadScreen : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>NIPT</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={NIPT}
            editable={editMode}
            onChangeText={editMode ? setNIPT : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Obs History</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ObstetricHistory}
            editable={editMode}
            onChangeText={editMode ? setObstetricHistory : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Vaccination</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={Vaccination}
            editable={editMode}
            onChangeText={editMode ? setVaccination : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Other Investigation</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={OtherInvestigations}
            editable={editMode}
            onChangeText={editMode ? setOtherInvestigations : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>LMP</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={LastMenstrualPeriod}
            editable={editMode}
            onChangeText={editMode ? setLastMenstrualPeriod : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 1 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT1_Date}
            editable={editMode}
            onChangeText={editMode ? setICT1Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 2 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT2_Date}
            editable={editMode}
            onChangeText={editMode ? setICT2Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 3 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={ICT3_Date}
            editable={editMode}
            onChangeText={editMode ? setICT3Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 1 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HB1_Date}
            editable={editMode}
            onChangeText={editMode ? setHB1Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 2 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HB2_Date}
            editable={editMode}
            onChangeText={editMode ? setHB2Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hb 3 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={HB3_Date}
            editable={editMode}
            onChangeText={editMode ? setHB3Date : undefined}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 1 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT1_Date}
            editable={editMode}
            onChangeText={editMode ? setGTT1Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 2 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT2_Date}
            editable={editMode}
            onChangeText={editMode ? setGTT2Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>GTT 3 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={GTT3_Date}
            editable={editMode}
            onChangeText={editMode ? setGTT3Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 1 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH1_Date}
            editable={editMode}
            onChangeText={editMode ? setTSH1Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 2 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH2_Date}
            editable={editMode}
            onChangeText={editMode ? setTSH2Date : undefined}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TSH 3 Date</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={TSH3_Date}
            editable={editMode}
            onChangeText={editMode ? setTSH3Date : undefined}
          />
        </View>

        <Button title="Scroll to Top" onPress={scrollToTop} />

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
