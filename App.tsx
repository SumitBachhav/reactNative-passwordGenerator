import React from "react";
import { Text, View, StyleSheet } from "react-native";

//form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(4, 'Should be max of 16 characters')
  .required('Length is required')
})

export default function App() {
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

//import * as Yup from 'yup'   -> validator


// const PasswordSchema = Yup.object().shape({})

// passwordLength: Yup.number()

//   .min(4, 'Should be min of 4 characters')

//   .max(4, 'Should be max of 16 characters')

//   .required('Length is required')