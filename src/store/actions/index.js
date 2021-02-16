import { add_details, visibility_modal, add_poster } from "./action_types"

export const addDetails = content => ({
  type: add_details,
  payload: {
    content
  }
});

export const visibilityModal = value => ({
  type: visibility_modal,
  payload: {
    value
  }
});

export const addPoster = src => ({
  type: add_poster,
  payload: {
    src
  }
});