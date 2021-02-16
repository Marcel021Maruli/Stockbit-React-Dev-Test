import { visibility_modal } from "../actions/action_types"

const initialState = {
  isVisible: false
}

const visibilityModal = (state = initialState, action) => {
  switch (action.type) {
    case visibility_modal:
      return { ...state, isVisible: action.payload.value }
    default:
      return state
  }
}

export default visibilityModal