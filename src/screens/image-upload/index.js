import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import styles from './upload.style'
export default class Upload extends Component {
  constructor (props) {
    super(props)
    const {
      route: { params }
    } = props
    const { value, type } = params || {}
    this.state = {
      imageSource: value || null,
      type: type || null
    }
  }

  pickImgae = () => {
    const options = {
      title: 'Pick Image'
    }
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        Alert.alert('Error', 'something went wrong.')
        // console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
          imageSource: response.uri,
          type: response.type
        })
      }
    })
  }

  uploadImage = () => {
    const { imageSource, type } = this.state
    const URL = 'https://demo1669736.mockable.io/img-uplaod'
    try {
      const data = new FormData()
      data.append('image', {
        name: `${+new Date()}`,
        type: type,
        uri: imageSource
      })
      imageSource &&
        fetch(URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: { data }
        })
          .then(response => response.json())
          .then(({ msg }) => {
            Alert.alert('Alert', msg, [{ text: 'OK', onPress: () => this.setState({ imageSource: null, type: null }) }])
          })
    } catch (err) {
      Alert.alert('Error', 'something went wrong.')
    }
  }

  render () {
    const { imageSource = null } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.fullFlex}>
          <Text>Preview</Text>
          <Image resizeMode='contain' source={{ uri: imageSource }} style={styles.previewImg} />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.pickImgae} style={styles.btn}>
            <Text style={styles.btnText}>Pick Image</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.uploadImage} style={[, imageSource ? styles.btn : styles.disableBtn]}>
            <Text style={[styles.btnText, imageSource ? { color: '#000' } : { color: '#fff' }]}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
