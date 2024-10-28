import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PrimaryButton from '../widgets/PrimaryButton'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Verify_Forgot_Password = () => {
   const numbers = [5, 1, 7, 7];

   return (
      <View>
         <View style={styles.loginSec}>
            <Text style={styles.verifyText}>
               Enter the 4-digits we have entered sent via the phone number
            </Text>
            <View style={styles.codeTextSec}>
               {
                  numbers.map((number, index) => (
                     <TouchableOpacity style={styles.codeText} key={index}>
                        <Text style={styles.circle}>
                           {number}
                        </Text>
                     </TouchableOpacity>
                  ))
               }
            </View>

            <PrimaryButton>
               <Text>
                  Continue
               </Text>
            </PrimaryButton>
            <TouchableOpacity>
               <Text style={styles.resendText}>
                  Resend Code
               </Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Verify_Forgot_Password

const styles = StyleSheet.create({
   loginSec: {
      // height: "90%",
      backgroundColor: "#0414c0",
      marginHorizontal: 5,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
      paddingVertical: 50
   },
   verifyText: {
      color: "white",
      fontSize: 17
   },
   resendText: {
      textAlign: 'center',
      color: "white",
      fontSize: 16,
      fontWeight: "600"
   },
   codeTextSec: {
      flexDirection: "row",
      justifyContent: 'center',
      marginVertical: 20
   },
   codeText: {
      backgroundColor: "white",
      color: "black",
      borderRadius: 25,
      marginHorizontal: 5,
      fontSize: 17,
      fontWeight: "900",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      width: 50
   },
   circle: {
      fontSize: 18,

   }

})