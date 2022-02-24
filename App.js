import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import DeviceInfo, {
  getBrand,
  getUniqueId,
  getModel,
  getSystemVersion,
} from 'react-native-device-info';

const App = () => {
  const flatform = getBrand();
  const phoneId = getUniqueId();
  const model = getModel();
  const sys = getSystemVersion();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>핸드폰 브랜드 : {flatform}</Text>
        <Text style={styles.text}>핸드폰 고유번호 : {phoneId}</Text>
        <Text style={styles.text}>핸드폰 기종 : {model}</Text>
        <Text style={styles.text}>핸드폰 시스템 : {sys}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2598eb',
  },
  text: {
    color: '#ccc',
    textAlign: 'center',
  },
});

export default App;
