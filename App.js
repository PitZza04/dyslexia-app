import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeStackNavigation from "./navigation/HomeStackNavigation";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
//contextAPI
import { AuthProvider } from "./hooks/useAuth";
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AuthProvider>
            <HomeStackNavigation />
            <StatusBar style="auto" />
          </AuthProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
