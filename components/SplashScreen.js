import React from 'react';
import { View, Text,ImageBackground,Dimensions,Image } from 'react-native';
const {width,height} =Dimensions.get('window');

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('slider');
    }
  }

  render() {
    return (
      <ImageBackground
      style={styles.viewStyles}

      source={require('./images/splashImage1.jpg')}
      
      >
      <View style={styles.MainContainer}>
        <Image
          source={require('../assets/images/igent.png')}
          style={{ width:200, height:150,resizeMode:'contain' }}
        />
       
      </View>
    </ImageBackground>

    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    width:width,
    height:height,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'contain'
    
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },MainContainer:{
   flex:1,
    
    justifyContent:'center',
    alignItems: 'center',
  }
}

export default SplashScreen;
