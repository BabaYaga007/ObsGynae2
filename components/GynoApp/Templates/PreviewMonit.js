/* eslint-disable prettier/prettier */
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
  Dimensions,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
// import {LogBox} from 'react-native';
import {useAppContext} from '../../AppContext';

export default function AnteMonit({navigation, route}) {
  const {docNmc, clinicId} = useAppContext();

  let monit = route.params;

  const [antePog, setAntePog] = useState(monit.antePog);
  const [anteBP, setAnteBP] = useState('');
  const [anteWt, setAnteWt] = useState('');
  const [anteOE, setAnteOE] = useState('');
  const [antePallor, setAntePallor] = useState('');
  const [antePE, setAntePE] = useState('');
  const [anteMDate, setAnteMDate] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Choose Date</Text>
          <TextInput
            style={styles.textInput}
            value={anteMDate}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>POG</Text>
          <TextInput
            style={styles.textInput}
            value={antePog}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Weight</Text>
          <TextInput style={styles.textInput} value={anteWt} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Blood Pressure(mm Hg)</Text>
          <TextInput style={styles.textInput} value={anteBP} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pallor</Text>
          <TextInput
            style={styles.textInput}
            value={antePallor}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pedal Edema</Text>
          <TextInput style={styles.textInput} value={antePE} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>O/E</Text>
          <TextInput style={styles.textInput} value={anteOE} editable={false} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Save and Next</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{marginVertical: 5}}></View>
      </ScrollView>
    </View>
  );
}
