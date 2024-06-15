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
import {styles} from '../../../assets/Style/styles';
import {SearchBar} from 'react-native-elements';
import PatCard from '../PatCard';

export default function AnteExam({navigation, route}) {
  const [ante_invest, setAnte] = useState('');

  let Presc_data = route.params;

  const handleNext = () => {
    Presc_data = {
      ...Presc_data,
      ante_invest,
    };

    console.log('In Antenatal Investigations', Presc_data);

    navigation.navigate('AnteTable', Presc_data);
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

        <TouchableOpacity
          onPress={handleNext}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <View style={{}}>
            {/* <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                color: 'grey',
              }}>
              Table
            </Text> */}
          </View>
        </TouchableOpacity>

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
