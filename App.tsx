import React, { useState } from "react";
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

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  
  const generatePasswordString =(passwordLength:number) => {}

  const createPassword = (characters:string, passwordLength:number) => {}

  const resetPasswordState = () => {}


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

// const PasswordSchema = Yup.object().shape({
//   passwordLength: Yup.number()
//   .min(4, 'Should be min of 4 characters')
//   .max(4, 'Should be max of 16 characters')
//   .required('Length iss required')
// })

//useState
//const [lowerCase, setLowerCase] = useState(true)