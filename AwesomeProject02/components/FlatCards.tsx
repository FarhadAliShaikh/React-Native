import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Cards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 8,
    color: "#fff"
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 110,
    borderRadius: 6,
    margin: 8
  },
  cardOne: {
    backgroundColor: "#9ACD32"
  },
  cardTwo: {
    backgroundColor: "#edf2f4"
  },
  cardThree: {
    backgroundColor: "#ef233c"
  }

})