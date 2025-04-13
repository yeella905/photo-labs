import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = ({updateToFavPhotoIds, photo}) => {
    const [selected, setSelected] = useState(false)
    const toggleModal = () => {
        setSelected(!selected)
        updateToFavPhotoIds(photo)
    }
    return (
    <div className="photo-list__fav-icon">
      <div onClick={toggleModal} className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
