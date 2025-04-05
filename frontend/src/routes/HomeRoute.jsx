import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos}) => {
  return (
    <div className="home-route">
        <TopNavigationBar topics={topics}/>
        <PhotoList photos={photos}/>
        
    
    </div>
  );
};

export default HomeRoute;
