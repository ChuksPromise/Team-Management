import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { CustomTextField } from '../widgets/CustomTextField'
import PrimaryButton from '../widgets/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
   const navigation = useNavigation();

  return (
      <View>
         <View style={styles.loginSec}>
            <CustomTextField placeholder={"Email"} keyboardType={"email-address"}/>
            <CustomTextField placeholder={"Password"} keyboardType={"visible-password"} secureText={true}/>
            <PrimaryButton>
               <Text>
                  Log in
               </Text>
            </PrimaryButton>
            <TouchableOpacity style={styles.forget} onPress={() => navigation.navigate("Forget-Password")}>
               <Text style={styles.forgetButton}>
                  Forget Password?
               </Text>
            </TouchableOpacity>

            <View style={styles.acctClick}>
               <Text style={styles.acctClickText}>
                  Don't have an acccount
               </Text>
               <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                  <Text style={styles.regText}>
                     Register
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
   container:{
      // height: "90%",
      // backgroundColor: "red"
   },
   loginSec:{
      // height: "90%",
      backgroundColor: "#0414c0",
      marginHorizontal: 5,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
      paddingVertical: 50
   },
   forget:{
      color: "white",
      flexDirection: "row",
      justifyContent: "flex-end"
   },
   forgetButton:{
      color: "white",
      textAlign: 'right',
      width:"auto",
      padding: 10,
      fontWeight: "600",
      fontSize: 17
   },
   acctClick:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   acctClickText:{
      color: "white",
      fontSize: 17
   },
   regText:{
      fontSize: 17,
      color: "white",
      fontWeight: "900",
      textDecorationLine:'underline',
      textDecorationStyle: 'solid',
   }
}) 