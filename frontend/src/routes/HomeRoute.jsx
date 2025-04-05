import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({sampleDataForTopicList, sampleDataForPhotoList}) => {
  return (
    <div className="home-route">
        <TopNavigationBar sampleDataForTopicList={sampleDataForTopicList}/>
        <PhotoList sampleDataForPhotoList={sampleDataForPhotoList}/>
        
    
    </div>
  );
};

export default HomeRoute;
