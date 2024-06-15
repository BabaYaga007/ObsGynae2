/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import PatCard from '../PatCard';

export default function FemPartner({navigation, route}) {
  const [patInvNotes, setNotes] = useState();

  const [dropBG, setDropBG] = useState('--');
  const [dropHIV, setDropHIV] = useState('Reactive');
  const [dropHBs, setDropHBs] = useState('Reactive');
  const [dropVDR, setDropVDR] = useState('Reactive');

  const dropBlood = [
    {
      id: '1',
      label: '--',
      value: '--',
    },
    {
      id: '2',
      label: 'A+ve',
      value: 'A+ve',
    },
    {
      id: '3',
      label: 'B+ve',
      value: 'B+ve',
    },
    {
      id: '4',
      label: 'AB+ve',
      value: 'AB+ve',
    },
    {
      id: '5',
      label: 'O+ve',
      value: 'O+ve',
    },
    {
      id: '6',
      label: 'A-ve',
      value: 'A-ve',
    },
    {
      id: '7',
      label: 'B-ve',
      value: 'B-ve',
    },
    {
      id: '8',
      label: 'AB-ve',
      value: 'AB-ve',
    },
    {
      id: '9',
      label: 'O-ve',
      value: 'O-ve',
    },
  ];

  const dropDownHIV = [
    {
      id: '1',
      label: 'Non Reactive',
      value: 'NR',
    },
    {
      id: '2',
      label: 'Reactive',
      value: 'Reactive',
    },
  ];

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  const [fAMH, setFAMH] = useState();
  const [lap, setLap] = useState();
  const [lapDate, setLapDate] = useState();
  const [hyst, setHyst] = useState();
  const [hystDate, setHystDate] = useState();
  const [fHb, setFHb] = useState();
  const [fBS, setFBS] = useState();
  const [fLH, setFLH] = useState();
  const [fFSH, setFFSH] = useState();
  const [fTSH, setFTSH] = useState();
  const [fE2, setFE2] = useState();
  const [fPro, setFPro] = useState();
  const [fUsg, setFUsg] = useState();
  const [fUDate, setFUDate] = useState();
  const [fEB, setFEB] = useState();
  const [fEBDate, setFEBDate] = useState();
  const [fHsg, setFHsg] = useState();
  const [fHDate, setFHDate] = useState();

  let Presc_data = route.params;

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      femPDate: date,
      fHb,
      fBG: dropBG,
      fBS,
      fHIV: dropHIV,
      fHbsAg: dropHBs,
      fVDRL: dropVDR,
      fLH,
      fFSH,
      fTSH,
      fE2,
      fAMH,
      fPro,
      fUsg,
      fUDate,
      fEB,
      fEBDate,
      fHsg,
      fHDate,
      lap,
      lapDate,
      hyst,
      hystDate,
      patInvNotes,
    };

    console.log('In FemPartner', Presc_data);

    navigation.navigate('HusbPartner', Presc_data);
  }

  // function handleSave() {
  //   Presc_data = {
  //     ...Presc_data,
  //     femPDate: date.toDateString(),
  //     fHb,
  //     fBG: dropBG,
  //     fBS,
  //     fHIV: dropHIV,
  //     fHbsAg: dropHBs,
  //     fVDRL: dropVDR,
  //     fLH,
  //     fFSH,
  //     fTSH,
  //     fE2,
  //     fAMH,
  //     fPro,
  //     fUsg,
  //     fUDate,
  //     fEB,
  //     fEBDate,
  //     fHsg,
  //     fHDate,
  //     lap,
  //     lapDate,
  //     hyst,
  //     hystDate,
  //   };

  //   console.log('In FemPartner', Presc_data);

  //   navigation.goBack();
  // }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Patient Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={patInvNotes}
            onChangeText={value => setNotes(value)}
          />
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 680,
            borderRadius: 10,
            marginVertical: 10,
            // justifyContent: 'center',
          }}>
          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'white',
              // width: '90%',
              padding: 5,
            }}>
            <View style={styles.ques}>
              <Text style={styles.quesText}>Date</Text>

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
                <View style={{marginHorizontal: 10}}>
                  <TouchableOpacity
                    onPress={showDatePicker}
                    style={styles.button_to}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Choose date
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                    Set date is : {date.toDateString()}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Hb</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mg/dl"
                placeholderTextColor="grey"
                value={fHb}
                onChangeText={value => setFHb(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Blood Group</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropBG}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropBG(itemValue)}>
                {dropBlood.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Blood Sugar</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mg/dl"
                placeholderTextColor="grey"
                value={fBS}
                onChangeText={value => setFBS(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>HIV</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropHIV}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropHIV(itemValue)}>
                {dropDownHIV.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>HBsAg</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropHBs}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropHBs(itemValue)}>
                {dropDownHIV.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>VDRL</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropVDR}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropVDR(itemValue)}>
                {dropDownHIV.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 560,
            borderRadius: 10,
            marginVertical: 10,
            // justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.quesText}>Hormone Evaluation</Text>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'white',
              // width: '90%',
              padding: 5,
            }}>
            <View style={styles.ques2}>
              <Text style={styles.quesText}>LH</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mIU/ml"
                placeholderTextColor="grey"
                value={fLH}
                onChangeText={value => setFLH(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>FSH</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mIU/ml"
                placeholderTextColor="grey"
                value={fFSH}
                onChangeText={value => setFFSH(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>TSH</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mIU/ml"
                placeholderTextColor="grey"
                value={fTSH}
                onChangeText={value => setFTSH(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>E2</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="pg/ml"
                placeholderTextColor="grey"
                value={fE2}
                onChangeText={value => setFE2(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>AMH</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="ng/ml"
                placeholderTextColor="grey"
                value={fAMH}
                onChangeText={value => setFAMH(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Prolactin</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="ng/ml"
                placeholderTextColor="grey"
                value={fPro}
                onChangeText={value => setFPro(value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={fUDate}
            onChangeText={value => setFUDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={fUsg}
            onChangeText={value => setFUsg(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>EB</Text>
          <TextInput
            style={styles.textInput}
            // multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={fEBDate}
            onChangeText={value => setFEBDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={fEB}
            onChangeText={value => setFEB(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>HSG/SIS</Text>
          <TextInput
            style={styles.textInput}
            // multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={fHDate}
            onChangeText={value => setFHDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={fHsg}
            onChangeText={value => setFHsg(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Hysteroscopy</Text>
          <TextInput
            style={styles.textInput}
            // multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={hystDate}
            onChangeText={value => setHystDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={hyst}
            onChangeText={value => setHyst(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Laparoscopy</Text>
          <TextInput
            style={styles.textInput}
            // multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={lapDate}
            onChangeText={value => setLapDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={lap}
            onChangeText={value => setLap(value)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 5}}></View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
