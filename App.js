import * as React from 'react';
import PushNotification from "react-native-push-notification"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Sobre from './src/Screens/Sobre';
import HomeStack from './src/Navigation/HomeStack';

// Adding notifications
PushNotification.createChannel(
  {
  channelId: "channel-id",
  channelName: "My channel",
  channelDescription: "A channel to categorise your notifications",
  playSound: false,
  soundName: "default",
  vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
);

PushNotification.configure({
  onRegister: function (token) {
      console.log("[NotificationManager] onRegister token:", token);
    },
  onNotification: function (notification) {
    console.log("[NotificationManager] onNotification:", notification);
  },
  onAction: function(notification){
      console.log("ACTION:", notification.action)
  }
})

// Adding scheduled notifications
// Notifications scheduled to cycle every 3 hours
PushNotification.localNotificationSchedule({
  id:1,
  channelId: 'channel-id',
  title: 'Pensando em fazer um Lanche?',
  message: "Confira essas ótimas receitas para matar a vontade!",
  date: new Date(Date.now() + 10800 * 1000),// 3h
  allowWhileIdle: false,
  repeatTime: 21600*1000,// 6h
  repeatType: 'time'
});
PushNotification.localNotificationSchedule({
  id:2,
  channelId: 'channel-id',
  title: 'Sua sede não é de água',
  message: "Confira essas ótimas receitas para matar a vontade!",
  date: new Date(Date.now() + 21600 * 1000),// 6h
  allowWhileIdle: false,
  repeatTime: 21600*1000,// 6h
  repeatType: 'time'
});
// Finishing adding notifications

// Adding my own theme to the Navigation Container
const MyTheme = {
  dark: false,
  colors: {
    background: '#fff8e7',
    card: '#ffe5c3',
    text: '#442C2E',
  },
};

const Tab = createBottomTabNavigator();
export default function App() {
    return (

      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
        // Adding Icons to the bottontab
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Sobre') {
                iconName = focused
                  ? 'md-business'
                  : 'md-business-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })} tabBarOptions={{
            activeTintColor: '#442C2E',
            inactiveTintColor: '#442C2E'
          }}>
          <Tab.Screen name="Home" component={HomeStack} options={{ title: 'D. Anilda Receitas Caseiras' }} />
          <Tab.Screen name="Sobre" component={Sobre} />
        </Tab.Navigator>
      </NavigationContainer>
    );
        
}
