/* eslint-disable prettier/prettier */
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

export default function PatCard(props) {
  return (
    <TouchableOpacity
      style={{
        // borderWidth: 2,
        // borderColor: "grey",
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#fc8019',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={require('../../assets/icons/female.png')}
          style={{
            height: 40,
            width: 40,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Patient ID: {props.Id}
          </Text>
          <Text style={{fontSize: 22, color: 'black'}}>{props.Name}</Text>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Age: {props.Age} years
          </Text>
          <Text style={{fontSize: 18, color: 'grey'}}>Ph. : {props.Num}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
