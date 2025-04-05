import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__fav-icon">
        <PhotoFavButton/>
        </div>
      <img
        className="photo-list__image"
        src={sampleDataForPhotoListItem.urls.regular}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={sampleDataForPhotoListItem.user.profile}
        />
        <div className="photo-list__user-info">
          <p>{sampleDataForPhotoListItem.user.name}</p>
          <div className="photo-list__user-location ">
            <p>
              {sampleDataForPhotoListItem.location.city},{" "}
              {sampleDataForPhotoListItem.location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
