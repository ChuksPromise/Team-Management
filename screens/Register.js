import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomTextField } from '../widgets/CustomTextField';
import PrimaryButton from '../widgets/PrimaryButton';

const Register = () => {

   const navigation = useNavigation();

   return (
       <View>
          <View style={styles.loginSec}>
             <CustomTextField placeholder={"Email"} keyboardType={"email-address"}/>
             <CustomTextField placeholder={"Password"} keyboardType={"visible-password"} secureText={true}/>
             <CustomTextField placeholder={"Confirm Password"} keyboardType={"visible-password"} secureText={true}/>
             <PrimaryButton>
                <Text>
                   Register
                </Text>
             </PrimaryButton>
              
             <View style={styles.acctClick}>
                <Text style={styles.acctClickText}>
                   Already have an acccount
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                   <Text style={styles.regText}>
                      Login
                   </Text>
                </TouchableOpacity>
             </View>
          </View>
       </View>
   )
}

export default Register

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