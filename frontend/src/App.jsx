import React from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    updateGetTopicPhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        updateGetTopicPhotos={updateGetTopicPhotos}
      />
      {state.showModal && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photo={state.photo}
          photos={state.photos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;
