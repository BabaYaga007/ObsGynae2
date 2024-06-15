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
  Image,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {SearchBar} from 'react-native-elements';
import PatCard from './PatCard';

export default function InferPres({navigation, route}) {
  const [inferNotes, setInferNotes] = useState('');

  let Presc_data = route.params;

  const handleNext = () => {
    Presc_data = {
      ...Presc_data,
      inferNotes,
    };

    console.log('In Infertility Presc', Presc_data);
    navigation.navigate('FemPartner', Presc_data);
  };

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
          <Text style={styles.quesText}>H/o Infertility Treatment</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="For extra notes"
            placeholderTextColor="grey"
            value={inferNotes}
            onChangeText={value => setInferNotes(value)}
          />
        </View>
        {/* </View> */}

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('FemPartner', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Patient Investigations
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('HusbPartner', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Husband Investigations
            </Text>
          </TouchableOpacity>
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
