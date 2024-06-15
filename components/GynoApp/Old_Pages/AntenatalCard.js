import {useState} from 'react';
import {ScrollView, View, Text, TextInput, Button} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {RadioButton} from 'react-native-paper';
import {CheckBox, Icon} from '@rneui/themed';

export default function Antenatal({navigation}) {
  const [radioUrine, setRadioUrine] = useState('');
  const [radioHbsAg, setRadioHbsAg] = useState('');
  const [radioHIV, setRadioHIV] = useState('');
  const [radioHCV, setRadioHCV] = useState('');
  const [radioVDRL, setRadioVDRL] = useState('');
  const [radioRIgS, setRadioRIgS] = useState('');
  const [radioHPLC, setRadioHPLC] = useState('');
  const [radioTT, setRadioTT] = useState('');
  const [radioTdap, setRadioTdap] = useState('');
  const [radioFlu, setRadioFlu] = useState('');
  const [radioDual, setRadioDual] = useState('');
  const [radioQuad, setRadioQuad] = useState('');
  const [radioChest, setRadioChest] = useState('');
  const [radioCVS, setRadioCVS] = useState('');

  const rOpsUrine = [
    {
      id: '1',
      label: 'NAD',
      value: 'NAD',
    },
    {
      id: '2',
      label: 'other',
      value: 'other',
    },
  ];

  const rOpsHBsAg = [
    {
      id: '1',
      label: 'NR',
      value: 'NR',
    },
    {
      id: '2',
      label: 'Reactive',
      value: 'Reactive',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];
  const rOpsHIV = [
    {
      id: '1',
      label: 'NR',
      value: 'NR',
    },
    {
      id: '2',
      label: 'Reactive',
      value: 'Reactive',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];

  const rOpsHCV = [
    {
      id: '1',
      label: 'NR',
      value: 'NR',
    },
    {
      id: '2',
      label: 'Reactive',
      value: 'Reactive',
    },
  ];
  const rOpsVDRL = [
    {
      id: '1',
      label: 'NR',
      value: 'NR',
    },
    {
      id: '2',
      label: 'Reactive',
      value: 'Reactive',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];

  const rOpsRIgS = [
    {
      id: '1',
      label: 'Immune',
      value: 'Immune',
    },
    {
      id: '2',
      label: 'Non Immune',
      value: 'Non Immune',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];

  const rOpsHPLC = [
    {
      id: '1',
      label: 'Normal',
      value: 'Normal',
    },
    {
      id: '2',
      label: 'Thalassemia',
      value: 'Thalassemia',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];
  const rOpsTT = [
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ];

  const rOpsTdap = [
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ];

  const rOpsFlu = [
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ];
  const rOpsDual = [
    {
      id: '1',
      label: 'Low risk',
      value: 'Low risk',
    },
    {
      id: '2',
      label: 'Intermediate Risk',
      value: 'Intermediate Risk',
    },
    {
      id: '3',
      label: 'Positive',
      value: 'Positive',
    },
  ];
  const rOpsQuad = [
    {
      id: '1',
      label: 'Low risk',
      value: 'Low risk',
    },
    {
      id: '2',
      label: 'Positive',
      value: 'Positive',
    },
  ];
  const rOpsChest = [
    {
      id: '1',
      label: 'NAD',
      value: 'NAD',
    },
    {
      id: '2',
      label: 'other',
      value: 'other',
    },
  ];
  const rOpsCVS = [
    {
      id: '1',
      label: 'NAD',
      value: 'NAD',
    },
    {
      id: '2',
      label: 'other',
      value: 'other',
    },
  ];

  function onPressUrine(value) {
    setRadioUrine(value);
  }
  function onPressHbsAg(value) {
    setRadioHbsAg(value);
  }
  function onPressHIV(value) {
    setRadioHIV(value);
  }
  function onPressHCV(value) {
    setRadioHCV(value);
  }
  function onPressVDRL(value) {
    setRadioVDRL(value);
  }
  function onPressRIgS(value) {
    setRadioRIgS(value);
  }
  function onPressHPLC(value) {
    setRadioHPLC(value);
  }
  function onPressTT(value) {
    setRadioTT(value);
  }
  function onPressTdap(value) {
    setRadioTdap(value);
  }
  function onPressFlu(value) {
    setRadioFlu(value);
  }
  function onPressDual(value) {
    setRadioDual(value);
  }
  function onPressQuad(value) {
    setRadioQuad(value);
  }
  function onPressChest(value) {
    setRadioChest(value);
  }
  function onPressCVS(value) {
    setRadioCVS(value);
  }

  // Checkboxes for BG
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [other, setOther] = useState('');
  function setOtherAncCard(enteredText) {
    setOther(enteredText);
  }

  // function submitHandler() {
  //   const formData = {
  //     RadioButton: radioValue1,
  //     RadioButton: radioValue2,
  //   };
  //   console.log(formData);
  // }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Antinatal Card Details</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>BG</Text>
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="A+ve"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="B+ve"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="AB+ve"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="O+ve"
            checked={check4}
            onPress={() => setCheck4(!check4)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="A-ve"
            checked={check5}
            onPress={() => setCheck5(!check5)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="B-ve"
            checked={check6}
            onPress={() => setCheck6(!check6)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="AB-ve"
            checked={check7}
            onPress={() => setCheck7(!check7)}
          />
          <CheckBox
            containerStyle={{paddingBottom: 0}}
            title="O-ve"
            checked={check8}
            onPress={() => setCheck8(!check8)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{paddingBottom: 0, paddingRight: 0}}
              title="Other"
              checked={other}
              onPress={() => setOther(!other)}
            />
            <TextInput
              style={styles.textInputCheck}
              onChangeText={setOtherAncCard}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Hb mg/dl</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>OGTT</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HbA1C</Text>
          <TextInput placeholder="In cm" style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>TSH</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Urine</Text>
          <View>
            {rOpsUrine.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioUrine === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressUrine(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HBsAg</Text>
          <View>
            {rOpsHBsAg.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHbsAg === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressHbsAg(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HIV</Text>
          <View>
            {rOpsHIV.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHIV === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressHIV(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HCV</Text>
          <View>
            {rOpsHCV.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHCV === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressHCV(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>VDRL</Text>
          <View>
            {rOpsVDRL.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioVDRL === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressVDRL(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Rubella IgG</Text>
          <View>
            {rOpsRIgS.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioRIgS === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressRIgS(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HPLC</Text>
          <View>
            {rOpsHPLC.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHPLC === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressHPLC(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>TT</Text>
          <View>
            {rOpsTT.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioTT === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressTT(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>TT/Tdap</Text>
          <View>
            {rOpsTdap.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioTdap === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressTdap(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Flu Vaccine</Text>
          <View>
            {rOpsFlu.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioFlu === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressFlu(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Dual Screen</Text>
          <View>
            {rOpsDual.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioDual === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressDual(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Quad Screen</Text>
          <View>
            {rOpsQuad.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioQuad === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressQuad(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Chest</Text>
          <View>
            {rOpsChest.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioChest === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressChest(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>CVS</Text>
          <View>
            {rOpsCVS.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioCVS === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressCVS(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button title="Next" onPress={() => navigation.navigate('AncUSG')} />
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
