import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  return (
    <li key={sampleDataForPhotoListItem.id}>
      <img src={sampleDataForPhotoListItem.urls.regular} />
      <img src={sampleDataForPhotoListItem.user.profile} />
      <p>{sampleDataForPhotoListItem.user.name}</p>
      <p>
        {sampleDataForPhotoListItem.location.city},{" "}
        {sampleDataForPhotoListItem.location.country}
      </p>
    </li>
  );
};

export default PhotoListItem;
