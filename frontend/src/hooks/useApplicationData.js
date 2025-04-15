import { useReducer, useEffect } from "react";
import { ACTIONS } from "../reducers/actions";
import { reducer } from "../reducers/reducer";

// Added the base api url to a env file so that its easier to change the base url if needed
const apiUrl = import.meta.env.VITE_API_URL;

// initialize the empty state
const initialState = {
  showModal: false,
  photo: {},
  favPhotoList: [],
  photos: [],
  topics: []
};



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


  // Function to get the photos for the seleceted topics
const updateGetTopicPhotos = (topic_id) => {
    fetch(`${apiUrl}/topics/${topic_id}/photos`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_PHOTO, payload: data }))
      .catch((err) => console.error(err))

}
 

    // Load the topics from the API, and update the state
  useEffect(() => {
    fetch(`${apiUrl}/topics`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_TOPIC, payload: data }))
      .catch((err) => console.error(err))


      //Load the photos from the API, and update the state
    fetch(`${apiUrl}/photos`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.LOAD_PHOTO, payload: data }))
      .catch((err) => console.error(err))
  }, []);

  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    updateGetTopicPhotos
  };
};
