import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    minHeight: height
  },
  fullFlex: {
    flex: 1
  },
  container: {},
  listItemContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    padding: 8
  },
  imgContainer: {
    height: 48,
    width: 48
  },
  img: {
    height: '100%',
    width: '100%'
  },
  rowDir: { flexDirection: 'row' },
  textContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 2 },
  text: {
    fontSize: 12,
    lineHeight: 14
  }
})
