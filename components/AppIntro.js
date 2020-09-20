import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,ScrollView,ImageBackground
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'About Us',
    text: 'We believe that our customers are our first priority and by focusing on their business     goals we completely indulge ourselves in their growth and development. We provide solutions which best suits the needs of the client. We wish to become a part of their growth story Our vision and mission has inspired us to team with skilled and innovative developers. Our developers have ensured in gaining the reliability of the clients and keeping the competition alive. We have thrived through all the ups and downs and our developers have played a major role. We excel in the field of website/web portal development, designing, maintenance and digital transformation. We have a skilled and experienced team for the development of Mobile Applications both on Android and iOS platform. Our work speaks for us and we have proved it time and again to our clients that they can always rely on our experience and approach. Our unsurpassed team such as in-house content creation team, experienced SEO team, creative designing team, and skilled web and mobile app developers makes it easy for us to offer our clients all the desired services under one roof.With each passing day we are growing, generating and gaining client’s trust, developing a strong long lasting relationship which has aspired us to learn, research and put the best we can.',
    bg: '#99AAAB',
    image:require('../assets/images/user.png')
  },
  {
    title: 'Services',
    text: "Software and Web development \nMobile App development \nDigital Marketing    ___________________________________________ \n  \n Technologies Stack .... \n \n   React Native / React js  \n \n   MERN / MEAN Stack \n\n   AWS  \n\n   Android / Android Studio  \n\n   Php / Codeigniter / Laravel  \n\n   Google Api \n\n   Stripe / PayPal  \n\n   Swift iOS / Xcode  \n\n   C#",
    image:require('../assets/images/services.png'),
    bg: '#99AAAB',
  },
  {
    title: 'Contact Us',
    text: 'iGent Digital Solutions Pvt Ltd \n\n1042, Tower – B, iThum, Plot No. – 40,  A block, Sector 62, Noida, Uttar Pradesh  201301,India \n\n+91 120 420 5497 \n\ncontact@igentdigital.com',
     image:require('../assets/images/telephone.png'),
    bg: '#99AAAB',
  },
];

const styles = StyleSheet.create({
  slide: {
      flex:1,
    
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 30,
    marginLeft:130
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.6)',
    padding:5,
    letterSpacing:1,
    color:'white',
     height:600,
     marginHorizontal:5
    
    
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    borderWidth:1,borderColor:'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default class AppIntro extends React.Component {
    constructor(props){
        super(props)
    }
  _renderItem = ({item}) => {
    return (
      <ImageBackground 
      source={require('./images/splashImage1.jpg')}
      
      
        style={[
          styles.slide,
          // {
          //   backgroundColor:'white',
          // },
        ]}>
 
        <Image source={item.image} style={styles.image} />
       <Text style={styles.title}>{item.title}</Text>

      <ScrollView>
        
       <Text style={styles.text}>{item.text}</Text>
      
       </ScrollView>
       </ImageBackground>
    );
  };

  _keyExtractor = (item) => item.title;

  _renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? {backgroundColor: 'white'}
                      : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                  ]}
                  onPress={() => this.goToSlide(i, true)}
                />
              ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress ={()=>this.props.navigation.navigate("Login")}
              style={[styles.button, {backgroundColor: '#023e3f'}]}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>this.props.navigation.navigate("Register")}
            style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
        />
      </View>
    );
  }
}
