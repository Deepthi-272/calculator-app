import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const evaluateExpression = (expression) => {
  try {
    return eval(expression).toString();
  } catch {
    return 'Error'; 
  }
};

const CalculatorApp = () => {
  const [input, setInput] = useState('');


  const handlePress = (value) => {
    if (value === '=') {
      setInput(evaluateExpression(input));
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, item === '=' && styles.equalsButton]}
      onPress={() => handlePress(item)}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FlatList
          data={['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+']}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
        <Text style={styles.footer}>Calc by deepthi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1c1c1c',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 30,
    color: '#ffffff',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  footer: {     
    display: 'flex',     
    textAlign: 'center',     
    bottom: 20,     
    font: 16,   
  },
});

export default CalculatorApp;
