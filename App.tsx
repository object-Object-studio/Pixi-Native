import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                source={{
                    html: require('./test.js')({
                        src: `http://192.168.1.136:8080?r=${Date.now()}`
                    })
                }}
                dataDetectorTypes={'none'}
                allowFileAccess={true}
                useWebKit={true}
                style={{
                    height: width,
                    width: height,
                    resizeMode: 'cover'
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
