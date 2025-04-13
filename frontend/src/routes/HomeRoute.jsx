import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, favPhotoList, setFavPhotoList}) => {
  return (
    <div className="home-route">
        <TopNavigationBar topics={topics} favPhotoList={favPhotoList}/>
        <PhotoList photos={photos} favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList}/>
        
    
    </div>
  );
};

export default HomeRoute;
