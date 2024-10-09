import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const CustomTextField = ({
    placeholder,
    keyboardType,
    secureText
  }) => {

  const navigation = useNavigation()

  return (
      <View>
        <TextInput
        style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={secureText}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 19,
    borderRadius: 5
  }
})
