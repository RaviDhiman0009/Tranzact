import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import styles from './list.style'
import CurrncyListItem from './listItem'
import { updateCryptoCurrencyList } from './../../../redux/action'

class List extends React.Component {
  componentDidMount () {
    this.updateList()
    this.interval = setInterval(() => {
      this.updateList()
    }, 30000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  updateList = () => {
    let { updateCryptoCurrencyList } = this.props
    updateCryptoCurrencyList()
  }

  render () {
    const { cyrptoCurrencyList = [] } = this.props
    return (
      <View style={styles.body}>
        <View style={[styles.container, styles.fullFlex]}>
          <FlatList
            data={cyrptoCurrencyList}
            renderItem={({ item }) => <CurrncyListItem item={item} />}
            keyExtractor={(item, key) => `${key}`}
          />
        </View>
      </View>
    )
  }
}

const mapStatepToProps = state => {
  return {
    cyrptoCurrencyList: state.cyrptoCurrencyList,
    isLoading: state.loader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCryptoCurrencyList: () => dispatch(updateCryptoCurrencyList())
  }
}

export default connect(
  mapStatepToProps,
  mapDispatchToProps
)(List)
