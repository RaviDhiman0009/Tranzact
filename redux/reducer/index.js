import { UPDATE_CURRENCY_LIST, UPDATE_LOADER } from '../constants/actionType'

const initialState = {
  cyrptoCurrencyList: [],
  loader: false
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_CURRENCY_LIST:
      return { ...state, cyrptoCurrencyList: payload.list, loader: false }

    case UPDATE_LOADER:
      return { ...state, loader: payload.loader }

    default:
      return state
  }
}
