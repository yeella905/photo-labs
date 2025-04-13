import React, {useState} from "react";
import topics from "../mocks/topics";
import photos from "../mocks/photos";

export const useApplicationData = () => {
    const [state, setState] = useState({showModal: false, photo:{}, favPhotoList:[], photos:photos, topics:topics});
  
    const onPhotoSelect = (photo) => {
        console.log("all")
        setState({...state, showModal:true, photo:photo})
        console.log(state)
    }

    const onClosePhotoDetailsModal = () => {
        setState({...state, showModal:false})
    }

    const updateToFavPhotoIds = (photo) => {
        const exists = state.favPhotoList.some(p => p.id === photo.id)
        if(exists){
            const newArray = state.favPhotoList.filter(p => p.id !== photo.id)
            setState({...state, favPhotoList:newArray})
        }else{
            setState({...state, favPhotoList:[...state.favPhotoList, photo]}) 
        }
    }

    const onLoadTopic = () => {}
  
    return { 
        state,
        onPhotoSelect,
        onClosePhotoDetailsModal,
        updateToFavPhotoIds,
        onLoadTopic
    };
  };