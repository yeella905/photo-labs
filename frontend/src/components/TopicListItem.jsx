import "../styles/TopicListItem.scss";

const topicsItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({topicsItem}) => {
  return (
    <div className="topic-list__item">
      <p>{topicsItem.title}</p>
    </div>
  );
};

export default TopicListItem;
