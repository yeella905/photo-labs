import React from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";



// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div>
        <TopNavigationBar/>
        <PhotoList/>
      </div>
    </div>
  );
};

export default App;