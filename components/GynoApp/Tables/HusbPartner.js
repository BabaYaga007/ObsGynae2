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

export default function HusbPartner({navigation, route}) {
  const [husbInvNotes, setNotes] = useState();

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

  const [hBS, setHBS] = useState();
  const [semen, setSemen] = useState();
  const [sDate, setSDate] = useState();
  const [hUsg, setHUsg] = useState();
  const [hUsgDate, setHUsgDate] = useState();
  const [hDfi, setHDfi] = useState();
  const [hDfiDate, setHDfiDate] = useState();
  const [karyo, setKaryo] = useState();
  const [kDate, setKDate] = useState();

  let Presc_data = route.params;

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      husbDate: date,
      hBG: dropBG,
      hHIV: dropHIV,
      hBS,
      hHBsAg: dropHBs,
      hVDRL: dropVDR,
      semen,
      sDate,
      hUsg,
      hUsgDate,
      hDfi,
      hDfiDate,
      karyo,
      kDate,
      husbInvNotes,
    };

    console.log('In HusbPartner ', Presc_data);

    navigation.navigate('PhyExam', Presc_data);
  }

  // function handleSave() {
  //   Presc_data = {
  //     ...Presc_data,
  //     husbDate: date.toDateString(),
  //     hBG: dropBG,
  //     hHIV: dropHIV,
  //     hBS,
  //     hHBsAg: dropHBs,
  //     hVDRL: dropVDR,
  //     semen,
  //     sDate,
  //     hUsg,
  //     hUsgDate,
  //     hDfi,
  //     hDfiDate,
  //     karyo,
  //     kDate,
  //   };

  //   console.log('In HusbPartner ', Presc_data);

  //   navigation.goBack();
  // }

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
          <Text style={styles.quesText}>Husband Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={husbInvNotes}
            onChangeText={value => setNotes(value)}
          />
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 590,
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
                value={hBS}
                onChangeText={value => setHBS(value)}
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

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Semen Analysis</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={sDate}
            onChangeText={value => setSDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={semen}
            onChangeText={value => setSemen(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Testis</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={hUsgDate}
            onChangeText={value => setHUsgDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={hUsg}
            onChangeText={value => setHUsg(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>DFI</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={hDfiDate}
            onChangeText={value => setHDfiDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={hDfi}
            onChangeText={value => setHDfi(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Karyotype</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={kDate}
            onChangeText={value => setKDate(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}}></View>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={karyo}
            onChangeText={value => setKaryo(value)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
        <View style={{marginVertical: 5}}></View>
      </ScrollView>
    </View>
  );
}
