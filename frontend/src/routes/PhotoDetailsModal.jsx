import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';


const PhotoDetailsModal = ({photo, closeModal, photos, favPhotoList,setFavPhotoList, toggleModal, setPhoto}) => {
    console.log(photo)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img className="photo-details-modal__image" src={photo.urls.full} />
      </div>
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photo.user.profile}
        />
        <div className="photo-details-modal__photographer-info">
          <p>{photo.user.name}</p>
          <div className="photo-details-modal__photographer-location">
            <p>
              {photo.location.city},{" "}
              {photo.location.country}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="photo-details-modal__images">
      <div>
        Similar Photos
      </div>
      <ul className="photo-list">
       {Object.entries(photo.similar_photos).map((photosItem) => (
     <PhotoListItem toggleModal={toggleModal}
      key={photosItem[1].id}
       photosItem={photosItem[1]}
       favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList} setPhoto={setPhoto}
    />
))}
    </ul>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
