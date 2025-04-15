import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// const topics = [
//   {
//     id: 1,
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: 2,
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: 3,
//     slug: "topic-3",
//     title: "People",
//   },
// ];

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
