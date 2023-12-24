import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style = {styles.background}>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#2b2d42",
    height: "100%"
  }
})