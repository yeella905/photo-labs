import { ACTIONS } from "./actions";

    export function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SELECT_PHOTO:{
        return {
          ...state,
          showModal: true,
          photo: action.payload
        }}
      case ACTIONS.CLOSE_MODAL:{
        return {
          ...state,
          showModal: false
        }}
      case ACTIONS.TOGGLE_FAV_PHOTO:{
        // Check if the photo exissts in our favourite array
        const exists = state.favPhotoList.some(p => p.id === action.payload.id);
        // If the photo exists filter it out/remove it, if it doesn't add it to the array
        const favPhotoList = exists
          ? state.favPhotoList.filter(p => p.id !== action.payload.id)
          : [...state.favPhotoList, action.payload];
        return {
          ...state,
          favPhotoList
        }}
      case ACTIONS.LOAD_TOPIC:{
        return {
          ...state,
          topics: action.payload
        }}
      case ACTIONS.LOAD_PHOTO:{
        return {
          ...state,
          photos: action.payload
        }}
      default:
        return state;
    }
  }