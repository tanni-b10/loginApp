import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, } from 'react-native';

const Login = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [checkValidPassword, setCheckValidPassword] = useState(false);

    const handleCheckEmail = (text) => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(text)) {
            setCheckValidEmail(true);
        } else {
            setCheckValidEmail(false);
        }
    }
    const handleCheckPassword = (text) => {
        setPassword(text)
        if (text.length > 8)
            setCheckValidPassword(true);
    }

    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }} keyboardShouldPersistTaps={'always'}>
            <Image source={require('../images/Rectangle.png')} style={{ width: '100%' }} />

            <Text style={{
                textAlign: "center",
                fontSize: 28,
                color: "#FFF",
                fontWeight: 500,
                marginTop: 60
            }}>
                Welcome
            </Text>
            <Text style={{
                color: '#C4C4C4',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 500,

            }}>
                Login into your account
            </Text>


            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 30,
                marginTop: 20
            }}>
                Email
            </Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#C4C4C4"
                maxLength={40}
                autoCapitalize='none'
                style={{
                    color: 'black',
                    padding: 12,
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: '#FEFCFC',
                    marginVertical: 2,
                    marginHorizontal: 30
                }}
                onChangeText={(text) => handleCheckEmail(text.trim())}
            />

            {!checkValidEmail &&
                <Text style={{ color: 'red', textAlign: 'left', marginLeft: 30 }}>Enter vaild email</Text>}

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                margin: 2,
                marginLeft: 30,
            }}>Password</Text>

            <View style={{
                flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEFCFC', borderRadius: 8,
                paddingRight: 18, marginHorizontal: 30, justifyContent: 'space-between'
            }}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={showPassword}
                    placeholderTextColor="#C4C4C4"
                    maxLength={40}
                    style={{
                        color: 'black',
                        height: 48,
                        borderRadius: 6,
                        backgroundColor: '#FEFCFC',
                        padding: 12,
                        width: '90%'
                    }}
                    onChangeText={(text) => handleCheckPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ backgroundColor: '#FEFCFC' }}>
                    <Image
                        source={
                            showPassword ? require('../images/eye.png') : require('../images/oeye.png')
                        }
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 10 }} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                    style={{ marginRight: 30, color: 'red', fontSize: 16 }}>
                    Forgot password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                disabled={! checkValidEmail&&checkValidPassword}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Register')}
                style={{
                    backgroundColor: checkValidEmail && checkValidPassword ? '#29B6F6' : 'grey',
                    marginVertical: 20, marginHorizontal: 40, borderRadius: 822, color: '#29B6F6', paddingVertical: 9, alignItems: "center"
                }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#616161', fontSize: 16, }}>
                    Don't have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginStart: 4 }}>
                    <Text style={{ color: '#D9D9D9', fontSize: 16, }}>
                        Create now
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 30, marginTop: 70, marginBottom: 100 }}>
                <Image source={require('../images/Google.png')} />
                <Image source={require('../images/facebook.png')} />
                <Image source={require('../images/instagram.png')} />
            </View>


        </ScrollView>

    )
}
export default Login;