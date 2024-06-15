/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import {Picker} from '@react-native-picker/picker';
import PatCard from '../PatCard';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AnteTable({navigation, route}) {
  const [dropBG, setDropBG] = useState('--');
  const [dropHBG, setDropHBG] = useState('--');
  const [dropRub, setDropRub] = useState('Immune');
  const [dropHIV, setDropHIV] = useState('Non Reactive');
  const [dropHBs, setDropHBs] = useState('Non Reactive');
  const [dropHCV, setDropHCV] = useState('Non Reactive');
  const [dropVDR, setDropVDR] = useState('Non Reactive');
  const [dropDual, setDropDual] = useState('Low Risk');
  const [dropQuad, setDropQuad] = useState('Low Risk');

  const [ante_invest, setAnte] = useState('');

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

  const dropRubella = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Immune',
      value: 'Immune',
    },
    {
      id: '2',
      label: 'Susceptible',
      value: 'Susceptible',
    },
  ];

  const dropDownHIV = [
    {
      id: '1',
      label: 'Not Done',
      value: 'Not Done',
    },
    {
      id: '2',
      label: 'Non Reactive',
      value: 'Non Reactive',
    },
    {
      id: '3',
      label: 'Reactive',
      value: 'Reactive',
    },
  ];

  const dropSreen = [
    {
      id: '1',
      label: '-----',
      value: '-----',
    },
    {
      id: '2',
      label: 'Low risk',
      value: 'Low risk',
    },
    {
      id: '3',
      label: 'Intermediate Risk',
      value: 'Intermediate Risk',
    },
    {
      id: '4',
      label: 'Positive',
      value: 'Positive',
    },
  ];

  const [Vdate, setVDate] = useState('');
  const [Tdate, setTDate] = useState('');
  const [TDdate, setTDDate] = useState('');
  const [Fdate, setFDate] = useState('');

  const [ict1Date, setICT1Date] = useState('');
  const [ict2Date, setICT2Date] = useState('');
  const [ict3Date, setICT3Date] = useState('');
  const [ict1Text, setICT1Text] = useState('');
  const [ict2Text, setICT2Text] = useState('');
  const [ict3Text, setICT3Text] = useState('');

  const [otherInv, setOtherInv] = useState('');

  const [hb1, setHb1] = useState('');
  const [hb2, setHb2] = useState('');
  const [hb3, setHb3] = useState('');
  const [hb1D, setHb1D] = useState('');
  const [hb2D, setHb2D] = useState('');
  const [hb3D, setHb3D] = useState('');

  const [gtt3, setGtt3] = useState('');
  const [gtt1, setGtt1] = useState('');
  const [gtt2, setGtt2] = useState('');
  const [gtt3D, setGtt3D] = useState('');
  const [gtt1D, setGtt1D] = useState('');
  const [gtt2D, setGtt2D] = useState('');

  const [tsh1, setTsh1] = useState('');
  const [tsh2, setTsh2] = useState('');
  const [tsh3, setTsh3] = useState('');
  const [tsh1D, setTsh1D] = useState('');
  const [tsh2D, setTsh2D] = useState('');
  const [tsh3D, setTsh3D] = useState('');

  const [urine, setUrine] = useState('');
  const [nipt, setNipt] = useState('');
  const [hplc, setHplc] = useState('');
  const [antiD, setAntiD] = useState('');

  const [quadRes, setQuadRes] = useState('');
  const [dualRes, setDualRes] = useState('');

  let Presc_data = route.params;

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      ante_invest,
      bg: dropBG,
      husbBg: dropHBG,
      ict1: ict1Text,
      ict3: ict2Text,
      ict2: ict3Text,
      ict1Date,
      ict2Date,
      ict3Date,
      antiD,
      rubella: dropRub,
      hplc,
      hiv: dropHIV,
      hbsag: dropHBs,
      vdrl: dropVDR,
      hcv: dropHCV,
      vaccination: Vdate,
      td: Tdate,
      tDaP: TDdate,
      fluvac: Fdate,
      dualS: dropDual + ' ' + dualRes,
      quadS: dropQuad + ' ' + quadRes,
      nipt,
      urine,
      hb1,
      hb2,
      hb3,
      hb1D,
      hb2D,
      hb3D,
      gtt1,
      gtt2,
      gtt3,
      tsh1,
      tsh2,
      tsh3,
      gtt1D,
      gtt2D,
      gtt3D,
      tsh1D,
      tsh2D,
      tsh3D,
      otherInv,
    };

    console.log('In Antenatal Table', Presc_data);

    navigation.navigate('USGTable', Presc_data);
  }

  function copyHb(x) {
    //copy of Hb date to GTT and TSH
    switch (x) {
      case '1':
        setGtt1D(hb1D);
        setTsh1D(hb1D);
        break;

      case '2':
        setGtt2D(hb2D);
        setTsh2D(hb2D);
        break;

      case '3':
        setGtt3D(hb3D);
        setTsh3D(hb3D);
        break;
    }
  }

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
          <Text style={styles.quesText}>Antenatal Investigations</Text>
          <TextInput
            style={styles.textInput}
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            multiline
            value={ante_invest}
            onChangeText={value => setAnte(value)}
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
          <Text style={styles.quesText}>Husband Blood Group</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropHBG}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropHBG(itemValue)}>
            {dropBlood.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>ICT 1st Visit</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Date"
            placeholderTextColor="grey"
            value={ict1Date}
            onChangeText={value => setICT1Date(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <TextInput
            style={styles.textInput}
            placeholder="Negative/Positive/Titre value"
            placeholderTextColor="grey"
            value={ict1Text}
            onChangeText={value => setICT1Text(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 16-20 weeks</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Date"
            placeholderTextColor="grey"
            value={ict2Date}
            onChangeText={value => setICT2Date(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <TextInput
            style={styles.textInput}
            placeholder="Negative/Positive/Titre value"
            placeholderTextColor="grey"
            value={ict2Text}
            onChangeText={value => setICT2Text(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>ICT 24-28 weeks</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Date"
            placeholderTextColor="grey"
            value={ict3Date}
            onChangeText={value => setICT3Date(value)}
          />
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <TextInput
            style={styles.textInput}
            placeholder="Negative/Positive/Titre value"
            placeholderTextColor="grey"
            value={ict3Text}
            onChangeText={value => setICT3Text(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Anti D</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Date"
            placeholderTextColor="grey"
            value={antiD}
            onChangeText={value => setAntiD(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Rubella IgG</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropRub}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropRub(itemValue)}>
            {dropRubella.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>HPLC</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={hplc}
            onChangeText={value => setHplc(value)}
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

        <View style={styles.ques2}>
          <Text style={styles.quesText}>HCV</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropHCV}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropHCV(itemValue)}>
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
          <Text style={styles.quesText}>Vaccination</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={Vdate}
            onChangeText={value => setVDate(value)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Td</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={Tdate}
            onChangeText={value => setTDate(value)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>TDaP</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={TDdate}
            onChangeText={value => setTDDate(value)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Fluvac</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Date"
            placeholderTextColor="grey"
            value={Fdate}
            onChangeText={value => setFDate(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Dual Screen</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropDual}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropDual(itemValue)}>
            {dropSreen.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Result"
            placeholderTextColor="grey"
            value={dualRes}
            onChangeText={value => setDualRes(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Quad Screen</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropQuad}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropQuad(itemValue)}>
            {dropSreen.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Result"
            placeholderTextColor="grey"
            value={quadRes}
            onChangeText={value => setQuadRes(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>NIPT</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder=""
            placeholderTextColor="grey"
            value={nipt}
            onChangeText={value => setNipt(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Urine R/M Culture</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder=""
            placeholderTextColor="grey"
            value={urine}
            onChangeText={value => setUrine(value)}
          />
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 630,
            borderRadius: 10,
            marginVertical: 7.5,
            // justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.quesText}>Hb</Text>
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
              <Text style={styles.quesText}>Hb 1st Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date"
                placeholderTextColor="grey"
                value={hb1D}
                onChangeText={value => setHb1D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={hb1}
                onChangeText={value => setHb1(value)}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={styles.button_to}
                onPress={() => copyHb('1')}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  Copy Date to GTT1 & TSH1
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Hb 2nd Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date"
                placeholderTextColor="grey"
                value={hb2D}
                onChangeText={value => setHb2D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={hb2}
                onChangeText={value => setHb2(value)}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={styles.button_to}
                onPress={() => copyHb('2')}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  Copy Date to GTT2 & TSH2
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Hb 3rd Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date"
                placeholderTextColor="grey"
                value={hb3D}
                onChangeText={value => setHb3D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={hb3}
                onChangeText={value => setHb3(value)}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={styles.button_to}
                onPress={() => copyHb('3')}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  Copy Date to GTT3 & TSH3
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          //   onPress={() => navigation.navigate('AnteTable')}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 450,
            borderRadius: 10,
            marginVertical: 7.5,
            // justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.quesText}>GTT</Text>
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
              <Text style={styles.quesText}>GTT 1st Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date 1"
                placeholderTextColor="grey"
                value={gtt1D}
                onChangeText={value => setGtt1D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={gtt1}
                onChangeText={value => setGtt1(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>GTT 2nd Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date 2"
                placeholderTextColor="grey"
                value={gtt2D}
                onChangeText={value => setGtt2D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={gtt2}
                onChangeText={value => setGtt2(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>GTT 3rd Visit</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Date 3"
                placeholderTextColor="grey"
                value={gtt3D}
                onChangeText={value => setGtt3D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Result"
                placeholderTextColor="grey"
                value={gtt3}
                onChangeText={value => setGtt3(value)}
              />
            </View>
          </View>
        </View>

        <View
          //   onPress={() => navigation.navigate('AnteTable')}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 450,
            borderRadius: 10,
            marginVertical: 7.5,
            // justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.quesText}>TSH</Text>
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
              <Text style={styles.quesText}>TSH 1st Visit</Text>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Date"
                placeholderTextColor="grey"
                value={tsh1D}
                onChangeText={value => setTsh1D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                placeholder="Result"
                placeholderTextColor="grey"
                value={tsh1}
                onChangeText={value => setTsh1(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>TSH 2nd Visit</Text>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Date"
                placeholderTextColor="grey"
                value={tsh2D}
                onChangeText={value => setTsh2D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                placeholder="Result"
                placeholderTextColor="grey"
                value={tsh2}
                onChangeText={value => setTsh2(value)}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>TSH 3rd Visit</Text>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Date"
                placeholderTextColor="grey"
                value={tsh3D}
                onChangeText={value => setTsh3D(value)}
              />
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <TextInput
                style={styles.textInput}
                placeholder="Result"
                placeholderTextColor="grey"
                value={tsh3}
                onChangeText={value => setTsh3(value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Other Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={otherInv}
            onChangeText={value => setOtherInv(value)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 5,
          }}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
