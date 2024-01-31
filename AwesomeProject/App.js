import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <view>
      <Text>Écran1</Text>
      <TextInput
        style={styles.input}
        onChangeText={React.useState('Useless Text')}
        value={'Ceci est un champ de texte'}
      />
      <TouchableOpacity style={styles.button} onPress={() => setCount(prevCount => prevCount + 1)}>
        <Text>Button</Text>
      </TouchableOpacity>
    </view>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#00AAAA',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFAA00',
    padding: 10,
  }
});

export default App;
