import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      height: 100,
      width: '90%',
      marginVertical: 12,
      backgroundColor: '#fafafa',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 12,
      overflow: 'hidden',
    },
    
    imageContainer: {
        flex: 2.4,
        marginLeft: 3,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },

    textContainer: {
        flex: 5,
        height: '100%',
        justifyContent: 'center',
        marginLeft: 6,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },

    email: {
        fontSize: 14,
        color: '#6e6f70'
    },

    buttonsContainer: {
        flex: 1.2,
        height: '100%',
        backgroundColor: '#f0f0f0',
        borderLeftWidth: 1,
        borderLeftColor: '#a0a0a0'
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});