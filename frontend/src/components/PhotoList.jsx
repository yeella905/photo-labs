import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// const photos = [
//   {
//     id: 1,
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: "/Image-1-Full.jpeg",
//       regular: "/Image-1-Regular.jpeg",
//     },
//     user: {
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: "/profile-1.jpg",
//     },
//   },
//   {
//     id: 2,
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: "/Image-2-Full.jpeg",
//       regular: "/Image-2-Regular.jpeg",
//     },
//     user: {
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: "/profile-1.jpg",
//     },
//   },
//   {
//     id: 3,
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: "/Image-3-Full.jpeg",
//       regular: "/Image-3-Regular.jpeg",
//     },
//     user: {
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: "/profile-1.jpg",
//     },
//   },
// ];

const PhotoList = ({photos, favPhotoList, setFavPhotoList}) => {
  return (
    <ul className="photo-list">
       {photos.map((photosItem) => (
     <PhotoListItem
      key={photosItem.id}
       photosItem={photosItem}
       favPhotoList={favPhotoList} setFavPhotoList={setFavPhotoList}
    />
))}
    </ul>
  );
};

export default PhotoList;
