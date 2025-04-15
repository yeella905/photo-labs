import { useReducer, useEffect } from "react";

const initialState = {
  showModal: false,
  photo: {},
  favPhotoList: [],
  photos: [],
  topics: []
};

export const ACTIONS = {
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  LOAD_TOPIC: 'LOAD_TOPIC',
  LOAD_PHOTO: 'LOAD_PHOTO'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        showModal: true,
        photo: action.payload
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case ACTIONS.TOGGLE_FAV_PHOTO:
      const exists = state.favPhotoList.some(p => p.id === action.payload.id);
      const favPhotoList = exists
        ? state.favPhotoList.filter(p => p.id !== action.payload.id)
        : [...state.favPhotoList, action.payload];
      return {
        ...state,
        favPhotoList
      };
    case ACTIONS.LOAD_TOPIC:
      console.log(action.payload);
      return {
        ...state,
        topics: action.payload
      };
    case ACTIONS.LOAD_PHOTO:
      console.log(action.payload);
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: photo });
  };


const updateGetTopicPhotos = (topic_id) => {
    fetch(`http://localhost:8001/api/topics/${topic_id}/photos`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_PHOTO, payload: data }));

}
 

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_TOPIC, payload: data }));

    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_PHOTO, payload: data }));
  }, []);

  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    updateGetTopicPhotos
  };
};
