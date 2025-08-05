import "react-native-gesture-handler";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GradeForm } from './app/screens/GradeForm';
import { ListGrades } from './app/screens/ListGrades';
import { AboutScreen } from './app/screens/AboutScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { TipsScreen } from './app/screens/TipsScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/base';


const StackGrades = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack interno para navegación entre List y Form
const StackGradesNav = () => {
  return (
    <StackGrades.Navigator>
      <StackGrades.Screen name='ListGradesNav' component={ListGrades} options={{ title: 'Listado' }} />
      <StackGrades.Screen name='GradeFormNav' component={GradeForm} options={{ title: 'Formulario' }} />
    </StackGrades.Navigator>
  );
};

//Tabs
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TabConetenidoA'
        component={SettingsScreen}
        options={{
          headerShown: false, //mostrar texto del name
          tabBarLabel: 'Configuracion',// nombre del tab
          tabBarIcon: () => {
            return <Icon name="settings" size={24} color="black" type="Feather" />
          }
        }}
      />
      <Tab.Screen
        name='TabConetenidoB'
        component={TipsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Tips',
          tabBarIcon: () => {
            return <Icon name="tips-and-updates" size={24} color="black" type="MaterialIcons" />
          }
        }}
      />
    </Tab.Navigator>
  )
}

// Drawer principal
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='DrawerListGradesNav'
          component={StackGradesNav}
          options={{
            title: 'Notas',
          }}
        />
        <Drawer.Screen
          name="AcercaDe"
          component={AboutScreen}
          options={{ title: 'Acerca de' }}
        />
        <Drawer.Screen
          name="Tabs"
          component={TabNav}
          options={{ title: 'Tabs' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
