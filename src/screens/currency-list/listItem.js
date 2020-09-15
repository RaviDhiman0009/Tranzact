import React from 'react'
import { View, Text } from 'react-native'
import Svg, { SvgUri, fetchText } from 'react-native-svg'

import styles from './list.style'

export default class CurrncyListItem extends React.PureComponent {
  render () {
    const { item } = this.props
    const { symbol, name, change, iconUrl, price } = item
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.rowDir}>
          <View style={styles.imgContainer}>
            {/* <SvgImage uri={iconUrl} /> */}
            {/* <Svg height={'48'} width={'48'}>
              <SvgUri height='100%' width='100%' uri={iconUrl} />
            </Svg> */}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{symbol}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {name}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{(+(price || '0')).toFixed(2)}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{change}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const SvgImage = ({ uri }) => {
  return <View />
}
