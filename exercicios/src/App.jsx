import React from 'react';
import { View } from 'react-native';

// components
import Primeiro from './components/Primeiro';
// import RandomInt from './components/RandomInt';
import Reader from './components/Reader';
import Counter from './components/Counter';
// import Button from './components/Button';
// import { Comp2, Comp3 } from './components/Multi';
// import MinMax from './components/MinMax';

// styles
import GlobalStyle from './styles/GlobalStyle';

export default () => {
    return (
        <View style={GlobalStyle.App}>
            <Reader title="Charlie Brown" subtitle="Tao natural quanto a luz do dia"/>
            <Counter initialNumber="1"/>
        </View>
    )
}
