import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import 'react-native-gesture-handler';
import { StackNavigator } from "./src/navigation/StackNavigator";
import { Provider } from 'react-redux';
import { Store } from "./src/redux/app/Store";
import { CardCat } from "./src/components/CardCat";

const App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;