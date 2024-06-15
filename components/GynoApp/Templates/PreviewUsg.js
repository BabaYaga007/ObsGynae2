/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import PatCard from '../PatCard';
import {LogBox} from 'react-native';
import {useAppContext} from '../../AppContext';

export default function USGTable({navigation, route}) {
  //   useEffect(() => {
  //     LogBox.ignoreLogs([
  //       'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
  //     ]);
  //   }, []);

  const {docNmc, clinicId} = useAppContext();

  let usgData = route.params;

  const [pog, setPog] = useState(usgData.pog);
  const [usgSum, setUsgSum] = useState(usgData.usgSum);
  const [usg, setUsg] = useState(usgData.usg);
  const [usgDate, setUsgDate] = useState(usgData.usgDate);
  const [placenta, setPlacenta] = useState(usgData.placenta);
  const [liquor, setLiquor] = useState(usgDate.liquor);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Report</Text>
          <TextInput style={styles.textInput} value={usg} editable={false} />
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>Choose USG Date</Text>
          <TextInput
            style={styles.textInput}
            value={usgDate}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>POG</Text>
          <TextInput style={styles.textInput} value={pog} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Summary</Text>
          <TextInput style={styles.textInput} value={usgSum} editable={false} />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Placenta</Text>
          <TextInput
            style={styles.textInput}
            value={placenta}
            editable={false}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Liquor</Text>
          <TextInput style={styles.textInput} value={liquor} editable={false} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
