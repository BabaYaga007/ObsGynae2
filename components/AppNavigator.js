// Import required dependencies
import React, {useEffect, useRef} from 'react';
import {Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Import your screen components
import Logo from './GynoApp/LogoPage';
import SignIn from './GynoApp/sign_in';
import Register from './GynoApp/register';
import Dashboard from './GynoApp/Dashboard';
import Appointment from './GynoApp/Appointment';
import Profile from './GynoApp/Profile';
import ListPatient from './GynoApp/ListPatient';
import Invoice from './GynoApp/Invoice';
import AddPatient from './GynoApp/AddPatient';
import ConsultNow from './GynoApp/ConsultNow';
import Prescription from './GynoApp/Prescription';
import AntePres from './GynoApp/AntenatalPres';
import Obstetric from './GynoApp/Obstetric';
import UsgReport from './GynoApp/UsgReport';
import AnteExam from './GynoApp/AnteExam';
import InferPres from './GynoApp/InferPres';
import PatInvest from './GynoApp/PatientInvest';
import HusbInvest from './GynoApp/HusbInvest';
import SurgPro from './GynoApp/SurgPro';
import Physical from './GynoApp/PhyExam';
import Provisional from './GynoApp/Provisional';
import InvestAdvice from './GynoApp/InvestAdvice';
import Medicines from './GynoApp/Meds';
import Treatment from './GynoApp/Treatment';

function LogoScreen({navigation}) {
  // const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn'); // Replace 'NextScreen' with the name of your next screen
    }, 3000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return <Logo />;
  // );
}

function Empty() {
  return (
    <>
      <Text style={{color: 'black'}}>Page Incoming</Text>
    </>
  );
}

// Create the Tab Navigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused, size}) => {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                }}
                source={
                  focused
                    ? require('../assets/icons/dashboard2.png')
                    : require('../assets/icons/dashboard1.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointment}
        options={{
          headerShown: false,
          // title: "Appointments",
          // tabBarLabel: "Appointments",
          // tabBarShowLabel: "true",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused, size}) => {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                }}
                source={
                  focused
                    ? require('../assets/icons/calender2.png')
                    : require('../assets/icons/calender.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused, size}) => {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 5,
                }}
                source={
                  focused
                    ? require('../assets/icons/profile2.png')
                    : require('../assets/icons/profile.png')
                }
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} /> */}
    </Tab.Navigator>
  );
}

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        // options={{headerShown: false}}   //it works
        options={{title: 'Dashboard'}}
      />
      <Drawer.Screen
        name="Appointments"
        component={Appointment}
        options={{title: 'Appointments'}}
      />
      <Drawer.Screen
        name="Assistant "
        component={Empty}
        options={{title: 'Manage Assistant'}}
      />
      <Drawer.Screen
        name="Settings "
        component={Empty}
        options={{title: 'Settings'}}
      />
      {/* <Drawer.Screen
        name="Infertility Prescription"
        component={InferPres}
        options={{ title: "Infertility Prescription" }}
      /> */}
    </Drawer.Navigator>
  );
}

// Create the Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: "false",
        headerTitleStyle: {
          fontSize: 17,
          color: 'blue',
        },
        headerTitleAlign: 'center',
      }}
      initialRouteName="FirstPage">
      <Stack.Screen
        name="LogoScreen"
        component={LogoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        // options={{ title: "" }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListPatient"
        component={ListPatient}
        options={{title: 'List Patients'}}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{title: 'Invoice'}}
      />
      <Stack.Screen
        name="AddPatient"
        component={AddPatient}
        options={{title: 'Add Patients'}}
      />
      <Stack.Screen
        name="ConsultNow"
        component={ConsultNow}
        options={{title: 'Consultation'}}
      />
      <Stack.Screen
        name="Prescription"
        component={Prescription}
        options={{title: 'Prescription'}}
      />
      <Stack.Screen
        name="AntePres"
        component={AntePres}
        options={{title: 'Antenatal Prescription'}}
      />
      <Stack.Screen
        name="Obstetric"
        component={Obstetric}
        options={{title: 'Obstetric History'}}
      />
      <Stack.Screen
        name="USGReport"
        component={UsgReport}
        options={{title: 'USG Report'}}
      />
      <Stack.Screen
        name="AnteExam"
        component={AnteExam}
        options={{title: 'Antenatal Examination'}}
      />
      <Stack.Screen
        name="InferPres"
        component={InferPres}
        options={{title: 'Infertility Prescription'}}
      />
      <Stack.Screen
        name="PatInvest"
        component={PatInvest}
        options={{title: 'Patient Investigations'}}
      />
      <Stack.Screen
        name="HusbInvest"
        component={HusbInvest}
        options={{title: 'Husband Investigations'}}
      />
      <Stack.Screen
        name="SurgPro"
        component={SurgPro}
        options={{title: 'Surgical Procedures'}}
      />
      <Stack.Screen
        name="PhyExam"
        component={Physical}
        options={{title: 'Physical Examination'}}
      />
      <Stack.Screen
        name="Provisional"
        component={Provisional}
        options={{title: 'Provisional Diagnosis'}}
      />
      <Stack.Screen
        name="InvestAdvice"
        component={InvestAdvice}
        options={{title: 'Investigations Advised'}}
      />
      <Stack.Screen
        name="Medicines"
        component={Medicines}
        options={{title: 'Medicines Advised'}}
      />
      <Stack.Screen
        name="Treatment"
        component={Treatment}
        options={{title: 'Treatment'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
