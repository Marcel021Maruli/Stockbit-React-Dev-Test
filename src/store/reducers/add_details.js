import { add_details } from "../actions/action_types"

const initialState = {
  detail: {}
}

const detailMovie = (state = initialState, action) => {
  switch (action.type) {
    case add_details:
      return { ...state, detail: action.payload.content }
    default:
      return state
  }
}

export default detailMovie