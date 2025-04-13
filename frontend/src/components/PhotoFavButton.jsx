import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = ({photo, favPhotoList, setFavPhotoList}) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        setSelected(!selected)
        const exists = favPhotoList.some(p => p.id === photo.id)
        if(exists){
            const newArray = favPhotoList.filter(p => p.id !== photo.id)
            setFavPhotoList(newArray)
        }else{
            setFavPhotoList([...favPhotoList, photo]) 
        }
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
