import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    App: {
        backgroundColor: '#fafafa',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },

    Title: {
        fontSize:28,
        marginBottom: 6,
    },

    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    
        marginTop: 20,
        marginBottom: 20,
    },

    TextCounter:{
        marginBottom: 16,
        fontSize:22
    },

    ViewCounterButtons: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
