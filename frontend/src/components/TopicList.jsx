import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, updateGetTopicPhotos}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((sampleTopic) => (
    <TopicListItem
    key={sampleTopic.id}
    topicsItem={sampleTopic} 
    updateGetTopicPhotos={updateGetTopicPhotos}
    />
      ))}
    </div>
  );
};

export default TopicList;
