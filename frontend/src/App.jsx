import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";



// Note: Rendering a single component to build components in isolation
const App = () => {


  const [favPhotoList, setFavPhotoList] = useState([])
const [showModal, setShowModal] = useState(false)
const [photo, setPhoto] = useState({})
const toggleModal = () => {
    setShowModal(!showModal)

}

  return (
    <div className="App">
     <HomeRoute topics={topics} photos={photos} favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList} toggleModal={toggleModal} setPhoto={setPhoto}/>
     {showModal && (<PhotoDetailsModal closeModal={toggleModal} photo={photo} photos={photos} favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList} toggleModal={toggleModal} setPhoto={setPhoto}/>)}
    </div>
  );
};

export default App;