import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomTextField } from '../widgets/CustomTextField';
import NextButton from '../widgets/NextButton';

const Onboard = () => {
   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
         <Text>
            This is on Onboard Page
         </Text>

         {/* <CustomTextField placeholder={"Your name Please"} keyboardType={"email-address"}/> */}
      </View>

      <View style={styles.blueSection}>
         <View style={styles.blueUpper}>
            <Text style={styles.upperBigText}>
               Welcome To Valuemax Team
            </Text>
            <Text style={styles.upperLowerText}>
               We're glad to have you onboard. Our App is 
               designed to help you keep track of your 
               shcedule and manage your time more efficiently. 
            </Text>
         </View>

         <View style={styles.blueLower}>
            <Text style={styles.lowerText}>
               Skip
            </Text>
            <NextButton onPress={() => navigation.navigate("Login")}>
               <Text>
                  Next
               </Text>
            </NextButton>
         </View>
      </View>
    </View>
  )
}

export default Onboard


const styles = StyleSheet.create({
   container:{
      height: "100%",
      justifyContent: "space-between",
      alignItems: "center"
   },
   blueSection:{
      height: "50%",
      width: "100%",
      backgroundColor: "#0414c0",
      color: "white",
      paddingVertical: 30,
      paddingHorizontal: 10,
      justifyContent: "space-between",
   },
   blueUpper:{
      // textAlign: "center",
      // width: "50%",
      alignItems: "center"
   },
   upperBigText:{
      textAlign: "center",
      fontSize: 40,
      width: "60%",
      color: "white",
      fontWeight: 'bold',
      marginVertical: 10
   },
   upperLowerText:{
      textAlign: "center",
      fontSize: 20,
      width: "80%",
      color: "white",
      marginVertical: 10
   },
   blueLower:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20
   },
   lowerText:{
      color: "white",
      fontSize: 20
   }

})