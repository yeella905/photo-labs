import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = () => {
    return (
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList/>
        <FavBadge/>
      </div>
    )
  }

export default TopNavigationBar;
