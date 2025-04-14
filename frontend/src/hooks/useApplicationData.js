import React, {useReducer} from "react";
import topics from "../mocks/topics";
import photos from "../mocks/photos";

// Initial state
const initalState = {
    showModal: false, 
    photo:{}, 
    favPhotoList:[], 
    photos:photos, 
    topics:topics

}

export const ACTIONS = {
    SELECT_PHOTO: 'SELECT_PHOTO',
    CLOSE_MODAL: 'CLOSE_MODAL',
    TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  }
  
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SELECT_PHOTO:
            return {
                ...state, 
                showModal:true,
                photo: action.payload
            };
        case ACTIONS.CLOSE_MODAL:
            return {
                ...state, 
                showModal:false
            };
        case ACTIONS.TOGGLE_FAV_PHOTO:
            const exists = state.favPhotoList.some(p => p.id === action.payload.id);
            const favPhotoList = exists ? state.favPhotoList.filter(p => p.id !== action.payload.id) : [...state.favPhotoList, action.payload];
            return {
                ...state, favPhotoList
             
            };
        default:  
        return state;
    }
};


export const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
   
  
    const onPhotoSelect = (photo) => {
       dispatch({type:ACTIONS.SELECT_PHOTO, payload:photo})
    }

    const onClosePhotoDetailsModal = () => {
        dispatch({type: ACTIONS.CLOSE_MODAL})
    }

    const updateToFavPhotoIds = (photo) => {
        dispatch({type:ACTIONS.TOGGLE_FAV_PHOTO, payload:photo})
    }
  
    return { 
        state,
        onPhotoSelect,
        onClosePhotoDetailsModal,
        updateToFavPhotoIds
    };
  };