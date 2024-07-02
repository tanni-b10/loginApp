import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';


const Register = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [goodPassword, setGoodPassord] = useState(false);

    const [checkVaildEmail, setCheckValidEmail] = useState(true)
    const [seePassword, setSeePassword] = useState(true);
    const [number, setNumber] = useState(false);

    const handleCheckEmail = (text) => {

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(text)) {
            setCheckValidEmail(true);
        } else {
            setCheckValidEmail(false);
        }
    }

    const handlePassword = (text) => {
        let new_pass = text;
        setPassword(new_pass);

        let lowerCase = /[a-z]/g;
        let upperCase = /[A-Z]/g;
        let numbers = /[0-9]/g;

        if (!new_pass.match(lowerCase)) {
            setGoodPassord(false);
            setErrorMessage("Password should contains lowercase letters!");
        } else if (!new_pass.match(upperCase)) {
            setGoodPassord(false);
            setErrorMessage("Password should contain uppercase letters!");
        } else if (!new_pass.match(numbers)) {
            setGoodPassord(false);
            setErrorMessage("Password should contains numbers also!");
        } else if (new_pass.length < 10) {
            setGoodPassord(false);
            setErrorMessage("Password length should be more than 10.");
        } else {
            setGoodPassord(true);
            setErrorMessage("Password is strong!");
        }
    }

    const handleMobileNumber = (text) => {
        text = text ? text?.replace(/[,.-]/g, '').replace(/^0+/, '') : ''
        setNumber(text)
    }
    const disabled = !number.length === 10 && !username.length > 1 && !checkVaildEmail && goodPassword

    return (
        <ScrollView style={{ backgroundColor: 'black' }} keyboardShouldPersistTaps='always'>
            <Image source={require('../images/Rectangle.png')} style={{ width: '100%' }} />

            <Text style={{
                textAlign: "center",
                fontSize: 28,
                color: "#FFF",
                fontWeight: 500,
                marginTop: 5,
            }}> Register</Text>

            <Text style={{
                color: '#C4C4C4',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 500,
            }}>Create a new account</Text>

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 30,
                marginTop: 20
            }}>Username</Text>

            <TextInput
                placeholder="Username"
                placeholderTextColor="#C4C4C4"
                maxLength={40}
                autoCapitalize='none'
                style={{
                    padding: 12,
                    borderRadius: 6,
                    backgroundColor: '#FEFCFC',
                    marginHorizontal: 30,
                    color: 'black'
                }}
                onChangeText={(text) => setUsername(text.trim())}
            />

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 500,
                marginLeft: 30,
                marginTop: 20
            }}>Email</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#C4C4C4"
                autoCapitalize='none'
                maxLength={40}
                style={{
                    padding: 12,
                    borderRadius: 6,
                    backgroundColor: '#FEFCFC',
                    margin: 2,
                    marginHorizontal: 30,
                    color: 'black',

                }}
                onChangeText={(text) => handleCheckEmail(text.trim())}
            />

            {!checkVaildEmail &&
                <Text style={{ color: 'red', textAlign: 'left', marginLeft: 30 }}>Enter vaild email</Text>}

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 30,
                marginTop: !checkVaildEmail ? 2 : 20,
            }}>MobileNumber</Text>

            <TextInput maxLength={10} keyboardType='number-pad' placeholder="MobileNumber" placeholderTextColor="#C4C4C4" autoCapitalize='none' style={{
                color: 'black',
                padding: 10,
                height: 48,
                borderRadius: 6,
                backgroundColor: '#FEFCFC',
                margin: 2,
                marginHorizontal: 30,
            }}
                value={number}
                onChangeText={(text) => handleMobileNumber(text.trim())}
            />

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                margin: 2,
                marginLeft: 30,
                marginTop: 20,
            }}>Password</Text>

            <View style={{
                flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEFCFC', borderRadius: 8,
                paddingRight: 18, marginHorizontal: 30, justifyContent: 'space-between'
            }}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={seePassword}
                    placeholderTextColor="#C4C4C4"
                    maxLength={40}
                    autoCapitalize='none'
                    style={{
                        color: 'black',
                        height: 48,
                        borderRadius: 6,
                        backgroundColor: '#FEFCFC',
                        padding: 12,
                        width: '90%'
                    }}
                    onChangeText={(text) => handlePassword(text.trim())}
                />
                <TouchableOpacity onPress={() => { setSeePassword(!seePassword); }}>
                    <Image source={
                        seePassword ? require('../images/eye.png') : require('../images/oeye.png')
                    }
                    />
                </TouchableOpacity>
            </View>
            <View style={{ color: 'red', marginLeft: '7%' }}>
                <Text style={{ color: goodPassword ? 'lightgreen' : 'red' }}>{errorMessage}</Text>
            </View>
{console.log(number.length != 10 , username.length==0 , !checkVaildEmail , !goodPassword)}
            <TouchableOpacity disabled={number.length != 10 || username.length ==0  || !checkVaildEmail || !goodPassword}
                onPress={() => navigation.navigate('Home')}
                activeOpacity={0.8}
                style={{
                    backgroundColor: (number.length == 10 && username.length >0 && checkVaildEmail && goodPassword)? '#29B6F6' :'grey' ,
                    marginTop: 30, marginLeft: 50, borderRadius: 822, height: 48, color: '#29B6F', marginRight: 57
                }}>
                <Text style={{ color: '#fff', textAlign: 'center', marginTop: 8, fontWeight: 500, fontSize: 20 }}>
                    Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginLeft: '12%', marginTop: 20, marginBottom: 100 }}>
                <Text style={{ color: '#616161', align: 'centre', fontSize: 16, marginLeft: 36 }}>
                    Already have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 8 }}>
                    <Text style={{ color: '#D9D9D9', fontSize: 16, fontWeight: 500 }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Register;