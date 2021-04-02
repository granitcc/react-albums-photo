import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let albumID;

const getAlbumID = (id) => {
  albumID = id;
  console.log(albumID);
};

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Albums {...props} getAlbumID={getAlbumID} />}
        />
        {/* <Route path="/Photos/:props.match.params.id" component={Photos} /> */}
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
