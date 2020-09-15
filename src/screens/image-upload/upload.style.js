import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff', padding: 24 },
  fullFlex: { flex: 1 },
  btnContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btn: {
    height: 48,
    width: width / 2 - 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b9cbf'
  },
  disableBtn: {
    height: 48,
    width: width / 2 - 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  btnText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontWeight: '700'
  },
  previewImg: {
    height: '100%'
  }
})
