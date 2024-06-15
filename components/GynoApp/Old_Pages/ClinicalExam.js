import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { styles } from "../../assets/Style/styles";
import { RadioButton } from "react-native-paper";
// import { Picker } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";
import { useState } from "react";

export default function Clinical({ navigation }) {
  const [radioValue1, setRadioButtons1] = useState("");
  const [radioValue2, setRadioButtons2] = useState("");

  const radioOptions1 = [
    {
      id: "1",
      label: "Positive",
      value: "Positive",
    },
    {
      id: "2",
      label: "Negative",
      value: "Negative",
    },
  ];

  const radioOptions2 = [
    {
      id: "1",
      label: "Positive",
      value: "Positive",
    },
    {
      id: "2",
      label: "Negative",
      value: "Negative",
    },
  ];

  function onPressRadioButton1(value) {
    setRadioButtons1(value);
  }
  function onPressRadioButton2(value) {
    setRadioButtons2(value);
  }

  // Checkboxes for Past History
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [otherPS, setOtherPS] = useState("");
  const [otherPV, setOtherPV] = useState("");
  function setOtherClinicalPV(enteredText) {
    setOtherPV(enteredText);
  }
  function setOtherClinicalPS(enteredText) {
    setOtherPS(enteredText);
  }

  function submitHandler() {
    const formData = {
      RadioButton: radioValue1,
      RadioButton: radioValue2,
    };
    console.log(formData);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Clinical Exam</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Weight</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Pallor</Text>
          <View>
            {radioOptions1.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue1 === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton1(option.value)}
              />
            ))}
          </View>
          {/* <TextInput style={styles.textInput} /> */}
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>PE</Text>
          <View>
            {radioOptions2.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue2 === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton2(option.value)}
              />
            ))}
          </View>
          {/* <TextInput style={styles.textInput} /> */}
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>PR</Text>
          <TextInput placeholder="In cm" style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>BP</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>O/E</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>P/S</Text>
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Not Done"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Cervix healthy"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Cervical Hypertrophied"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Cervical erosion present"
            checked={check4}
            onPress={() => setCheck4(!check4)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ paddingBottom: 0, paddingRight: 0 }}
              title="Other"
              checked={otherPS}
              onPress={() => setOtherPS(!otherPS)}
            />
            <TextInput
              style={styles.textInputCheck}
              onChangeText={setOtherClinicalPS}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>P/V</Text>
          <CheckBox
            // center
            containerStyle={{ paddingBottom: 0 }}
            title="Not Done"
            checked={check11}
            onPress={() => setCheck11(!check11)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Uterus anteverted normal Size, bilateral fornices free"
            checked={check12}
            onPress={() => setCheck12(!check12)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Uterus anteverted bulky, bilateral fornices free"
            checked={check13}
            onPress={() => setCheck13(!check13)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ paddingBottom: 0, paddingRight: 0 }}
              title="Other"
              checked={otherPV}
              onPress={() => setOtherPV(!otherPV)}
            />
            <TextInput
              style={styles.textInputCheck}
              onChangeText={setOtherClinicalPV}
            />
          </View>
        </View>
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button
            title="Next"
            onPress={() => navigation.navigate("Investigation")}
          />
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
