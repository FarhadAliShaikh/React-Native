import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
// import CrossImage from "./img/cross.png"

export default function App() {

  const [userInput, setUserInput] = useState('')
  const [todoList, setTodoList] = useState([])

  function handleInputText(todoText: string) {
    setUserInput(todoText);
  }

  function addTodo() {
    if(userInput != "") {
      setTodoList([...todoList, {text: userInput, key: Math.random().toString()}]);
      setUserInput('');
    } 
  }

  function deleteHandler(key: string) {
    setTodoList(todoList.filter((todo) => todo.key !== key));
  }

  return (
    <View>
      <View style = {styles.inputContainer}>
        <TextInput 
        placeholder='Enter Todo'
        style = {styles.inputBox}
        onChangeText={handleInputText}
        value={userInput}
        />
        <Button 
        title='Add Todo'
        onPress={addTodo}
        color={"orange"}
        />
      </View>
      <View>
        <Text style = {styles.subHeadingText}>All Todo List Here</Text>
        
        {/* <ScrollView>
          {todoList.map((todo, index) => (
            <Text key={index}
            style={styles.todo}
            >{todo}</Text>
          ))}
        </ScrollView> */}

        <FlatList 
        data={todoList}
        renderItem={(todoItem) => {
          return (
            <Pressable
            onPress={() => deleteHandler(todoItem.item.key)}
            >
              <Text style={styles.todo}>{todoItem.item.text}</Text>
            </Pressable>
          )          
        }}
        style = {styles.todoList}
        //optional
        // keyExtractor={(item, index) => {
        //   return (
        //     item.id
        //   );
        // }}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginVertical: 8,
    padding: 10,
    
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: "80%",
    marginHorizontal: 2,
    padding: 6,
    fontSize: 25,
    color: 'black'
  },
  subHeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    borderBottomWidth: 1,
    marginHorizontal: 6,
    padding: 4
  },
  todoList: {
    height: "81%",
    marginHorizontal: 6,
  },
  todo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 2,
    margin: 6,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "orange",
    borderColor: 'orange',
    color: 'white'
  },
  crossImage: {
    height: 20,
    width: 20
  }
})