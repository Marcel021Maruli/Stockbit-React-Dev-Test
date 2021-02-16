import { add_poster } from "../actions/action_types"

const initialState = {
  url: ""
}

const posterUrl = (state = initialState, action) => {
  switch (action.type) {
    case add_poster:
      return { ...state, url: action.payload.src }
    default:
      return state
  }
}

export default posterUrl