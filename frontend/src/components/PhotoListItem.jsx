import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photosItem , favPhotoList, setFavPhotoList, toggleModal }) => {
 
  return (
    <div className="photo-list__item">
        <PhotoFavButton photo={photosItem} favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList}/>
      <img onClick={toggleModal}
        className="photo-list__image"
        src={photosItem.urls.regular}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photosItem.user.profile}
        />
        <div className="photo-list__user-info">
          <p>{photosItem.user.name}</p>
          <div className="photo-list__user-location ">
            <p>
              {photosItem.location.city},{" "}
              {photosItem.location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
