import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Albums">
      {albums.map((album, id) => (
        <div key={id} className="UnderAlbum">
          <Link
            className="UnderAlbums"
            to={`/Photos/${album.id}`}
            onClick={() => props.getAlbumID(album.id)}
          >
            <h1 style={{ fontWeight: "bold" }}>{album.id}</h1>
            <br />
           {album.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Albums;
