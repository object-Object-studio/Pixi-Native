import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <WebView
              originWhitelist={['*']}
              source={{ html: require('./test.js')() }}
              dataDetectorTypes={'none'}
              allowFileAccess={true}
              useWebKit={true}
              style={{ height: Dimensions.get('window').width, width: Dimensions.get('window').height , resizeMode: 'cover', flex: 1 }}
          />
      </SafeAreaView>
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
