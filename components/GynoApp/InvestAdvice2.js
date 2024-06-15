/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import {useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {Checkbox} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import PatCard from './PatCard';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import mustache from 'mustache';
import Share from 'react-native-share';
import {AncPresc} from './Templates/AncPresc';
import {GynaePresc} from './Templates/GynaePresc';
import {InfyPresc} from './Templates/InfyPresc';
import {SurgPresc} from './Templates/SurgPresc';
// import GeneratePdf from './DBfiles/GeneratePdf';

// const db = openDatabase({
//   name: 'OBGYNdb',
//   createFromLocation: '~OBGYNdb.db',
//   location: 'Library',
// });

export default function InvestAdvice({navigation, route}) {
  const favInvestigations = {
    1: 'USG Whole abdomen & Pelvis',
    2: 'Ultrasound Pelvis - TVS/TAS',
    3: 'Ultrasound for fetal Viability & to confirm intrauterine pregnancy',
    4: 'Ultrasound NT NB Scan with DV, TR, Ut PI at 11-13 weeks, Dual/Double screen -FMF First trimester screen for aneuploidy',
    5: 'Ultrasound Obstetrics Level 2 for anomalies at 19-20 weeks',
    6: 'Ultrasound Obstetrics midtrimester anomaly scan with cervical length estimation by TVS (19-21 weeks Level 2)',
    7: 'Ultrasound Obstetrics for Fetal Echo at 23-24 weeks',
    8: 'Ultrasound Obstetrics for growth parameters, liquor and Doppler',
    9: 'Urine R/M and C/S',
    10: 'Papsmear LBC and HPV',
    11: 'Blood Group',
    12: 'CBC',
    13: 'OGTT 75 gm Glucose Fasting, 1hr, 2hr after glucose',
    14: 'Blood Sugar Fasting & PP',
    15: 'Thyroid Profile FT3, FT4, TSH',
    16: 'PCOS Profile on Day 2-3 of cycle LH FSH TSH, FT3, FT4, Testosterone Free, Serum Prolactin (AMH PLUS) done fasting on Day 2-3 of cycle including AMH, LH, FSH, TSH, FT3, FT4, Testosterone Free, estradiol, Prolactin',
    17: 'ANC profile CBC, Blood Group, OGTT- 75 gm glucose Fasting 1&2 hr, HBsAg, HIV, HCV, VDRL, TSH, HPLC, TORCH IgG IgM, Urine R/m, Husband - Blood Group, HIV, HBsAg, VDRL, HPLC',
    18: 'Blood Group, CBC, PT with INR, BS F& PP, LFT, KFT, HBsAg, HIV, HCV, CXR-PA, ECG',
    19: 'Infertility investigation - Both Husband and Wife -Blood Group, CBC, BS F&PP, HIV, HBsAg, VDRL',
    20: 'Husband Semen Analysis',
    21: 'Anemia Profile (CBC, HPLC for THALESSEMIA Screening, Peripheral smear for type of anemia, Stool for occult blood Serum Iron Studies, Vit B12, Folate Serum Calcium, Vit D3',
    22: '(Fever profile) CBC, TYPHI DOT Antigen, Dengue NS1, Malarial Antigen, LFT, Urine R&M & C/S, Blood Culture',
    23: 'Periconceptional tests ; Blood Group, CBC, BS (R), HBA1C, TSH, FT3, FT4, Rubella IGG and IGM, HPLC',
    24: '(HIRSUTISM PROFILE) done fasting on day 2or 3 of cycle FSH, LH, Testosterone, DHEAs , 17 OHP- 17 Hydroxy progesterone, TSH, FT3, FT4, Sr Prolactin, 24 hr urinary cortisol level',
    25: '(BOH profile) Anticardiolipin Ab IgG & IgM, Beta2 Glycoprotein Ab IgG & IgM, Antiphoshpholipid Ab IgG & IgM, Lupus anticoagulant, Karyotype both partners, Mantoux test',
    26: 'Diabetic Diet 2400 Kcal - 3 major 3 minor meals, BS F and 2 Hr after meals with target BS F less than 95 mg/dl and 2 hr BS less than 120 mg/dl after 1 week',
    27: 'ENDOMETRIAL ASPIRATION after Day 25 of Cycle for ruling out Genital TB(Genexpert +TB CULTURE)',
    28: 'HSG DAY 8 /9/10 of menstrual cycle',
  };

  const initialCheckboxState = {};

  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState);

  const handleCheckboxToggle = (key, label) => {
    setCheckboxStates({
      ...checkboxStates,
      // [key]: !checkboxStates[key],
      // [key]: favInvestigations[key],
      [key]: !checkboxStates[key] ? label : undefined,
    });
  };

  function errorCB(err) {
    console.log('ha ha huhuSQL Error: ' + err.message);
  }

  const [dropValue, setDrop] = useState('Days');

  const dropOptions = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Days',
      value: 'Days',
    },
    {
      id: '2',
      label: 'Weeks',
      value: 'Weeks',
    },
    {
      id: '3',
      label: 'Months',
      value: 'Months',
    },
  ];

  const [advise1, setAdvise1] = useState(false);
  const [advise2, setAdvise2] = useState(false);
  const [advise3, setAdvise3] = useState(false);
  const [advise4, setAdvise4] = useState(false);
  const [advise5, setAdvise5] = useState(false);

  // const [checked6, setChecked6] = useState(false);

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  let Presc_data = route.params;

  const [investName, setInvestName] = useState('');
  const [investAdvise, setInvestAdvise] = useState('');
  const [investNum, setInvestNum] = useState('');

  let prof_qual, clinicAdd, clinicName, clinicPN, designation;
  let clinicLogo = require('../../assets/images/gyno.png');
  const [advise, setAdvise] = useState('');

  // let pdfFilePath;

  const handleNext = () => {
    const result = Object.entries(checkboxStates)
      .map(([key, value]) => `${value}`)
      .join(', ');

    // console.log(checkboxStates);

    let duration = investNum + ' ' + dropValue;

    let favAdvise = '';

    if (advise1) {
      favAdvise += 'Dont Drink Alcohol, ';
    }
    if (advise2) {
      favAdvise += 'No swimming, ';
    }
    if (advise3) {
      favAdvise += 'No smoking, ';
    }
    if (advise4) {
      favAdvise += 'Dont take stress, ';
    }
    if (advise5) {
      favAdvise += 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, ';
    }

    favAdvise = favAdvise.trim();

    let followDate = date.toDateString() + ' OR ' + duration;

    Presc_data = {
      ...Presc_data,
      favInvest: result,
      favAdvise,
      followDate,
    };

    // db.transaction(function (txn) {
    //   console.log('Alert Achint in the happy' + Presc_data.patient_id);

    //   txn.executeSql(
    //     'INSERT INTO TblPrescMaster(patient_id, patName, patAge, patPhone, presCompl, medHistory, presNotes, investRec, phy_exam, vitals, height, weight, blood_press, pulse, spot_bs, pallor, pedal_ed, prov_diag, medicine1, medicine2, medicine3, invest1, invest2, invest3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    //     [
    //       Presc_data.patient_id,
    //       Presc_data.patName,
    //       Presc_data.patAge,
    //       Presc_data.patPhone,
    //       Presc_data.presCompl,
    //       Presc_data.medHistory,
    //       Presc_data.presNotes,
    //       Presc_data.investRec,
    //       Presc_data.phy_exam,
    //       Presc_data.vitals,
    //       Presc_data.height,
    //       Presc_data.weight,
    //       Presc_data.blood_press,
    //       Presc_data.pulse,
    //       Presc_data.spot_bs,
    //       Presc_data.pallor,
    //       Presc_data.pedal_ed,
    //       Presc_data.prov_diag,
    //       Presc_data.medicine1,
    //       Presc_data.medicine1,
    //       Presc_data.medicine1,
    //       Presc_data.investment1,
    //       Presc_data.investment1,
    //       Presc_data.investment1,
    //     ],
    //     (txn, results) => {
    //       console.log('Patient Records inserted');
    //     },
    //     errorCB,
    //     // (txn, results) => {
    //     //   console.log('Results PrescMaster', results.rowsAffected);
    //     //   if (results.rowsAffected > 0) {
    //     //     console.log('Alert here PrescMaster');
    //     //     alert(
    //     //       'Success',
    //     //       'Prescription made Successfully',
    //     //       [
    //     //         {
    //     //           text: 'Ok',
    //     //         },
    //     //       ],
    //     //       {cancelable: false},
    //     //     );
    //     //   } else {
    //     //     console.log('Prescription failed');
    //     //   }
    //     // },
    //   ); // ,
    //   //   error => {
    //   //     console.log('error: PrescMaster' + error);
    //   //   };
    // });

    // navigation.navigate('Invoice');

    console.log(global.nmc);

    // db.transaction(tx => {
    //   console.log('Achints query to fetch doc details');
    //   tx.executeSql(
    //     'SELECT * FROM tblDocMaster where nmc = ?',
    //     [global.nmc],
    //     (tx, results) => {
    //       var len = results.rows.length;
    //       console.log(len);
    //       console.log('Query getDocDetails for PDF executed successfully');
    //       if (len > 0) {
    //         clinicAdd = results.rows.item(0).address;
    //         prof_qual = results.rows.item(0).qualification;
    //         clinicName = results.rows.item(0).clinic;
    //         clinicPN = results.rows.item(0).clinic_phn;
    //         designation = results.rows.item(0).designation;
    //       } else {
    //         console.log('Cannot find Doc Details for PDF');
    //       }
    //     },
    //     errorCB,
    //   );
    // });

    console.log('In InvestAdvice', Presc_data);

    console.log(prof_qual, clinicAdd, clinicName, clinicPN, designation);
    // pdfFilePath = GeneratePdf(Presc_data);
    // console.log(pdfFilePath);

    // async function generateAndHandlePdf() {
    //   try {
    //     pdfFilePath = await GeneratePdf(Presc_data);
    //     console.log('PDF generated successfully. File path:', pdfFilePath);
    //     // Do something with the PDF file path
    //   } catch (error) {
    //     console.error('Error generating PDF:', error);
    //     // Handle the error
    //   }
    // }

    // // Call the async function
    // generateAndHandlePdf();
    generatePdf();
  };

  const [pdfFilePath, setPdfFilePath] = useState(null);
  let currentDate = new Date();

  const generatePdf = async () => {
    // Your HTML template with placeholders for variables
    let htmlTemplate, templateVariables;

    if (Presc_data.form === 'ANC') {
      htmlTemplate = AncPresc;
      // Variables to be filled into the template
      templateVariables = {
        Dr_Full_Name: global.gDocName,
        Clinic_Logo: clinicLogo,
        Professional_Qualification: prof_qual,
        Clinic_Name: clinicName,
        Clinic_Address: clinicAdd,
        Registration_Number: global.gDocNmc,
        Clinic_PhoneNumber: clinicPN,
        Designation_Hospital_Affiliation: designation,
        Patient_Name: Presc_data.patName,
        Age: Presc_data.patAge,
        Sex: 'Female',
        Height: Presc_data.height,
        Vitals_Table: Presc_data.vitalsTable,
        Date: currentDate.toDateString(),
        Presenting_Complaints: Presc_data.presCompl,
        Medical_History: Presc_data.medHistory,
        Physical_Examination: Presc_data.phyExam,
        Provisional_Diagnosis: Presc_data.provDiag,
        // Investigations_Records: Presc_data.patName,
        Medicine: Presc_data.medicine1,
        // Frequency: ,
        // Duration: ,
        Investigations_Advised: Presc_data.favInvest,
        Advise: Presc_data.favAdvise,
        Follow_Up: Presc_data.followDate,
        Sign: require('../../assets/images/Wonho-Signature.png'),
        Gravida: Presc_data.gravida,
        Year: Presc_data.birth_year,
        Gestational_Age: Presc_data.parity,
        Mode_of_Birth: Presc_data.mode_birth,
        Outcome: Presc_data.outcome,
        Baby: Presc_data.baby,
        Birth_Weight: Presc_data.birth_wt,
        Comments: Presc_data.comments,
        USG_Date: Presc_data.usgDate,
        POG: Presc_data.pog,
        USG_Summary: Presc_data.usgSum,
        Placenta: Presc_data.placenta,
        Liquor: Presc_data.liquor,
        Ante_Date: Presc_data.anteMDate,
        AntePOG: Presc_data.antePog,
        Wt: Presc_data.anteWt,
        BP: Presc_data.antePE,
        Pallor: Presc_data.antePallor,
        Pedal_Edema: Presc_data.antePE,
        O_E: Presc_data.anteOE,
        BG: Presc_data.bg,
        Rubella_IgG: Presc_data.rubella,
        Husband_BG: Presc_data.husbBg,
        HPLC: Presc_data.hplc,
        ICT1: Presc_data.ict1,
        HIV: Presc_data.hiv,
        ICT2: Presc_data.ict2,
        HBsAg: Presc_data.hbsag,
        ICT3: Presc_data.ict3,
        HCV: Presc_data.hcv,
        Anti_D: Presc_data.antiD,
        VDRL: Presc_data.vdrl,
        Hb1: Presc_data.hb1,
        Hb2: Presc_data.hb2,
        Hb3: Presc_data.hb3,
        Hb1D: Presc_data.hb1D,
        Hb2D: Presc_data.hb2D,
        Hb3D: Presc_data.hb3D,
        Urine_Culture: Presc_data.urine,
        Td: Presc_data.td,
        ICT1D: Presc_data.ict1Date,
        ICT2D: Presc_data.ict2Date,
        ICT3D: Presc_data.ict3Date,
        GTT1: Presc_data.gtt1,
        GTT2: Presc_data.gtt2,
        GTT3: Presc_data.gtt3,
        GTT1D: Presc_data.gtt1D,
        GTT2D: Presc_data.gtt2D,
        GTT3D: Presc_data.gtt3D,
        TDaP: Presc_data.tDaP,
        Fluvac: Presc_data.fluvac,
        TSH3: Presc_data.tsh3,
        TSH1: Presc_data.tsh1,
        TSH2: Presc_data.tsh2,
        TSH3D: Presc_data.tsh3D,
        TSH1D: Presc_data.tsh1D,
        TSH2D: Presc_data.tsh2D,
        Dual_Screen: Presc_data.dualS,
        Quad_Screen: Presc_data.quadS,
        NIPT: Presc_data.nipt,
      };
    } else if (Presc_data.form === 'PRSC') {
      htmlTemplate = GynaePresc;
      // Variables to be filled into the template
      templateVariables = {
        Dr_Full_Name: global.gDocName,
        Clinic_Logo: clinicLogo,
        Professional_Qualification: prof_qual,
        Clinic_Name: clinicName,
        Clinic_Address: clinicAdd,
        Registration_Number: global.gDocNmc,
        Clinic_PhoneNumber: clinicPN,
        Designation_Hospital_Affiliation: designation,
        Patient_Name: Presc_data.patName,
        Age: Presc_data.patAge,
        Sex: 'Female',
        Height: Presc_data.height,
        Vitals_Table: Presc_data.vitalsTable,
        Date: currentDate.toDateString(),
        Presenting_Complaints: Presc_data.presCompl,
        Medical_History: Presc_data.medHistory,
        Physical_Examination: Presc_data.phyExam,
        Provisional_Diagnosis: Presc_data.provDiag,
        // Investigations_Records: Presc_data.patName,
        Medicine: Presc_data.medicine1,
        // Frequency: ,
        // Duration: ,
        Investigations_Advised: Presc_data.favInvest,
        Advise: Presc_data.favAdvise,
        Follow_Up: Presc_data.followDate,
        Sign: require('../../assets/images/Wonho-Signature.png'),
      };
    } else if (Presc_data.form === 'SURG') {
      htmlTemplate = SurgPresc;
      // Variables to be filled into the template
      templateVariables = {
        Dr_Full_Name: global.gDocName,
        Clinic_Logo: clinicLogo,
        Professional_Qualification: prof_qual,
        Clinic_Name: clinicName,
        Clinic_Address: clinicAdd,
        Registration_Number: global.gDocNmc,
        Clinic_PhoneNumber: clinicPN,
        Designation_Hospital_Affiliation: designation,
        Patient_Name: Presc_data.patName,
        Age: Presc_data.patAge,
        Sex: 'Female',
        Height: Presc_data.height,
        Vitals_Table: Presc_data.vitalsTable,
        Date: currentDate.toDateString(),
        Presenting_Complaints: Presc_data.presCompl,
        Medical_History: Presc_data.medHistory,
        Physical_Examination: Presc_data.phyExam,
        Provisional_Diagnosis: Presc_data.provDiag,
        // Investigations_Records: Presc_data.patName,
        Medicine: Presc_data.medicine1,
        // Frequency: ,
        // Duration: ,
        Investigations_Advised: Presc_data.favInvest,
        Advise: Presc_data.favAdvise,
        Follow_Up: Presc_data.followDate,
        Sign: require('../../assets/images/Wonho-Signature.png'),
        surg: Presc_data.surgPro,
        intra: Presc_data.surgFind,
      };
    } else if (Presc_data.form === 'INF') {
      htmlTemplate = InfyPresc;
      // Variables to be filled into the template
      templateVariables = {
        Dr_Full_Name: global.gDocName,
        Clinic_Logo: clinicLogo,
        Professional_Qualification: prof_qual,
        Clinic_Name: clinicName,
        Clinic_Address: clinicAdd,
        Registration_Number: global.gDocNmc,
        Clinic_PhoneNumber: clinicPN,
        Designation_Hospital_Affiliation: designation,
        Patient_Name: Presc_data.patName,
        Age: Presc_data.patAge,
        Sex: 'Female',
        Height: Presc_data.height,
        Vitals_Table: Presc_data.vitalsTable,
        Date: currentDate.toDateString(),
        Presenting_Complaints: Presc_data.presCompl,
        Medical_History: Presc_data.medHistory,
        Physical_Examination: Presc_data.phyExam,
        Provisional_Diagnosis: Presc_data.provDiag,
        // Investigations_Records: Presc_data.patName,
        Medicine: Presc_data.medicine1,
        // Frequency: ,
        // Duration: ,
        Investigations_Advised: Presc_data.favInvest,
        Advise: Presc_data.favAdvise,
        Follow_Up: Presc_data.followDate,
        Sign: require('../../assets/images/Wonho-Signature.png'),
        Date1: Presc_data.femPDate,
        Date2: Presc_data.femPDate,
        Date3: Presc_data.fUDate,
        Date4: Presc_data.fEBDate,
        Date5: Presc_data.fHDate,
        Date6: Presc_data.hystDate,
        Date7: Presc_data.lapDate,
        Date8: Presc_data.husbDate,
        Date9: Presc_data.sDate,
        Date10: Presc_data.hUsgDate,
        Date11: Presc_data.hDfiDate,
        Date12: Presc_data.kDate,
        HB: Presc_data.fHb,
        BG: Presc_data.fBG,
        HBG: Presc_data.hBG,
        BS: Presc_data.fBS,
        HBS: Presc_data.hBS,
        HBsAg: Presc_data.fHbsAg,
        HHBsAg: Presc_data.hHBsAg,
        HIV: Presc_data.fHIV,
        HHIV: Presc_data.hHIV,
        VDRL: Presc_data.fVDRL,
        HVDRL: Presc_data.hVDRL,
        LH: Presc_data.fLH,
        FSH: Presc_data.fFSH,
        TSH: Presc_data.fTSH,
        E2: Presc_data.fE2,
        AMH: Presc_data.fAMH,
        Prol: Presc_data.fPro,
        USG: Presc_data.fUsg,
        EB: Presc_data.fEB,
        HSG: Presc_data.fHsg,
        Hyster: Presc_data.hyst,
        Laparo: Presc_data.lap,
        semen: Presc_data.semen,
        hUsg: Presc_data.hUsg,
        dfi: Presc_data.hDfi,
        karyo: Presc_data.karyo,
      };
    }

    // Use Mustache to render the template with variables
    const renderedHtml = mustache.render(htmlTemplate, templateVariables);

    // Configure PDF options
    const options = {
      html: renderedHtml,
      fileName: 'FirstFlow3',
      directory: 'Documents',
    };

    try {
      const pdf = await RNHTMLtoPDF.convert(options);
      setPdfFilePath(pdf.filePath);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const openPDFInThirdPartyApp = async () => {
    try {
      // const filePath = '/path-to-your-local-file.pdf'; // Replace with the actual path to your PDF file

      const options = {
        url: `file://${pdfFilePath}`,
        type: 'FirstFlow2/pdf',
        showApps: true, // Set to true to show a list of available apps
        failOnCancel: false, // Set to true to trigger onError callback if the user cancels
        packageName: 'com.adobe.reader', // Package name of Adobe Acrobat
      };

      await Share.open(options);
    } catch (error) {
      console.error('Error opening PDF in 3rd party app:', error.message);
    }
  };

  // const downloadAndOpenPDF = async () => {
  //   try {
  //     // const filePath = '/path-to-your-local-file.pdf'; // Replace with the actual path to your PDF file

  //     // Download the PDF file using rn-fetch-blob
  //     const {config, fs} = RNFetchBlob;
  //     const pdfPath = fs.dirs.DownloadDir + pdfFilePath;

  //     await config({
  //       fileCache: true,
  //       addAndroidDownloads: {
  //         useDownloadManager: true,
  //         notification: true,
  //         mediaScannable: true,
  //         path: pdfPath,
  //       },
  //     }).fetch('GET', `file://${pdfFilePath}`);

  //     // Open the downloaded PDF file with Adobe Acrobat
  //     const options = {
  //       url: `file://${pdfPath}`,
  //       type: 'FirstFlow2/pdf',
  //       showApps: true, // Do not show a list of available apps
  //       packageName: 'com.adobe.reader', // Package name of Adobe Acrobat
  //     };

  //     await Share.open(options);
  //   } catch (error) {
  //     console.error('Error opening PDF in Adobe Acrobat:', error.message);
  //   }
  // };

  // console.log(pdfFilePath);

  ///////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   // Clean up the generated PDF file when the component unmounts
  //   return () => {
  //     if (pdfFilePath) {
  //       RNHTMLtoPDF.delete(pdfFilePath);
  //     }
  //   };
  // }, [pdfFilePath]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigations Advised</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Investigations"
            placeholderTextColor="grey"
            value={investName}
            onChangeText={value => setInvestName(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button_to}
          //   onPress={() => navigation.navigate("AddPatient")}
        >
          <Text style={{fontSize: 18, fontWeight: '600'}}>Add Favourite</Text>
        </TouchableOpacity>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Favourite Investigations</Text>
            <ScrollView nestedScrollEnabled={true} style={{marginVertical: 5}}>
              {Object.entries(favInvestigations).map(([key, label]) => (
                <View style={styles.presc2}>
                  <Checkbox.Item
                    key={key}
                    status={checkboxStates[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxToggle(key)}
                    label={label} // If your Checkbox component supports a label prop
                    position="leading"
                    labelStyle={{
                      marginRight: 10,
                      alignSelf: 'center',
                      textAlign: 'left',
                      paddingRight: 10,
                    }}
                  />
                  {/* <Text style={styles.presc_text2}>{label}</Text> */}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>Follow Up</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Duration"
            placeholderTextColor="grey"
            value={investNum}
            onChangeText={value => setInvestNum(value)}
          />
          <View>
            <Picker
              style={{color: 'black', backgroundColor: 'white'}}
              selectedValue={dropValue}
              dropdownIconColor="black"
              onValueChange={(itemValue, itemIndex) => setDrop(itemValue)}>
              {dropOptions.map(item => (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.ques}>
          {/* <Text style={styles.quesText}>Date of Birth</Text> */}
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              // style={styleSheet.datePicker}
            />
          )}

          {!datePicker && (
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.button_to}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Follow Up Date
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                Set date is : {date.toDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Advise</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Advise"
            placeholderTextColor="grey"
            value={investAdvise}
            onChangeText={value => setInvestAdvise(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button_to}
          //   onPress={() => navigation.navigate("AddPatient")}
        >
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Add Favourite Advice
          </Text>
        </TouchableOpacity>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Favourite Advices</Text>
            <ScrollView nestedScrollEnabled={true} style={{marginVertical: 5}}>
              <TouchableOpacity style={styles.presc}>
                <Text style={styles.presc_text}>Dont Drink Alcohol</Text>

                <Checkbox.Item
                  status={advise1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAdvise1(!advise1);
                  }}
                  pos
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.presc}>
                <Text style={styles.presc_text}>No swimming</Text>
                <Checkbox.Item
                  status={advise2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAdvise2(!advise2);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.presc}>
                <Text style={styles.presc_text}>No Smoking</Text>
                <Checkbox.Item
                  status={advise3 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAdvise3(!advise3);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.presc}>
                <Text style={styles.presc_text}>Dont take stress</Text>
                <Checkbox.Item
                  status={advise4 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAdvise4(!advise4);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.presc}>
                <Text style={styles.presc_text}>
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAasssssssssssssss
                  a
                </Text>
                <Checkbox.Item
                  status={advise5 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAdvise5(!advise5);
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
            onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Save Prescription
            </Text>
          </TouchableOpacity>
        </View>

        {pdfFilePath && (
          <View>
            <TouchableOpacity style={styles.button_to}>
              <Text style={{fontSize: 10, fontWeight: '600'}}>
                PDF Generated: {pdfFilePath}
              </Text>
            </TouchableOpacity>
            {/* </View>
          <View> */}
            <TouchableOpacity style={styles.button_to}>
              <Button
                title="Click to Share PDF"
                // onPress={downloadAndOpenPDF}
                onPress={openPDFInThirdPartyApp}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
