import "../styles/TopicListItem.scss";

const TopicListItem = ({topicsItem, updateGetTopicPhotos}) => {
  return (
    <div className="topic-list__item" onClick={() => updateGetTopicPhotos(topicsItem.id)}>
      <p>{topicsItem.title}</p>
    </div>
  );
};

export default TopicListItem;
