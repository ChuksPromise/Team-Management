import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomTextField } from '../widgets/CustomTextField'
import PrimaryButton from '../widgets/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Forget_Password = () => {
   const navigation = useNavigation()
  return (
      <View>
         <View style={styles.loginSec}>
            <Text style={styles.forgetText}>
               What's your email address?
            </Text>
            <CustomTextField placeholder={"junial.william@gmail.com"} keyboardType={"email-address"}/>
            <PrimaryButton onPress={() => navigation.navigate("Verify-Forgot-Password")}>
               <Text>
                  Continue
               </Text>
            </PrimaryButton>
         </View>
      </View>
  )
}

export default Forget_Password

const styles = StyleSheet.create({
   loginSec:{
      // height: "50%",
      backgroundColor: "#0414c0",
      marginHorizontal: 5,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
      paddingVertical: 50
   },
   forgetText:{
      color: "white"
   }
})