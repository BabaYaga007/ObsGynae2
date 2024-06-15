/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';
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
  StyleSheet,
  Dimensions,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
// import {SearchBar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import PatCard from './PatCard';
// import {ScrollView} from 'react-native-virtualized-view';
import {useAppContext} from '../AppContext';

export default function Obstetric({navigation, route}) {
  const {docNmc} = useAppContext();

  const [dropG, setDropG] = useState('0');
  const [dropP, setDropP] = useState('0');
  const [dropA, setDropA] = useState('0');
  const [dropE, setDropE] = useState('0');
  const [dropL, setDropL] = useState('0');

  const dropOption1 = [
    {
      id: '0',
      label: '0',
      value: '0',
    },
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '1',
      value: '1',
    },
    {
      id: '2',
      label: '2',
      value: '2',
    },
    {
      id: '3', // acts as primary key, should be unique and non-empty string
      label: '3',
      value: '4',
    },
    {
      id: '4',
      label: '4',
      value: '4',
    },
    {
      id: '5', // acts as primary key, should be unique and non-empty string
      label: '5',
      value: '5',
    },
    {
      id: '6',
      label: '6',
      value: '6',
    },
    {
      id: '7', // acts as primary key, should be unique and non-empty string
      label: '7',
      value: '7',
    },
  ];

  // const formData = [
  //   {id: 'gravida', label: 'Gravida', selectedValue: dropG, setValue: setDropG},
  //   {id: 'parity', label: 'Parity', selectedValue: dropP, setValue: setDropP},
  //   {
  //     id: 'abortion',
  //     label: 'Abortion',
  //     selectedValue: dropA,
  //     setValue: setDropA,
  //   },
  //   {id: 'ectopic', label: 'Ectopic', selectedValue: dropE, setValue: setDropE},
  //   {id: 'live', label: 'Live', selectedValue: dropL, setValue: setDropL},
  // ];

  const [obs_hist, setObsHist] = useState('');

  let Presc_data = route.params;
  // const patId = Presc_data.patId;
  // const obsInfo = {docNmc, patId};

  const handleNext = () => {
    // console.log('In Obstetric', Presc_data);

    const obsFormula =
      'G' + dropG + 'P' + dropP + 'A' + dropA + 'E' + dropE + 'L' + dropL;

    Presc_data = {
      ...Presc_data,
      obs_hist,
      obsFormula,
    };

    navigation.navigate('ObsteTable', Presc_data);
  };

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Obstetric History</Text>
          <TextInput
            style={styles.textInput}
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={obs_hist}
            onChangeText={value => setObsHist(value)}
          />
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 300,
            borderRadius: 10,
            marginVertical: 7,
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.quesText}>Obstetric Formula</Text>
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'white',
              // width: '90%',
              padding: 5,
            }}>
            <View style={styles.ques2}>
              <Text style={styles.quesText}>Gravida</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropG}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropG(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Parity</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropP}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropP(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Abortion</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropA}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropA(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Ectopic</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropE}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropE(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Live</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={dropL}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setDropL(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </ScrollView>
        </View>

        {/* <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 300,
            borderRadius: 10,
            marginVertical: 7,
            justifyContent: 'center',
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Obstetric Formula</Text>
            <FlatList
              nestedScrollEnabled={true}
              data={formData}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: 'white',
                padding: 5,
              }}
              renderItem={({item}) => (
                <View style={styles.ques2}>
                  <Text style={styles.quesText}>{item.label}</Text>
                  <Picker
                    style={{color: 'black', backgroundColor: 'white'}}
                    selectedValue={item.selectedValue}
                    dropdownIconColor="black"
                    onValueChange={(itemValue, itemIndex) =>
                      item.setValue(itemValue)
                    }>
                    {dropOption1.map(option => (
                      <Picker.Item
                        key={option.id}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                </View>
              )}
              style={{flexGrow: 1}}
            />
          </View>
        </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Formula</Text>
          <Text
            style={{
              // backgroundColor: 'white',
              color: 'black',
              paddingLeft: 10,
              fontSize: 20,
              height: 40,
              alignSelf: 'center',
              justifyContent: 'center',
              // margin: 5,
            }}>
            G{dropG}P{dropP}A{dropA}E{dropE}L{dropL}
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Fill Obstetric Table
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={{marginVertical: 5}}></View>
      </ScrollView>
    </View>
  );
}
