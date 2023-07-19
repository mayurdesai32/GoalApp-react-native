// import {  } from 'expo-status-bar';r
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Main from './src/Main'
import store from './src/redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.gobal}>
        {/* <StatusBar style="auto" /> */}
        <Main />

      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  gobal: {
    flex: 1,
    backgroundColor: '#05014a',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:10,
    // marginHorizontal:30
  },
});
