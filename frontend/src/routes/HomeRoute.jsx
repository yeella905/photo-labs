import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
         <div>
        <TopNavigationBar/>
        <PhotoList/>
      </div>
    </div>
  );
};

export default HomeRoute;
