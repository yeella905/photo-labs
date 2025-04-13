import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photosItem , favPhotoList, setFavPhotoList, toggleModal, setPhoto}) => {
 
    const handleClick = () => {
        toggleModal()
        setPhoto(photosItem)
    }


  return (
    <div className="photo-list__item">
        <PhotoFavButton photo={photosItem} favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList}/>
      <img onClick={handleClick}
        className="photo-list__image"
        src={photosItem.urls.regular}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photosItem.user.profile}
        />
        <div className="photo-list__user-info">
          <div>{photosItem.user.name}</div>
          <div className="photo-list__user-location ">
            <div>
              {photosItem.location.city},{" "}
              {photosItem.location.country}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
