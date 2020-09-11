
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoal(curretGoal => [
      ...courseGoal, 
      { key: Math.random().toString(), value: enteredGoal }]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList data={courseGoal}
        keyExtractor={(item, index) => item.key}
          renderItem={itemData => (
            <View 
              style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>)}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginBottom:50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input:
  {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});
