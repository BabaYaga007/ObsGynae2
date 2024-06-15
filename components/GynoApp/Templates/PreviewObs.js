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
import {useAppContext} from '../../AppContext';

export default function PreviewObs({navigation, route}) {
  let ObsData = route.params;

  const {docNmc, clinicId} = useAppContext();

  const [parity, setDParity] = useState(ObsData.parity);
  const [mode_birth, setMBirth] = useState(ObsData.mode_birth);
  const [outcome, setOutcome] = useState(ObsData.outcome);
  const [baby, setBaby] = useState(ObsData.baby);

  const [gravida, setGravida] = useState(ObsData.gravida);
  const [birth_year, setYear] = useState(ObsData.birth_year);
  const [birth_wt, setBirthWt] = useState(ObsData.birth_wt);
  const [comments, setComments] = useState(ObsData.comments);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Gravida</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number"
            placeholderTextColor="grey"
            // inputMode="numeric"
            value={gravida}
            editable={false}
            // onChangeText={value => setGravida(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Year</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Year"
            placeholderTextColor="grey"
            // inputMode="numeric"
            value={birth_year}
            editable={false}
            // onChangeText={value => setYear(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Parity</Text>
          <TextInput style={styles.textInput} value={parity} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Mode of Birth</Text>
          <TextInput
            style={styles.textInput}
            value={mode_birth}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Outcome</Text>
          <TextInput
            style={styles.textInput}
            value={outcome}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Baby</Text>
          <TextInput style={styles.textInput} value={baby} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Weight</Text>
          <TextInput
            style={styles.textInput}
            multiline
            editable={false}
            placeholder="In gm"
            // inputMode="numeric"
            placeholderTextColor="grey"
            value={birth_wt}
            // onChangeText={value => setBirthWt(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Comments</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Comments"
            placeholderTextColor="grey"
            value={comments}
            editable={false}
            // onChangeText={value => setComments(value)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 5}}></View>
      </ScrollView>
    </View>
  );
}
