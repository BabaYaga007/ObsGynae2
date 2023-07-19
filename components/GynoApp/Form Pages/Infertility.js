import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { styles } from "../assets/Style/styles";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { useState } from "react";

export default function Infertiltiy({ navigation }) {
  const [USG, setUSG] = useState(new Date());
  const [HSG, setHSG] = useState(new Date());

  const [radioHbsAg, setRadioHbsAg] = useState("NR");
  const [radioHIV, setRadioHIV] = useState("NR");
  const [radioVDRL, setRadioVDRL] = useState("NR");
  const [radioBG, setRadioBG] = useState("A Positive");

  const rOpsHBsAg = [
    {
      id: "1",
      label: "NR",
      value: "NR",
    },
    {
      id: "2",
      label: "Reactive",
      value: "Reactive",
    },
  ];
  const rOpsHIV = [
    {
      id: "1",
      label: "NR",
      value: "NR",
    },
    {
      id: "2",
      label: "Reactive",
      value: "Reactive",
    },
  ];
  const rOpsVDRL = [
    {
      id: "1",
      label: "NR",
      value: "NR",
    },
    {
      id: "2",
      label: "Reactive",
      value: "Reactive",
    },
  ];
  function onPressHbsAg(value) {
    setRadioHbsAg(value);
  }
  function onPressHIV(value) {
    setRadioHIV(value);
  }
  function onPressVDRL(value) {
    setRadioVDRL(value);
  }
  const rOpsBG = [
    {
      id: "1",
      label: "A Positive",
      value: "A Positive",
    },
    {
      id: "2",
      label: "B Positive",
      value: "B Positive",
    },
    {
      id: "3",
      label: "AB Positive",
      value: "AB Positive",
    },
    {
      id: "4",
      label: "O Positive",
      value: "O Positive",
    },
    {
      id: "5",
      label: "A Negative",
      value: "A Negative",
    },
    {
      id: "6",
      label: "B Negative",
      value: "B Negative",
    },
    {
      id: "7",
      label: "AB Negative",
      value: "AB Negative",
    },
    {
      id: "8",
      label: "O Negative",
      value: "O Negative",
    },
    {
      id: "9",
      label: "Other",
      value: "Other",
    },
  ];
  function onPressBG(value) {
    setRadioBG(value);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Female Partner Infertility</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>BG</Text>
          <View>
            {rOpsBG.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioBG === option.value ? "checked" : "unchecked"}
                onPress={() => onPressBG(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Hb</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Blood Sugar</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>LH</Text>
          <TextInput placeholder="In cm" style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>FSH</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>E2</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>TSH</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Prolactin</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>AMH</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>HBsAg</Text>
          <View>
            {rOpsHBsAg.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHbsAg === option.value ? "checked" : "unchecked"}
                onPress={() => onPressHbsAg(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HIV</Text>
          <View>
            {rOpsHIV.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioHIV === option.value ? "checked" : "unchecked"}
                onPress={() => onPressHIV(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>VDRL</Text>
          <View>
            {rOpsVDRL.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioVDRL === option.value ? "checked" : "unchecked"}
                onPress={() => onPressVDRL(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>USG Date</Text>
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={USG}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1970"
              maxDate="01-01-2070"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "gray",
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onDateChange={(USG) => {
                setUSG(USG);
              }}
            />
          </View>
          {/* <TextInput style={styles.textInput} /> */}
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>USG Report</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>EB</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HSG/SIS Date</Text>
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={HSG}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1970"
              maxDate="01-01-2070"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "gray",
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onDateChange={(HSG) => {
                setHSG(HSG);
              }}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>HSG/SIS Report</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Hysteroscopy</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Laparoscopy</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button
            title="Next"
            onPress={() => navigation.navigate("MalePartner")}
          />
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
