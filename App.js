/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import RoadMapScreen from './screens/RoadMapScreen';
import NewsScreen from './screens/NewsScreen';
import PortFolioScreen from './screens/PortFolioScreen';
import BottomTabNavigator from './components/BottomTabNavigator';
import TradingScreen from './screens/TradingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import BuySellToken_Screen from './screens/BuySellToken_Screen';
import TeamPage from './screens/TeamPage';
import NewsScreen1 from './screens/NewsScreen1';
import FaqScreen from './screens/FaqScreen';
import BuySellUsdtScreen from './screens/BuySellUSDTScreen';
import SwapTokenScreen from './screens/SwapTokenScreen';
import DepositeDetailsScreen from './screens/DepositScreen';
import SettingComponents from './components/settings screen components/settingComponents';
import colors from './assets/colors';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const navigationRef = createNavigationContainerRef();
  const [routeName, setRouteName] = useState();

  // const [loaded] = useFonts({
  //   Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  //   Lato: require('./assets/fonts/Lato-Regular.ttf'),
  //   Lato2: require('./assets/fonts/Lato-Bold.ttf'),
  // });
  // if (!loaded) {
  //   return null;
  // }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(navigationRef.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        console.log('route', currentRouteName);
        setRouteName(currentRouteName);
      }}>
      <Tab.Navigator
        tabBar={props => (
          <BottomTabNavigator {...props} routeName={routeName} />
        )}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Portfolio" component={PortFolioScreen} />
        <Tab.Screen name="holdings" component={PortFolioScreen} />
        <Tab.Screen name="Roadmap" component={RoadMapScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="ArticleInfo" component={NewsScreen1} />
        <Tab.Screen name="Buy_Sell_Token" component={BuySellToken_Screen} />
        <Tab.Screen name="Buy_Sell_USDT" component={BuySellUsdtScreen} />
        <Tab.Screen name="Swap_Token" component={SwapTokenScreen} />
        <Tab.Screen name="Trading" component={TradingScreen} />
        <Tab.Screen name="TeamPage" component={TeamPage} />
        <Tab.Screen name="Faq" component={FaqScreen} />
        <Tab.Screen name="Deposit" component={DepositeDetailsScreen} />
        <Tab.Screen name="News1" component={NewsScreen1} />
        <Tab.Screen name="Settings" component={SettingComponents} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
