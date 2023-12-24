import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style = {styles.headingText}>Blog Post</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.cardHeaderText}>What's new in Javascript?</Text>
        <Image 
        source={{
            uri: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=740&t=st=1703419119~exp=1703419719~hmac=2d6c6a20ef140f6f0c2c2bc0d518417474ae9c6a166cc0313f358c700842908b"
        }}
        style = {styles.cardImage}/>
        <Text numberOfLines={3} style = {styles.cardDescription}>JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

        JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

        JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:
        </Text>
        <View style = {styles.cardFooter}>
        <TouchableOpacity
        onPress={() => openWebsite('https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics')}>
            <Text style = {styles.btnText}>Read more</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => openWebsite('https://www.google.com/')}>
            <Text style = {styles.btnText}>Follow me</Text>
        </TouchableOpacity>
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
        marginTop: 12,
        marginBottom: 8,
        color: "#fff",

      },
      card: {
        backgroundColor: "#ffffff",
        width: 360,
        height: 400,
        marginHorizontal: 17,
        marginTop: 4,
        borderRadius: 6,
        marginBottom: 12
      },
      cardElevated: {
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1
        }
      },
      cardHeaderText: {
        textAlign: 'center',
        color: 'black',
        margin: 8,
        fontSize: 24,
        fontWeight: 'bold'
      },
      cardImage: {
        height: 200,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 4
      },
      cardDescription: {
        margin: 12
      },
      cardFooter: {
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly"
      },
      btnText: {
        color: 'black',
        backgroundColor: "#E4D00A",
        padding: 12,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 22
      }
})