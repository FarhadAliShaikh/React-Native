import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trendings ...</Text>

      <View style = {[styles.card, styles.cardElevated]}>
        <Image 
        source= {{uri: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=740&t=st=1703414619~exp=1703415219~hmac=36fa337e798ed2590a38e61f6c8d9208ccb05c035409e750e961528139c417f3'}}
        style = {styles.cardImage}
        />

        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>React Native</Text>
            <Text style = {styles.cardLabel}>Mobile App development</Text>
            <Text style = {styles.cardDescription}>Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.</Text>
            <Text style = {styles.cardFooter}>12 min ago</Text>
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
      card: {
        backgroundColor: "#BCB88A",
        width: 360,
        height: 390,
        marginHorizontal: 17,
        marginTop: 4,
        borderRadius: 6
      },
      cardElevated: {
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1
        }
      },
      cardImage: {
        height: 200,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 4
      },
      cardBody: {
        paddingHorizontal: 14
      },
      cardTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
      },
      cardLabel: {
        color: 'white',
        fontSize: 13,
        marginBottom: 4,
      },
      cardDescription: {
        fontSize: 14,
        flexGrow: 1
      },
      cardFooter: {
        color: 'white',
        marginTop: 4
      }
      
})