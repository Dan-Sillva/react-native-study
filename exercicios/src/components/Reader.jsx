import React from 'react';
import { Text } from 'react-native';

import GlobalStyle from '../styles/GlobalStyle';

export default (props) => {
    return (
        <React.Fragment>
            <Text style={GlobalStyle.Title}>
                {props.title}
            </Text>
            <Text>
                {props.subtitle}
            </Text>
        </React.Fragment>
    )
}
/**
 *  Quando se deseja devolver, retornar, mais de um elemento ao mesmo tempo (nesse caso,
 *  dois <Text>), é preciso envolver esses elementos em algo, pois o React Native só vai
 *  aceitar caso esteja retornando apenas um elemento (nesse caso, o React.Fragment, que
 *  serve justamente pra isso, onde nele sim, contem os dois <Text> que queremos).
 */
