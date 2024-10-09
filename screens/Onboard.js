import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NextButton from '../widgets/NextButton';

const Onboard = () => {
   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
         <Text>
            onboard
         </Text>
         <Image 
            source={require('../assets/onboard.png')}
         
            // source={{ 
            //    // uri: 'https://s3-alpha-sig.figma.com/img/4942/0998/5411d4a9bbcbdd91edb9e550c2ef42f2?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=po-ZVMxtTmZEplpH7mL6~U-~OZYK8xu9ziUqTh-aUbO2v452xyqvdsfnPsDL823pKhYwBw6xkPxMDClHpw7BLzPOy9C5tkud2gf1c9Jf~g8aHmISY6RuFcxPF0gi~zBlDmmnOCPeg60-qfaH~JQAVqWCKZ3kmleoN889iSj5OXCBvxohJThCek6GmE7nFuIUWsSjMUUsKDWNzAH0PCX~wUe9w3RhEPMyL7nsvEhv7uh5E-ak9gjVvpSrxAgJ6uxTt9Fyi-ewfkhC1n8dNX8m3ouE2G5eUSBkZh3uiZK~B0Eh5y2cv~P~TgbfX5u3IVM0Re-zf4W5exLZYQDau2jirQ__' 
            //    // uri: 'https://img.freepik.com/free-vector/partnership-illustration-two-caucasian-girls-working-together-business-partners-partnership-good-job-recognition-women-friends-characters_575670-1503.jpg?t=st=1728503232~exp=1728506832~hmac=2f06b17769ed81340981aee1bbc9ed33763d036ed7f87870b07bee4b6337441a&w=740' 
            // }}  
            style={styles.imageStyle}
            
            />
         

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
   imageBox:{
      height: "50%",
      // backgroundColor: "gold"
   },
   imageStyle:{
      height: "100%",
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