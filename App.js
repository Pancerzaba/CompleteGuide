
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);

 

  const addGoalHandler = goalTitle => {
    setCourseGoal(curretGoal => [
      ...courseGoal, 
      { key: Math.random().toString(), value: goalTitle }]);
  }

  const removeGoalHandler=goalId=>{
    setCourseGoal(curretGoal =>{
      return curretGoal.filter((goal)=>goal.id !==goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View>
        <FlatList data={courseGoal}
        keyExtractor={(item, index) => item.key}
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginBottom:50
  }

  
});
