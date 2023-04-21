import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    SimpleBlock: {
        height: 30,
        width: 30,
        // backgroundColor: '#000'
    },

    FlexV1: {
        flexGrow: 1,
        justifyContent:'center',
        backgroundColor:'#212121'
    },

    FlexV2: {
        flex:1,
        width:'100%',
        alignItems:'baseline',
        justifyContent:'space-evenly',
        backgroundColor:'#212121',

        borderRadius:30
    },

    FlexV3: {
        height:400,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor:'#212121',
    },

    FlexV4: {
        height:'80%',
        width:'60%',

        backgroundColor:'#212121',
    }
})
