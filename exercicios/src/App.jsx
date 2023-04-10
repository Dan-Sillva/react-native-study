import React from 'react';
import { View } from 'react-native';

// components
import Primeiro from './components/Primeiro';
import RandomInt from './components/RandomInt';
// import { Comp2, Comp3 } from './components/Multi';
// import MinMax from './components/MinMax';

// styles
import GlobalStyle from './styles/GlobalStyle';

export default () => {
    return (
        <View style={GlobalStyle.App}>
            <Primeiro />
            {/* <Comp2 />
            <Comp3 /> */}
            {/* <MinMax min='3' max='30'/> */}
            <RandomInt min="3" max="10"/>
        </View>
    )
}
