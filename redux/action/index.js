import { UPDATE_LOADER, UPDATE_CURRENCY_LIST } from '../constants/actionType'

const updateLoader = bool => {
  return {
    type: UPDATE_LOADER,
    payload: { loader: bool }
  }
}

const updateCurrencyList = list => {
  return {
    type: UPDATE_CURRENCY_LIST,
    payload: { list }
  }
}

const updateCryptoCurrencyList = () => {
  return dispatch => {
    dispatch(updateLoader(true))
    fetch(`https://api.coinranking.com/v1/public/coins/?limit=8`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(response => {
        const { coins } = response.data
        dispatch(updateCurrencyList(coins))
      })
      .catch(err => {
        dispatch(updateLoader(false))
      })
  }
}

export { updateCryptoCurrencyList }
