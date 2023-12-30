import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

function App() {

  const [randomColor, setRandomColor] = useState("");
  
  const generateColor = () => {
    // Generate random color
    const hexColorsRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexColorsRange[Math.floor(Math.random() * 16)]
    }
    setRandomColor(color);
  }

  return (
   <>
    <StatusBar backgroundColor={randomColor}/>
    <View style = {[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style = {styles.btn}>
          <Text style = {styles.btnTxt}>Click me!</Text>
        </View>
      </TouchableOpacity>
    </View>

    
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: "cyan",
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    borderRadius: 40,
  },
  btnTxt: {
    fontSize: 30,
    fontWeight: 'bold',
  }

})

export default App;