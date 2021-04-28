import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignInScreen from '../Screens/SignIn/SignInScreen';
import Profile from '../Screens/Profile/Profile';
import Home from '../Screens/Home/Home';
import Splash from '../Screens/Splash/Splash';
import {DrawerContent} from './DrawerContent';
import {AuthContext} from '../components/context';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../components/color';
import ProfileDetail from '../Screens/ProfileDetail/ProfileDetail';

const AuthStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ProfileDetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    headerMode="none"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3498DB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
  </AuthStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    headerMode="none"
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile Screen',
      }}
    />
    <ProfileDetailStack.Screen
      name="ProfileDetail"
      component={ProfileDetail}
      options={{
        title: 'Profile Detail',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ProfileDetailStackScreen = ({navigation}) => (
  <ProfileDetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileDetailStack.Screen
      name="ProfileDetail"
      component={ProfileDetail}
      options={{
        title: 'Profile Detail',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="COLORS.primaryColor"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileDetailStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: COLORS.primaryColor,
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="ProfileDetail"
      component={ProfileDetailStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: COLORS.primaryColor,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Profile"
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const Routes = () => {
  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(() => {
    return {
      signIn: async foundUser => {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken: null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 3000);
  }, []);

  if (loginState.isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={loginState.userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default Routes;
