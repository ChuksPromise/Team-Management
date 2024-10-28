import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function Home_Screen({ navigation }) {
     return (
          <View style={styles.container}>
               {/* Top image background */}
               <ImageBackground
                    // source={{ uri: 'https://example.com/image.jpg' }}
                    source={require('../../assets/homepage-header.png')}
                    style={styles.headerBackground}
                    imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
               >
                    <View style={styles.headerContent}>
                         {/* Sidebar icon */}
                         <TouchableOpacity style={styles.iconButton} onPress={() => navigation.toggleDrawer()}>
                              <Ionicons name="menu-outline" size={30} color="#FFCC00" />
                         </TouchableOpacity>

                         {/* Notification and user info */}
                         <View style={styles.userInfo}>
                              <FontAwesome name="bell" size={24} color="white" />

                              <Image
                                   source={require('../../assets/icon.png')}
                                   style={{ width: 30, height: 30, borderRadius: 100 }}
                              />

                              <Text style={styles.userName}>Esther</Text>
                         </View>
                    </View>
               </ImageBackground>

               {/* Task and Personnel buttons */}
               <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>Create Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>Manage Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>Create Personnel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>Manage Personnel</Text>
                    </TouchableOpacity>
               </View>
          </View>
     );
}

export default Home_Screen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#F5F5F5',
     },
     headerBackground: {
          height: 500,
          width: '100%',
     },
     headerContent: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 40,
     },
     iconButton: {
          backgroundColor: '#F5F5F5',
          padding: 10,
          borderRadius: 5,
     },
     userInfo: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 9
     },
     userName: {
          color: 'white',
          fontSize: 18,
          // marginLeft: 10,
     },
     buttonsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',  // This allows the items to wrap to the next row
          justifyContent: 'space-around',
          padding: 8,
          // justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 40,
     },
     button: {
          backgroundColor: 'white',
          paddingVertical: 29,
          paddingHorizontal: 2,
          marginVertical: 10,
          width: '45%',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#edeff2',
          borderStyle: 'solid',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
          alignItems: 'center',
     },
     buttonText: {
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1F2937',
     },
});
