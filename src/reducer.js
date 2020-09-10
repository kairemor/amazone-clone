export const initialState = {
  basket: []
}

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET"
}


export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item]
      }

      case actionTypes.REMOVE_FROM_BASKET:

        const index = state.basket.findIndex(item => item.id === action.id)

        return {
          ...state,
          basket: state.basket.splice(index, 1)
        }
        default:
          return state
  }
}

export const getBasketTotal = (basket) => (
  basket.reduce((amount, item) => item.price + amount + 0))