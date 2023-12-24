import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView  horizontal = {true}
      style = {styles.cardElevate}>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
        <View style = {styles.card}>
            <Text>Box</Text>
        </View>
      </ScrollView>
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
      card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 110,
        borderRadius: 8,
        margin: 12,
        backgroundColor: '#F7E7CE',
        
      },
      cardElevate: {
        elevation: 5
      }
})