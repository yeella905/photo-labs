import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = () => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        setSelected(!selected)
    }
    return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
