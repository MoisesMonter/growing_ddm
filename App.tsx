import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity, Button} from 'react-native';
import TextFont from './components/atomes/fonts';
import { colors } from './components/atomes/colors/colors';
import User_Info from './components/organisms/user_info';
import { Growing } from './components/page/growing';
import Bar_List_User from './components/molecules/bar_list_user';



export default function App() {
  const styles_colors = StyleSheet.create({
    container:{
      backgroundColor: colors.background ,
    },
  })

  return(
    <View style={[styles.container,styles_colors.container]}>
      <Growing></Growing>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:'5%',
    paddingRight:'5%',
    paddingLeft:'5%',

    justifyContent: 'flex-start',
  },

});