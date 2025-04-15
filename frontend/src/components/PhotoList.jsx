import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos,  onPhotoSelect, updateToFavPhotoIds}) => {
  return (
    <ul className="photo-list">
       {photos.map((photosItem) => (
     <PhotoListItem
      key={photosItem.id}
       photosItem={photosItem}
       onPhotoSelect={onPhotoSelect}
       updateToFavPhotoIds={updateToFavPhotoIds}
    />
))}
    </ul>
  );
};

export default PhotoList;
