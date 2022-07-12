import React, { useState } from "react";
import Albums from "./Albums";
import Photos from "./Photos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  const [albumID, setAlbumID] = useState('');
  const getAlbumID = (id) => {
    setAlbumID(id);
  };
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Albums {...props} getAlbumID={getAlbumID} />}
        />
        <Route
          exact
          path="/Photos/:albumID"
          render={(props) => <Photos {...props} albumID={albumID} />}
        />
      </Switch>
    </Router>
  );
};

export default Home;
