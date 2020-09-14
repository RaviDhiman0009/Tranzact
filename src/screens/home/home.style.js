import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  fullFlexCenter: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  mb20: { marginBottom: 20 },
  btn: {
    height: 48,
    width: width - 96,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b9cbf'
  },
  btnText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontWeight: '700'
  }
})
