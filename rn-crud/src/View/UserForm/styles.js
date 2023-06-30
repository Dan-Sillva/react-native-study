import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputContainer:{
      flex: 5,
      width: '100%',
      justifyContent: 'center'
    },

    buttonContainer:{
      flex: 2,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent:'space-evenly'
    },
    
    button: {
      height: 80,      
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center'
    },

    buttonText:{
      fontSize: 20,
      fontWeight: 'bold',
    }
  });