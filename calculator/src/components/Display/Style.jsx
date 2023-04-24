import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Calculator: {
        flexGrow: 1,
        // marginHorizontal: 10,
        marginTop: 40,

        height: '100%',
    },

    Menu: {
        // backgroundColor: '#ffaa00',
        height: 40,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 10,
    },
        
    TextMenu: {
        fontSize: 16,
        marginLeft: 10,
        color: '#fff',
    },

    TextMenuSelect: {
        fontSize: 16,
        marginLeft: 10,
        borderBottomWidth: 1,
        color: '#ae78ff',
        borderColor: '#ae78ff',
    },

    Display: {
        marginHorizontal: 15,
        height: 280,
        marginBottom: 10,
        justifyContent: 'flex-end',

        borderBottomWidth: 1,
        borderColor: '#ddf'
    }, 

    TextDisplay: {
        fontSize: 80,
        color: '#fff',
        textAlign: 'right',
        marginHorizontal: 10,
        marginBottom: 15
    },

    Keyboard: {
        // backgroundColor:'#33ffaa', 
        flex:1,
        marginBottom: 90,
        marginHorizontal: 10,
        flexDirection:'row'
    },

    Column1:{
        flex: 3,
        // backgroundColor: '#900', 
    },

    Line1: {
        flex: 1,
        flexDirection: 'row'
    },

    Column2: {
        flex: 1,
        // backgroundColor: '#090' 
    },

    Line2_1: {
        flex: 2,
    },

    Line2_2: {
        flex: 3,
    },
})