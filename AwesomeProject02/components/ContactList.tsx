import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Farhad Ali',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          uid: 2,
          name: 'Ali Asghar',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          uid: 3,
          name: 'Ali Raza',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          uid: 4,
          name: 'Abbas Hyder',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style = {styles.headingText}>Contact List</Text>
      <ScrollView style = {styles.container}
      scrollEnabled = {false}>
        <View>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid}
            style = {styles.userCard}>
              <Image
              source={{
                uri: imageUrl
              }}
              style = {styles.userImage}/>
              <View>
              <Text style = {styles.userName}>{name}</Text>
              <Text style = {styles.userStatus}>{status}</Text>
              </View>
            </View>
          ))}
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
        marginTop: 12,
        marginBottom: 8,
        color: "#fff"
      },
      container: {
        marginBottom: 12
      },
      userCard: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 18,
        marginVertical: 6
      },
      userImage: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginHorizontal: 4
      },
      userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginHorizontal: 8
      },
      userStatus: {
        color: 'white',
        marginHorizontal: 6
      }
})