import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const CustomTextField = (props) => {

  return (
    <View>
      <TextInput
        style={props.style || styles.input}
        keyboardType={props.keyboardType || 'default'}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 19,
    borderRadius: 5
  }
})
