/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  customButtons: [{ name: 'Click', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
    avatarSource:''
  },
};

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null
    }
  }

  openCamera = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };
    
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log('In else');        
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    console.log(this.state);
    
    return (
      <View style={styles.container}>
        {
          this.state.avatarSource !== null &&
            <Image
              style={{ height: 250, width: 250 }}
              source={{ uri: this.state.avatarSource.uri }}
              resizeMode={'contain'}
            />
        }
        <TouchableOpacity onPress={() => this.openCamera()} style={styles.buttonClick}>
          <Text style={styles.textColor}>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonClick: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#000000',
    color:'#ffffff',
    padding:20
  },
  textColor:{
    color:'#ffffff'
  }
});
