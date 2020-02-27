'use strict';
import React, { PureComponent } from 'react';
import {StyleSheet, Text,  View,TouchableOpacity ,PermissionsAndroid,Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class Camera extends PureComponent {

  constructor(props){
    super(props);
    this.state={
      cameraType:RNCamera.Constants.Type.back,
      Flash:RNCamera.Constants.FlashMode.auto,
      recordingVideo:false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={this.state.cameraType}
          flashMode={this.state.Flash}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          defaultVideoQuality={RNCamera.Constants.VideoQuality["720p"]}
        >
          {({ camera, status,recordAudioPermissionStatus }) => {
            if (status !== 'READY' && this.storagePermission()!=true){
              return <PendingView />
            };
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.state.recordingVideo ? this.stopVideo(camera) : this.takePicture(camera)} onLongPress={()=>this.recordVideo(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> Capture </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.toggleFlash()} style={styles.capture}>
                <Text  style={{ fontSize: 14 }}> Flash </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.toggleCamera()} style={styles.capture}>
                <Text style={{ fontSize: 14 }} >camera toggler</Text>
              </TouchableOpacity>
              
            </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  async  storagePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "App needs access to memory to download the file "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        
        return true;
      } else {
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }

  toggleCamera(){
    if(this.state.cameraType==RNCamera.Constants.Type.back)
    {
      this.setState({
        cameraType:RNCamera.Constants.Type.front
      });
    }
    else
    this.setState({
      cameraType:RNCamera.Constants.Type.back
    });

    console.log(this.state.cameraType);
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
    CameraRoll.saveToCameraRoll(data.uri);
  };

  toggleFlash(){
    console.log(this.state.Flash);
    if(this.state.Flash==RNCamera.Constants.FlashMode.auto)
    {
      this.setState({
        Flash:RNCamera.Constants.FlashMode.on
      });
      console.log(this.state.Flash);
    }
   else if(this.state.Flash==RNCamera.Constants.FlashMode.on)
    {
      this.setState({
        Flash:RNCamera.Constants.FlashMode.off
      });
      console.log(this.state.Flash);
    }
    else
    {
      this.setState({
        Flash:RNCamera.Constants.FlashMode.auto
      });
      console.log(this.state.Flash);
    }
    
  }

  recordVideo=async function(camera){
    const options={
      fixOrientation: true,
      forceUpOrientation: true,
      videoOrientation: 1,
      deviceOrientation: 1,
    };
    this.setState({
      recordingVideo:true
    });
    console.log("Recording starts");
    camera.recordAsync(options)
    .then((data)=>{
      console.log(data.uri);
      CameraRoll.saveToCameraRoll(data.uri);
    })
    .catch((error)=>{
      console.log(error);
    });

    //console.log(uri);

  }

  stopVideo= function(camera){
    this.setState({
      recordVideo:false
    });
   camera.stopRecording();

   

    console.log("finished recording");
    //console.log(data.uri);
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;