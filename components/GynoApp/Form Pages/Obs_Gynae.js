import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  // CheckBox,
} from "react-native";
import { styles } from "../../assets/Style/styles";
import { RadioButton } from "react-native-paper";
import { Picker } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";

export default function ObsGynae({ navigation }) {
  const [dropValue, setDropValue] = useState("Gynae Consult");
  const [radioValue, setRadioButtons] = useState("Regular Cycle");

  // Checkboxes for Past History
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  // const [check8, setCheck8] = useState(false);
  const [otherPH, setOtherPH] = useState("");
  function setOtherPHHandler(enteredText) {
    setOtherPH(enteredText);
  }

  // Checkboxes for Family History
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [otherFH, setOtherFH] = useState("");

  function setOtherFHHandler(enteredText) {
    setOtherFH(enteredText);
  }

  const radioOptions = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Regular Cycle",
      value: "Regular Cycle",
    },
    {
      id: "2",
      label: "Oligomenorrhoea",
      value: "Oligomenorrhoea",
    },
    {
      id: "3",
      label: "AUB",
      value: "AUB",
    },
    {
      id: "4",
      label: "Hypomenorrhoea",
      value: "Hypomenorrhoea",
    },
    {
      id: "5",
      label: "Amenorrhoea",
      value: "Amenorrhoea",
    },
    {
      id: "6",
      label: "Post Menopausal",
      value: "Post Menopausal",
    },
    {
      id: "7",
      label: "Other",
      value: "Other",
    },
  ];
  function onPressRadioButton(value) {
    setRadioButtons(value);
  }

  const dropOptions = [
    {
      id: "1",
      label: "Gynae Consult",
      value: "Gynae Consult",
    },
    {
      id: "2",
      label: "Antenatal Card",
      value: "Antenatal Card",
    },
    {
      id: "3",
      label: "Infertility Prescription",
      value: "Infertility Prescription",
    },
  ];

  function submitHandler() {
    const formData = {
      RadioButton: radioValue,
      DropDown: dropValue,
      Family_History: [
        check11,
        check12,
        check13,
        check14,
        check15,
        check16,
        otherFH,
      ],
      Past_History: [
        check1,
        check2,
        check3,
        check4,
        check5,
        check6,
        check7,
        check8,
        otherPH,
      ],
    };
    console.log(formData);
  }

  function nextScreen() {
    if (dropValue == "Gynae Consult") {
      navigation.navigate("Clinical");
    } else if (dropValue == "Antenatal Card") {
      navigation.navigate("Antenatal");
    } else if (dropValue == "Infertility Prescription") {
      navigation.navigate("Infertility");
    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>
          Basic Demographic and Clinical Profile
        </Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        {/* <View style={styles.ques}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput style={styles.textInput} />
        </View> */}
        <View style={styles.ques}>
          <Text style={styles.quesText}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="FirstName LastName"
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Age</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Height</Text>
          <TextInput placeholder="In cm" style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Menstrual History</Text>
          <View>
            {radioOptions.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Obstetric History</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Family History</Text>
          {/* <View style={styles.checkbox}> */}
          <CheckBox
            // center
            containerStyle={{ paddingBottom: 0 }}
            title="Diabetes"
            checked={check11}
            onPress={() => setCheck11(!check11)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Hypertension"
            checked={check12}
            onPress={() => setCheck12(!check12)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Hypothyroidism"
            checked={check13}
            onPress={() => setCheck13(!check13)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Cancer"
            checked={check14}
            onPress={() => setCheck14(!check14)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Not Significant"
            checked={check15}
            onPress={() => setCheck15(!check15)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ paddingBottom: 0, paddingRight: 0 }}
              title="Other"
              checked={otherFH}
              onPress={() => setOtherFH(!otherFH)}
            />
            <TextInput
              style={styles.textInputCheck}
              // value={otherFH}
              onChangeText={setOtherFHHandler}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Past History</Text>
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Diabetes"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Hypertension"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Hypothyroidism"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Tuberculosis"
            checked={check4}
            onPress={() => setCheck4(!check4)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Previous LSCS"
            checked={check5}
            onPress={() => setCheck5(!check5)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Infertility Surgery"
            checked={check6}
            onPress={() => setCheck6(!check6)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Not Significant"
            checked={check7}
            onPress={() => setCheck7(!check7)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ paddingBottom: 0, paddingRight: 0 }}
              title="Other"
              checked={otherPH}
              onPress={() => setOtherPH(!otherPH)}
            />
            <TextInput
              style={styles.textInputCheck}
              onChangeText={setOtherPHHandler}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Consult</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={dropValue}
              onValueChange={(itemValue, itemIndex) => setDropValue(itemValue)}
            >
              {dropOptions.map((item) => (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button title="Next" onPress={nextScreen} width="100" />
          {/* <Button
            title="Next"
            onPress={() => navigation.navigate("Antenatal")}
          /> */}
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
