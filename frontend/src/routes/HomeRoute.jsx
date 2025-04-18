import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({state, onPhotoSelect, updateToFavPhotoIds, updateGetTopicPhotos}) => {
  return (
    <div className="home-route">
        <TopNavigationBar topics={state.topics} favPhotoList={state.favPhotoList} updateGetTopicPhotos={updateGetTopicPhotos}/>
        <PhotoList photos={state.photos}  onPhotoSelect={onPhotoSelect} updateToFavPhotoIds={updateToFavPhotoIds} />
        
    
    </div>
  );
};

export default HomeRoute;
