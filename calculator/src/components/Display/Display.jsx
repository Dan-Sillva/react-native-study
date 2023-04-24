import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SimpleButton from '../Button/SimpleButton';
import Style from './Style';

export default () => {
    const [result , setResult] = useState(0)
    
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
                        />
                        <SimpleButton 
                            style={{backgroundColor:'#BABABA'}}
                            styleText={{color: '#303136'}}
                            text={'x'}
                        />
                        <SimpleButton 
                            style={{backgroundColor:'#ae78ff'}}
                            text={'/'}
                        />
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton text={7}/>
                        <SimpleButton text={8}/>
                        <SimpleButton text={9}/>
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton text={4}/>
                        <SimpleButton text={5}/>
                        <SimpleButton text={6}/>
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton text={1}/>
                        <SimpleButton text={2}/>
                        <SimpleButton text={3}/>
                    </View>
                    <View style={Style.Line1}>
                        <SimpleButton style={{flex: 68}} text={0}/>
                        <SimpleButton style={{flex: 31}} text={'.'}/>
                    </View>
                </View>

                <View style={Style.Column2}>
                    <View style={Style.Line2_1}>
                        <SimpleButton 
                            style={{backgroundColor:'#ae78ff'}}
                            text={'*'}
                        />
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}} 
                            text={'-'}
                        />
                    </View>
                    <View style={Style.Line2_2}>
                        <SimpleButton
                            style={{backgroundColor:'#ae78ff'}}
                            text={'+'}
                        />
                        <SimpleButton 
                            style={{backgroundColor:'#fff'}}
                            styleText={{color: '#303136'}} 
                            text={'='}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}