import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({topics, favPhotoList, updateGetTopicPhotos}) => {
    return (
      <div className="top-nav-bar">
        <a href='/'><span className="top-nav-bar__logo">PhotoLabs</span></a> 
        <TopicList topics={topics} updateGetTopicPhotos={updateGetTopicPhotos}/>
        <FavBadge  isFavPhotoExist={favPhotoList.length > 0}/>
      </div>
    )
  }

export default TopNavigationBar;
