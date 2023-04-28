import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SimpleButton from '../Button/SimpleButton';
import Style from './Style';

export default () => {
    const [result, setResult] = useState('0')

    const ac = () => {
        setResult('0')
    }

    const del = () => {
        if(result.length > 1) {
            setResult(result.substring(0, result.length - 1))
        } else {
            setResult('0')
        }
    }

    const insert = (character) => {
        if (result === '0' && character != '.') {
            setResult(character)
        } else {
            setResult(result + character)
        }
    }

    return (
        <View style={Style.Calculator}>
            <View style={Style.Menu}>
                <Text style={Style.TextMenuSelect}>
                    Basic
                </Text>
                <Text style={Style.TextMenu}>
                    Scientific
                </Text>
            </View>

            <View style={Style.Display}>
                <Text style={Style.TextDisplay}>{result}</Text>
            </View>

            <View style={Style.Keyboard}>
                <View style={Style.Column1}>
                    <View style={Style.Line1}>
                        <SimpleButton
                            style={{backgroundColor:'#BABABA'}}
                            styleText={{color: '#303136'}}
                            text={'Ac'}
                            onPress={ac}
                        />
                        <SimpleButton
                            style={{backgroundColor:'#BABABA'}}
                            styleText={{color: '#303136', fontSize:22}}
                            text={'DEL'}
                            onPress={del}
                        />
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}}
                            text={'÷'}
                            onPress={() => {insert('÷')}}
                        />
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton
                            text={7}
                            onPress={() => {insert('7')}}
                        />
                        <SimpleButton
                            text={8}
                            onPress={() => {insert('8')}}
                        />
                        <SimpleButton
                            text={9}
                            onPress={() => {insert('9')}}
                        />
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton
                            text={4}
                            onPress={() => {insert('4')}}
                        />
                        <SimpleButton
                            text={5}
                            onPress={() => {insert('5')}}
                        />
                        <SimpleButton
                            text={6}
                            onPress={() => {insert('6')}}
                        />
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton
                            text={1}
                            onPress={() => {insert('1')}}
                        />
                        <SimpleButton
                            text={2}
                            onPress={() => {insert('2')}}
                        />
                        <SimpleButton
                            text={3}
                            onPress={() => {insert('3')}}
                        />
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton
                            style={{flex: 68}}
                            text={0}
                            onPress={() => {insert('0')}}
                        />
                        <SimpleButton
                            style={{flex: 31}}
                            text={'.'}
                            onPress={() => {insert('.')}}
                        />
                    </View>
                </View>

                <View style={Style.Column2}>
                    <View style={Style.Line2_1}>
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}}
                            text={'x'}
                            onPress={() => {insert('x')}}
                        />
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}}
                            text={'-'}
                            onPress={() => {insert('-')}}
                        />
                    </View>
                    <View style={Style.Line2_2}>
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}}
                            text={'+'}
                            onPress={() => {insert('+')}}
                        />
                        <SimpleButton
                            style={{backgroundColor:'#fff'}}
                            styleText={{color: '#303136'}}
                            text={'='}
                            onPress={() => {}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
