import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Image,Linking } from 'react-native'


 const Register = ({navigation}) => {
    const [username,setUsername] =  useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const validateField = () => {
        // console.warn(username)
         if(username==="" ){
            alert("please enter username")
            return false
        }
         else if(email==="" ){
            alert("please enter email")
            return false
        }
    
        else if (password === ""){
           alert("Please enter password")
           return false
        }

        else {
           alert("successfull")
        }
    return true
    }
    return (
        <ImageBackground source={require('../images/splashImage1.jpg')}
            style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    autoCaptialize="none"
                    placeholder="Username"
                    underlineColorAndroid="transparent"
                    style={styles.inputStyle}
                    onChangeText={username => setUsername(username)}
                    value={username}
                />
                <TextInput
                    autoCorrect={false}
                    autoCaptialize="none"
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    style={styles.inputStyle}
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
                <TextInput
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCaptialize="none"
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    style={styles.inputStyle}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />

                <TouchableOpacity onPress ={()=>validateField()}
                style={styles.buttonStyle}>
                    <Text style={{ color: 'white', fontSize: 20, }}>Register</Text>
                </TouchableOpacity>

            </View>
            <Text style={{color: 'white', marginBottom: 20,textAlign:'center',}}
                    onPress={() => Linking.openURL('https://www.igentdigital.com/')}>
                    www.igentdigital.com
        </Text> 
           

        </ImageBackground>

    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 20


    },
    buttonStyle: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 35

    },
    inputStyle: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white',
        margin: 10
    },
})

export default Register;