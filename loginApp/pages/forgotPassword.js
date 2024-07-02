import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {

    const [checkVaildEmail, setCheckValidEmail] = useState(false)

    const handleCheckEmail = (text) => {
        let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        if (regex.test(text)) {
            setCheckValidEmail(true);
        } else {
            setCheckValidEmail(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'black' }} keyboardShouldPersistTaps='always'>
            <Image source={require('../images/Rectangle.png')} style={{ width: '100%' }} />
            <Text style={{
                flex: 1,
                textAlign: "center",
                fontSize: 24,
                color: "#FFF",
                fontWeight: 500,
                marginTop: 31
            }}>Forgot password</Text>

            <Text style={{
                color: '#C4C4C4',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 30,
                marginTop: 60
            }}>Enter your email</Text>

            <TextInput placeholder="Email" placeholderTextColor="#C4C4C4" maxLength={40} autoCapitalize='none'
                style={{
                    fonSize: 16,
                    padding: 12,
                    borderRadius: 6,
                    backgroundColor: '#FEFCFC',
                    marginTop: 4,
                    marginBottom: 11,
                    marginHorizontal: 30,
                    color: 'black',
                }}
                onChangeText={(text) => handleCheckEmail(text)}
            />

            {!checkVaildEmail &&
                <Text style={{ color: 'red', marginRight: 30, alignSelf: 'flex-end' }}>Enter vaild email</Text>}

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                <Text style={{ color: '#ACB3BF', fontSize: 16, fontWeight: 500 }}>
                    Choose another method
                </Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    Need help?
                </Text>
            </View>

            <TouchableOpacity disabled={!checkVaildEmail} onPress={() => navigation.navigate('Verification')}
                style={{
                    backgroundColor: checkVaildEmail ? '#29B6F6' : 'grey',
                    marginTop: 22, borderRadius: 822, paddingVertical: 9, alignSelf: 'center', width: 280,marginBottom:100
                }}>
                <Text style={{ color: '#fff', fontWeight: 500, fontSize: 20, alignSelf: 'center' }}>
                    Send OTP
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default ForgotPassword;