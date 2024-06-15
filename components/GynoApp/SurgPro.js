import {useState} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import PatCard from './PatCard';

export default function SurgPro({navigation, route}) {
  let Presc_data = route.params;

  const [surgPro, setSurgPro] = useState('');
  const [surgFind, setSurgFind] = useState('');

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      surgPro,
      surgFind,
    };

    console.log('In Surgical Procedure', Presc_data);

    navigation.navigate('PhyExam', Presc_data);
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

        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Surgical Procedure</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Surgical Procedure"
            placeholderTextColor="grey"
            value={surgPro}
            onChangeText={value => setSurgPro(value)}
          />
          {/* <Text style={{ marginBottom: 5 }}>
            Pressing Complaints of patient and duration
          </Text> */}
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Intra Operative Findings</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Intra Operative Findings"
            placeholderTextColor="grey"
            value={surgFind}
            onChangeText={value => setSurgFind(value)}
          />
          {/* <Text style={{ marginBottom: 5 }}>Past and Family History</Text> */}
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
      </ScrollView>
    </View>
  );
}
