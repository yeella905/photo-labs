import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoList = [
  {
    id: 1,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div>
        {sampleDataForPhotoList.map((sampleDataForPhotoListItem) => (
          <PhotoListItem
            sampleDataForPhotoListItem={sampleDataForPhotoListItem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
