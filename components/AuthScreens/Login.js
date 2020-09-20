import React, { useState,useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Image,ActivityIndicator } from 'react-native'
import Dialog from 'react-native-popup-dialog';
import AntDesign from 'react-native-vector-icons/AntDesign'

 const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible,setVisible] = useState(false)
    const [loading,setLoading] = useState(false)
   

    const validateField = () => {
        //console.warn(email)
        if(email==="" ){
            alert("please enter email")
            return false
        }
    
        else if (password === ""){
           alert("Please enter password")
           return false
        }
         else if(loading){
             setLoading(true)
         }
        else {
           
           navigation.navigate("Home")
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
                    {
                      loading ? <ActivityIndicator  animating ={loading} size="small" color= "white"/>
                      :
                      <Text style={{ color: 'white', fontSize: 20, }}>Login</Text>
                  }  
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=>setVisible(true)}
                    style={{ marginLeft: 100, marginTop: 30, }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Forgot Password ?</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress ={()=>navigation.navigate("Register")}
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, }}>
                <Image
                    style={{ width: 30, height: 30, resizeMode: 'cover', tintColor: 'white', }}
                    source={require('../images/arrow.png')} />
                <Text style={{ color: 'white', fontSize: 20, paddingLeft: 10 }}>SignUp</Text>
            </TouchableOpacity>
            <Dialog
                    visible={visible}
                    onTouchOutside={() =>setVisible(false)} >
          <View style={{width:330,height:220,justifyContent:'center',}}>

          <View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text style ={{fontSize:20,color:'teal',fontWeight:'600',}}>Forgot Password</Text>
            <AntDesign name ="close" size ={20} color ="grey"
              onPress ={()=>setVisible(false)}
               style={{position:'absolute',right:15,bottom:10}}/>
            </View> 

            <View style ={{borderColor:'blue',marginHorizontal:15,borderBottomWidth:1,height:60,justifyContent:'center',marginTop:30}}>
               <TextInput  value ={email}
                            onChangeText={(email)=>setEmail(email)}
                            placeholder="Please Enter Email or Mobile no."
                            placeholderTextColor="#6A89CC"
                            style ={{fontSize:15,left:10}}>
                      </TextInput> 
            </View>
            <TouchableOpacity style={{borderRadius:20,alignItems:'center',justifyContent:'center',marginVertical:20}}
                   onPress ={()=>alert("added soon")}>
            <Text style={{fontSize:20,color:'grey',fontWeight:'600'}}>Submit</Text>
          </TouchableOpacity>  
          </View>
          </Dialog>

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
        fontSize: 15,
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white',
        margin: 10
    },
})

export default Login;