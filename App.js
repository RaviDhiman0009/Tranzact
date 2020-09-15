import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import ReduxStore from './redux/store'

/** Routes Screens imports */
import Home from './src/screens/home'
import CryptoCurrencyList from './src/screens/currency-list'
import ImageUpload from './src/screens/image-upload'

const store = ReduxStore()
const Stack = createStackNavigator()

function App (props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} initialParams={props} />
          <Stack.Screen
            options={{
              headerTitle: props => <Title label={'Image Upload'} />
            }}
            name='ImageUpload'
            component={ImageUpload}
          />
          <Stack.Screen
            options={{
              headerTitle: props => <Title label={'Crypto Currency List'} />
            }}
            name='CryptoCurrencyList'
            component={CryptoCurrencyList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const Title = ({ label = '' }) => {
  return <Text style={styles.titleText}>{label || ''}</Text>
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.5,
    fontWeight: '600'
  }
})

export default App
