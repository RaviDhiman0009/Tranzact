import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './home.style'

export default class Home extends Component {
  goTo = (screen = false, props) => {
    const { navigation } = this.props
    screen && navigation.navigate(screen, props)
  }

  componentDidMount () {
    const {
      route: {
        params: { value, type }
      }
    } = this.props
    if (value && type.includes('image')) {
      this.goTo('ImageUpload', { value, type })
    }
  }

  render () {
    return (
      <View style={styles.fullFlexCenter}>
        <TouchableOpacity
          onPress={() => {
            this.goTo('ImageUpload')
          }}
          style={[styles.btn, styles.mb20]}
        >
          <Text style={styles.btnText}>Image Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.goTo('CryptoCurrencyList')
          }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Crypto Currency List</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
