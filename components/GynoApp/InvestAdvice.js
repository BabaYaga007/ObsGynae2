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
  Alert,
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
import {useAppContext} from '../AppContext';
import InsertPresc from './DBfiles/InsertPresc';
import GetDocDetails from './DBfiles/GetDocDetails';
import {GetInv, GetAdv} from './DBfiles/GetFav';
import {SetAdv, SetInv} from './DBfiles/SetFav';
import {DelAdv, DelInv} from './DBfiles/DelFav';
// import RNFetchBlob from 'rn-fetch-blob';

export default function InvestAdvice({navigation, route}) {
  let [invArray, setInvArray] = useState([]);
  const [refresh1, setRefresh1] = useState(false);
  const [refresh2, setRefresh2] = useState(false);

  useEffect(() => {
    // This code will run once when the component mounts
    GetInv(docNmc)
      .then(result => {
        setInvArray(result);
        // console.log('Incoming Inv  = ', result);
      })
      .catch(error => {
        console.log('Error fetching InvArray from FavInv ', error);
      });
  }, [refresh1]);

  invArray = invArray.reduce(
    (obj, item) => Object.assign(obj, {[item.invest_id]: item.investigation}),
    {},
  );
  const ordered = Object.keys(invArray)
    .sort()
    .reduce((obj, key) => {
      obj[key] = invArray[key];
      return obj;
    }, {});

  const favInvestigations = ordered;

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

  let [advArray, setAdvArray] = useState([]);

  useEffect(() => {
    // This code will run once when the component mounts
    GetAdv(docNmc)
      .then(result => {
        setAdvArray(result);
        console.log('Incoming Advs  = ', result);
      })
      .catch(error => {
        console.log('Error fetching advArray from FavAdv ', error);
      });
  }, [refresh2]);

  advArray = advArray.reduce(
    (obj, item) => Object.assign(obj, {[item.advice_id]: item.advice}),
    {},
  );
  const ordered2 = Object.keys(advArray)
    .sort()
    .reduce((obj, key) => {
      obj[key] = advArray[key];
      return obj;
    }, {});

  const advices = ordered2;

  const [checkbox2States, setCheckbox2States] = useState(initialCheckboxState);

  const handleCheckbox2Toggle = (key, label) => {
    setCheckbox2States({
      ...checkbox2States,
      // [key]: !checkboxStates[key],
      // [key]: favInvestigations[key],
      [key]: !checkbox2States[key] ? label : undefined,
    });
  };

  // const [dropValue, setDrop] = useState('Days');/

  // const dropOptions = [
  //   {
  //     id: '1', // acts as primary key, should be unique and non-empty string
  //     label: 'Days',
  //     value: 'Days',
  //   },
  //   {
  //     id: '2',
  //     label: 'Weeks',
  //     value: 'Weeks',
  //   },
  //   {
  //     id: '3',
  //     label: 'Months',
  //     value: 'Months',
  //   },
  // ];

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

  const {docNmc, docName, clinicId} = useAppContext();

  // let prof_qual, clinicAdd, clinicName, clinicPN, designation;
  const [prof_qual, setProfQual] = useState('');
  const [clinicAdd, setClinicAdd] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicPN, setClinicPn] = useState('');
  const [design, setDesignation] = useState('');
  const [docPhone, setDocPhone] = useState('');
  const [docEmail, setDocEmail] = useState('');
  const [clinicLogo, setClinicLogo] = useState(
    require('../../assets/images/gyno.png'),
  );

  // let clinicLogo = require('../../assets/images/gyno.png');
  // const [advise, setAdvise] = useState('');

  const [docData, setDocData] = useState([]);

  // console.log('Global nmc ' + docNmc);

  useEffect(() => {
    // This code will run once when the component mounts
    GetDocDetails(docNmc)
      .then(result => {
        setDocData(result);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  const handleSave = () => {
    const result = Object.entries(checkboxStates)
      .map(([key, value]) => `${value}`)
      .join('| ');

    // console.log(checkboxStates);

    const result2 = Object.entries(checkbox2States)
      .map(([key, value]) => `${value}`)
      .join('| ');

    // let duration = investNum + ' ' + dropValue;

    let followDate = date.toDateString(); // + ' OR ' + duration;

    Presc_data = {
      ...Presc_data,
      favInvest: result,
      favAdvise: result2,
      followDate,
    };
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
      // setName(doc_name);
      setDocPhone(doc_contact_id.toString());
      setDocEmail(email);
      setProfQual(qualification);
      setDesignation(designation);
      setClinicName(clinic);
      setClinicAdd(address);
      setClinicPn(clinic_phn.toString());
      console.log(
        'Doc Details : ',
        prof_qual,
        clinicAdd,
        clinicName,
        clinicPN,
        design,
      );
    }

    console.log('In InvestAdvice', Presc_data);

    // console.log(prof_qual, clinicAdd, clinicName, clinicPN, designation);
    generatePdf();
  };

  const [pdfFilePath, setPdfFilePath] = useState(null);
  let currentDate = new Date();

  let pdfName =
    Presc_data.patName + '_' + currentDate.toISOString().slice(0, 10);
  // console.log('PadfName =', pdfName);

  function createTemp() {
    let htmlTemplate, templateVariables;

    templateVariables = {
      Dr_Full_Name: docName,
      // Clinic_Logo: clinicLogo,
      Professional_Qualification: prof_qual,
      Clinic_Name: clinicName,
      Clinic_Address: clinicAdd,
      Registration_Number: docNmc,
      Clinic_PhoneNumber: clinicPN,
      Designation_Hospital_Affiliation: design,
      Patient_Name: Presc_data.patName,
      Age: Presc_data.patAge,
      Sex: Presc_data.patGender,
      Height: Presc_data.patHeight,
      Vitals_Table: Presc_data.vitalsTable,
      Date: currentDate.toDateString(),
      Presenting_Complaints: Presc_data.presCompl,
      Medical_History: Presc_data.medHistory,
      Physical_Examination: Presc_data.phyExam,
      Provisional_Diagnosis: Presc_data.provDiag,
      Investigations_Records: Presc_data.investRec,
      // Medicine: Presc_data.medicine1,
      medications: Presc_data.medsEX.map(med => Object.values(med)[0]),
      Investigations_Advised: Presc_data.favInvest,
      Advise: Presc_data.favAdvise,
      Follow_Up: Presc_data.followDate,
      // Sign: require('../../assets/images/Wonho-Signature.png'),
      Patient_id: Presc_data.patId,
      form: Presc_data.form,
    };

    if (Presc_data.form == 'ANC') {
      htmlTemplate = AncPresc;
      // Variables to be filled into the template
      templateVariables = {
        ...templateVariables,

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
        AnteM_Date: Presc_data.anteMDate,
        AntePOG: Presc_data.antePog,
        Wt: Presc_data.anteWt,
        BP: Presc_data.anteBP,
        Pallor: Presc_data.antePallor,
        Pedal_Edema: Presc_data.antePE,
        O_E: Presc_data.anteOE,
        BG: Presc_data.bg,
        Rubella: Presc_data.rubella,
        Husband_BG: Presc_data.husbBg,
        HPLC: Presc_data.hplc,
        ICT1: Presc_data.ict1,
        ICT2: Presc_data.ict2,
        ICT3: Presc_data.ict3,
        HBsAg: Presc_data.hbsag,
        HIV: Presc_data.hiv,
        HCV: Presc_data.hcv,
        Anti_Date: Presc_data.antiD,
        VDRL: Presc_data.vdrl,
        Hb1: Presc_data.hb1,
        Hb2: Presc_data.hb2,
        Hb3: Presc_data.hb3,
        Urine: Presc_data.urine,
        Td: Presc_data.td,
        GTT1: Presc_data.gtt1,
        GTT2: Presc_data.gtt2,
        GTT3: Presc_data.gtt3,
        TDaP: Presc_data.tDaP,
        Fluvac: Presc_data.fluvac,
        TSH3: Presc_data.tsh3,
        TSH1: Presc_data.tsh1,
        TSH2: Presc_data.tsh2,
        Dual_Screen: Presc_data.dualS,
        Quad_Screen: Presc_data.quadS,
        NIPT: Presc_data.nipt,
        HB1D: Presc_data.hb1D,
        HB2D: Presc_data.hb2D,
        HB3D: Presc_data.hb3D,
        GTT1D: Presc_data.gtt1D,
        GTT2D: Presc_data.gtt2D,
        GTT3D: Presc_data.gtt3D,
        TSH3D: Presc_data.tsh3D,
        TSH1D: Presc_data.tsh1D,
        TSH2D: Presc_data.tsh2D,
        ICT1D: Presc_data.ict1D,
        ICT2D: Presc_data.ict2D,
        ICT3D: Presc_data.ict3D,

        // obstetric: Presc_data.obsDataX.map(obs => Object.values(obs)[0]),

        obstetric: Presc_data.obsDataX.map(history => ({
          gravida: history.gravida,
          birth_year: history.birth_year,
          gestational_age: history.parity,
          mode_of_birth: history.mode_birth,
          outcome: history.outcome,
          baby: history.baby,
          birth_wt: history.birth_wt,
          comments: history.comments,
        })),

        usgScan: Presc_data.usgDataX.map(usg => ({
          USG_Date: usg.usg_date,
          POG: usg.pog,
          USG_Summary: usg.usg_sum,
          Placenta: usg.placenta,
          Liquor: usg.liquor,
        })),

        antiMonit: Presc_data.monitX.map(anti => ({
          AnteM_Date: anti.antem_date,
          POG: anti.ante_pog,
          Wt: anti.ante_wt,
          BP: anti.ante_bp,
          Pallor: anti.ante_pal,
          Pedal_Edema: anti.ante_ped,
          O_E: anti.ante_oe,
        })),
      };
    } else if (Presc_data.form == 'PRSC') {
      htmlTemplate = GynaePresc;
      // Variables to be filled into the template
    } else if (Presc_data.form == 'SURG') {
      htmlTemplate = SurgPresc;
      // Variables to be filled into the template
      templateVariables = {
        ...templateVariables,

        surg: Presc_data.surgPro,
        intra: Presc_data.surgFind,
      };
    } else if (Presc_data.form == 'INF') {
      htmlTemplate = InfyPresc;
      // Variables to be filled into the template
      templateVariables = {
        ...templateVariables,

        // Date1: Presc_data.femPDate.toDateString(),
        // Date2: Presc_data.femPDate.toDateString(),
        Date1: Presc_data.femPDate,
        Date2: Presc_data.femPDate,
        Date3: Presc_data.fUDate,
        Date4: Presc_data.fEBDate,
        Date5: Presc_data.fHDate,
        Date6: Presc_data.hystDate,
        Date7: Presc_data.lapDate,
        // Date8: Presc_data.husbDate.toDateString(),
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

    console.log('templateVariables ', templateVariables);

    return {htmlTemplate, templateVariables};
  }
  const generatePdf = async () => {
    const {htmlTemplate, templateVariables} = createTemp();

    Presc_data = {
      ...Presc_data,
      docNmc,
      clinicId,
    };

    // // insert in database;
    InsertPresc(Presc_data);

    // Use Mustache to render the template with variables
    const renderedHtml = mustache.render(htmlTemplate, templateVariables);

    // Configure PDF options
    const options = {
      html: renderedHtml,
      fileName: pdfName,
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
        // type: 'FirstFlow2/pdf',
        type: `${pdfName}/pdf`,
        showApps: true, // Set to true to show a list of available apps
        failOnCancel: false, // Set to true to trigger onError callback if the user cancels
        packageName: 'com.adobe.reader', // Package name of Adobe Acrobat
      };

      await Share.open(options);
    } catch (error) {
      console.error('Error opening PDF in 3rd party app:', error.message);
    }
  };

  const handlePreview = () => {
    if (Presc_data.form == 'ANC') {
      navigation.navigate('PreviewAnc', Presc_data);
    } else if (Presc_data.form == 'SURG') {
      navigation.navigate('PreviewSurg', Presc_data);
    } else if (Presc_data.form == 'INF') {
      navigation.navigate('PreviewInfy', Presc_data);
    } else {
      navigation.navigate('PreviewPrsc', Presc_data);
    }
  };

  function addNevInvest() {
    if (!investName) {
      alert('Please fill Investigation Name');
      return;
    }

    console.log('Adding new Investigation', docNmc, clinicId, investName);

    SetInv({docNmc, clinicId, investName})
      .then(() => {
        setRefresh1(prev => !prev);
        setInvestName('');
      })
      .catch(error => {
        console.log('Error setting new Invest ', error);
      });
  }
  function addNevAdvice() {
    if (!investAdvise) {
      alert('Please fill Advice Name');
      return;
    }

    console.log('Adding new Advice', docNmc, clinicId, investAdvise);

    SetAdv({docNmc, clinicId, investAdvise})
      .then(() => {
        setRefresh2(prev => !prev);
        setInvestAdvise('');
      })
      .catch(error => {
        console.log('Error setting new Advice', error);
      });
  }

  const deleteInv = key => {
    Alert.alert('Delete Investigation', 'Do you want to delete Investigation', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Delete Investigation'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('Deleting the favourite Investigation', key);

          DelInv({docNmc, key})
            .then(() => {
              setRefresh1(prev => !prev);
            })
            .catch(error => {
              console.log('Error deleting new Investigation ', error);
            });
        },
      },
    ]);
  };

  const deleteAdv = key => {
    Alert.alert('Delete Advice', 'Do you want to delete Advice', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Delete Advice'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('Deleting the favourite Advice', key);

          DelAdv({docNmc, key})
            .then(() => {
              setRefresh2(prev => !prev);
            })
            .catch(error => {
              console.log('Error deleting new Advice ', error);
            });
        },
      },
    ]);
  };

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

        <TouchableOpacity style={styles.button_to} onPress={addNevInvest}>
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
                    style={{marginLeft: -10}}
                    key={key}
                    status={checkboxStates[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxToggle(key, label)}
                    label={label} // If your Checkbox component supports a label prop
                    position="leading"
                    labelStyle={{
                      width: '77%',
                      marginLeft: 0,
                      // alignSelf: 'flex-end',
                      textAlign: 'left',
                      // paddingRight: 10,
                    }}
                  />
                  {/* <Text style={styles.presc_text2}>{label}</Text> */}
                  <TouchableOpacity
                    onPress={() => deleteInv(key)}
                    // style={{borderColor: 'red', borderWidth: 1}}
                  >
                    <Image
                      style={styles2.cross}
                      source={require('../../assets/icons/close.png')}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
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

        <TouchableOpacity style={styles.button_to} onPress={addNevAdvice}>
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
              {Object.entries(advices).map(([key, label]) => (
                <View style={styles.presc2} key={key}>
                  <Checkbox.Item
                    key={key}
                    style={{marginLeft: -10}}
                    status={checkbox2States[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckbox2Toggle(key, label)}
                    label={label} // If your Checkbox component supports a label prop
                    position="leading"
                    labelStyle={{
                      width: '77%',
                      marginLeft: 0,
                      // alignSelf: 'flex-end',
                      textAlign: 'left',
                      // paddingRight: 10,
                    }}
                  />
                  {/* <Text style={styles.presc_text2}>{label}</Text> */}
                  <TouchableOpacity
                    onPress={() => deleteAdv(key)}
                    // style={{borderColor: 'red', borderWidth: 1}}
                  >
                    <Image
                      style={styles2.cross}
                      source={require('../../assets/icons/close.png')}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 5,
          }}>
          <TouchableOpacity style={styles.button_to} onPress={handlePreview}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Preview</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleSave}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Save Prescription
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{}}></View>

        {pdfFilePath && (
          <View>
            <TouchableOpacity
              style={styles.button_to}
              // onPress={downloadAndOpenPDF}
              onPress={openPDFInThirdPartyApp}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Click to Share PDF
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 5,
          }}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Invoice', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Invoice</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  presc_text2: {
    color: 'black',
    marginRight: 10,
    fontSize: 16,
    paddingLeft: 10,
    paddingVertical: 2,
    // paddingRight: 22,
    alignSelf: 'center',
    textAlign: 'left',
    flex: 4,

    // paddingRight: 10,
  },
  presc2: {
    // height: 40,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#a5adb8',
    borderRadius: 5,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    // flex: 2,
  },

  cross: {
    flex: 1,
    width: 20,
    maxHeight: 20,
  },
});
