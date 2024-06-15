import {useState} from 'react';
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
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {CheckBox, Icon} from '@rneui/themed';
// import {RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function EditMed2({navigation}) {
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
  function onPressRadioButton(value) {
    setRadioButtons(value);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Medicines</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Generic Name"
            placeholderTextColor="grey"
          />
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Dose</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Dose"
            placeholderTextColor="grey"
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
            onPress={() => setMorn(!Morn)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Afternoon"
            checked={After}
            onPress={() => setAfter(!After)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Evening"
            checked={Even}
            onPress={() => setEven(!Even)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="Night"
            checked={Night}
            onPress={() => setNight(!Night)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Duration</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Duration"
            placeholderTextColor="grey"
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
            placeholder="Medicine Advise"
            placeholderTextColor="grey"
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Save to Prescription
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>

        {/* <View>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Upload Investigations
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  presc: {
    height: 50,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#a5adb8',
    borderRadius: 5,
    justifyContent: 'center',
  },
  presc_text: {
    color: 'black',
    marginLeft: 10,
  },
});
