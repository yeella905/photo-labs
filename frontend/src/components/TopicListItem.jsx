import "../styles/TopicListItem.scss";

const topicsItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({topicsItem, updateGetTopicPhotos}) => {
  return (
    <div className="topic-list__item" onClick={() => updateGetTopicPhotos(topicsItem.id)}>
      <p>{topicsItem.title}</p>
    </div>
  );
};

export default TopicListItem;
