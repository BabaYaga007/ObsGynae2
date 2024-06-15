import React from 'react';
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
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {CheckBox, Icon, SearchBar} from '@rneui/themed';
import {Checkbox} from 'react-native-paper';
// import {RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import PatCard from './PatCard';
import {GetMed} from './DBfiles/GetFav';
import {SetMed} from './DBfiles/SetFav';
import {useAppContext} from '../AppContext';
import {DelMed} from './DBfiles/DelFav';

export default function Medicines({navigation, route}) {
  const {docNmc, clinicId} = useAppContext();

  const [Morn, setMorn] = useState(false);
  const [After, setAfter] = useState(false);
  const [Even, setEven] = useState(false);
  const [Night, setNight] = useState(false);

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

  let Presc_data = route.params;

  const [medName, setMedName] = useState('');
  const [medDose, setMedDose] = useState('');
  const [duraNum, setDuraNum] = useState('');
  const [advise, setAdvise] = useState('');

  let [medArray, setMedArray] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // This code will run once when the component mounts
    GetMed(docNmc)
      .then(result => {
        setMedArray(result);
        // console.log('Incoming Meds  = ', result);
      })
      .catch(error => {
        console.log('Error fetching MedArray from FavMed ', error);
      });
  }, [refresh]);

  medArray = medArray.reduce(
    (obj, item) => Object.assign(obj, {[item.med_id]: item.medicine}),
    {},
  );
  const ordered = Object.keys(medArray)
    .sort()
    .reduce((obj, key) => {
      obj[key] = medArray[key];
      return obj;
    }, {});

  // console.log('Incoming Meds', ordered);

  const meds = ordered;
  // const initialCheckboxState = {};

  // const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState);
  let [checkedItems, setCheckedItems] = useState([]);

  // const handleCheckboxToggle = (key, label) => {
  //   setCheckboxStates({
  //     ...checkboxStates,
  //     // [key]: !checkboxStates[key],
  //     [key]: !checkboxStates[key] ? label : undefined,
  //   });
  // };

  const handleCheckboxToggle = (key, label) => {
    // Check if the key is already in the array
    const isChecked = checkedItems.some(item => item.key === key);

    // Update the state based on whether the key is checked or unchecked
    if (isChecked) {
      setCheckedItems(checkedItems.filter(item => item.key !== key));
    } else {
      setCheckedItems([...checkedItems, {key, label}]);
    }
  };

  function unCheck(key, label) {
    const isChecked = checkedItems.some(item => item.key === key);
    // Update the state based on whether the key is checked or unchecked
    if (isChecked) {
      setCheckedItems(checkedItems.filter(item => item.key !== key));
    }
  }

  const clearMed = () => {
    setAdvise('');
    setMedDose('');
    setMedName('');
    setDuraNum('');
    setMorn(false);
    setEven(false);
    setNight(false);
    setAfter(false);
    setDrop('Days');
  };

  function addMedicine(num) {
    if (!medName) {
      alert('Please fill Medicine Name');
      return;
    }

    let doseTime = '';

    if (Morn) {
      doseTime += 'Morning ';
    }
    if (After) {
      doseTime += 'Aftertoon ';
    }
    if (Even) {
      doseTime += 'Evening ';
    }
    if (Night) {
      doseTime += 'Night ';
    }

    doseTime = doseTime.trim();
    // console.log(doseTime);

    let duration = duraNum + ' ' + dropValue;

    let newMed =
      medName +
      ' - ' +
      medDose +
      ' - ' +
      duration +
      ' - ' +
      doseTime +
      ' - ' +
      advise +
      ';';

    console.log(newMed);

    if (num == '2') {
      let key = Math.random() * 1000;

      setCheckedItems([...checkedItems, {key, label: newMed}]);

      clearMed();
    } else {
      console.log('Adding new fav Med', docNmc, clinicId, newMed);

      SetMed({docNmc, clinicId, newMed})
        .then(() => {
          setRefresh(prev => !prev);
          clearMed();
        })
        .catch(error => {
          console.log('Error setting new Med ', error);
        });
    }
  }

  function handleNext() {
    const medsEX = checkedItems.map((item, index) => {
      const key = `med${index + 1}`;
      return {[key]: item.label};
    });

    // let result = checkedItems.map(item => `${item.label}`).join(' \n ');

    Presc_data = {
      ...Presc_data,
      medsEX,
    };
    console.log('In Medicines', Presc_data);

    navigation.navigate('InvestAdvice', Presc_data);
  }

  const deleteFav = key => {
    // alert('Do you want to delete medicine');
    Alert.alert('Delete Medicine', 'Do you want to delete medicine', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Delete Med'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('Deleting the favourite Med', key);

          DelMed({docNmc, key})
            .then(() => {
              setRefresh(prev => !prev);
            })
            .catch(error => {
              console.log('Error deleting new Med ', error);
            });
        },
      },
    ]);
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

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 400,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Favourite Medicines</Text>
            <SearchBar
              placeholder="Search by Name"
              // onChangeText={handleSearch}
              // value={searchItem}
              containerStyle={{
                borderRadius: 20,
                padding: 0,
                backgroundColor: 'white',
              }}
              inputContainerStyle={{
                // borderRadius: 20,
                backgroundColor: '#b3e6ff',
                borderWidth: 0,
                width: '100%',
                // margin: 5,
              }}
              inputStyle={{color: 'grey'}}
              // onCancel={clearSearch} // Call clearSearch when the search is canceled
            />
            <ScrollView nestedScrollEnabled={true} style={{marginVertical: 5}}>
              {Object.entries(meds).map(([key, label]) => (
                <View style={styles.presc2} key={key}>
                  <Checkbox.Item
                    style={{marginLeft: -10}}
                    key={key}
                    // status={checkedItems[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxToggle(key, label)}
                    status={
                      checkedItems.some(item => item.key === key)
                        ? 'checked'
                        : 'unchecked'
                    }
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
                    onPress={() => deleteFav(key)}
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

        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medicine</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Generic Name"
            placeholderTextColor="grey"
            value={medName}
            onChangeText={value => setMedName(value)}
          />
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Dose</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Dose"
            multiline
            placeholderTextColor="grey"
            onChangeText={value => setMedDose(value)}
            value={medDose}
          />
          {/* <Text style={{marginBottom: 5, color: 'black'}}>
            Non Printable Notes for Patient
          </Text> */}
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>Dose Timing</Text>
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Morning"
            checked={Morn}
            onPress={value => setMorn(!Morn)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Afternoon"
            checked={After}
            onPress={value => setAfter(!After)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Evening"
            checked={Even}
            onPress={value => setEven(!Even)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Night"
            checked={Night}
            onPress={value => setNight(!Night)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Duration</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Duration"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={value => setDuraNum(value)}
            value={duraNum}
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

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Advise</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Medicine Advise"
            placeholderTextColor="grey"
            onChangeText={value => setAdvise(value)}
            value={advise}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => addMedicine('1')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Favourite</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => addMedicine('2')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Medicine</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Added Medicines</Text>
            <ScrollView nestedScrollEnabled={true} style={{marginVertical: 5}}>
              {/* {Object.entries(checkedItems).map(([key, label]) => ( */}
              {checkedItems.map(item => (
                <View style={styles2.presc2} key={item.key}>
                  {/* <Checkbox.Item
                    key={key}
                    status={checkedItems[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxToggle(key)}
                    label={label} // If your Checkbox component supports a label prop
                    position="leading"
                    labelStyle={{
                      marginRight: 10,
                      alignSelf: 'center',
                      textAlign: 'left',
                      paddingRight: 10,
                    }}
                  /> */}
                  <Text style={styles2.presc_text2}>{item.label}</Text>
                  <TouchableOpacity
                    onPress={() => unCheck(item.key, item.label)}>
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
