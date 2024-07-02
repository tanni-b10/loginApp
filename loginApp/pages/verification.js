import React, { useRef, useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

const Verification = ({ navigation }) => {

    const [mobileOtpCode, setmobileOtpCode] = useState("");
    const [emailOtpCode, setemailOtpCode] = useState("");

    const maximumCodeLength = 5;
    const checkValid = () => {
        if (emailOtpCode == mobileOtpCode && emailOtpCode != "") {
            Alert.alert("Hey! welcome back")
            navigation.navigate('Login');
        }
        else {
            Alert.alert("Invalid OTP");
        }
    }
    return (
        <ScrollView style={{ backgroundColor: 'black' }} keyboardShouldPersistTaps={'always'}>
            <Image source={require('../images/Rectangle.png')} style={{ width: '100%' }} />

            
                <Text style={{
                    textAlign: "center",
                    fontSize: 24,
                    color: "#FFF",
                    fontWeight: 500,
                }}>Verification</Text>
                <Text style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 500,
                }}>Messenger has send a code to</Text>

                <Text style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 500,
                }}>verify your account</Text>

            <Text style={{
                color: '#FEFCFC',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 32,
                marginTop: 23
            }}>Email OTP</Text>

            <OtpInput
                code={emailOtpCode}
                setCode={setemailOtpCode}
                maximumLength={maximumCodeLength}

            />
            <Text style={{
                color: '#FEFCFC',
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 32,
                marginTop: 15,
            }}>Mobile OTP</Text>

            <OtpInput
                code={mobileOtpCode}
                setCode={setmobileOtpCode}
                maximumLength={maximumCodeLength}
            />
            <TouchableOpacity
                style={{ backgroundColor: emailOtpCode == mobileOtpCode && (emailOtpCode != "") ? '#29B6F6' : 'grey', marginBottom: 5, marginTop: 30, marginLeft: 50, borderRadius: 822, height: 48, color: '#29B6F', marginRight: 57 }}>
                <Text
                    onPress={() => checkValid()}
                    style={{ textAlign: 'center', marginTop: 8, fontWeight: 500, fontSize: 20 }}>
                    Verify</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <MyTimer />
            </View>

        </ScrollView>
    )
}
const OtpInput = ({ code, setCode, maximumLength }) => {

    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();


    const boxDigit = (_, index) => {

        const emptyInput = "";
        const digit = code[index] || emptyInput;

        return (
            <View style={{
                borderRadius: 5, width: 50,
                backgroundColor: 'white', height: 50, alignItems: 'center',
            }} key={index}>
                <Text style={{ fontSize: 20, textAlignVertical: 'center', flex: 1, color: 'black' }}>{digit}</Text>
            </View>
        );
    };
    return (
        <View style={{marginHorizontal:32}}>
            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly'  }}>{boxArray.map(boxDigit)}</View>
            <TextInput
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                keyboardType='numeric'
                style={{
                    borderColor: '#e5e5e5', borderWidth: 1, opacity:0,
                    borderRadius: 6, padding: 11, width: '100%', position: 'absolute'
                }}
            />
        </View>
    )
}

const MyTimer = () => {
    let timer = {};
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timer);
    });

    const startTimer = () => {
        timer = setTimeout(() => {
            if (timeLeft <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTimeLeft(timeLeft - 1);
        }, 1000)
    }

    const start = () => {
        setTimeLeft(60);
        clearTimeout(timer);
        startTimer();
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={start} style={{ color: '#E5E5E5' }}>
                <Text style={{ color: 'white', fontWeight: 500, fontSize: 16 }}>Resend : </Text>
            </TouchableOpacity>
            <Text style={{ color: '#EE6C32', fontSize: 16, fontWeight: 500 }}>00:{timeLeft}</Text>
        </View>
    )
}

export default Verification;