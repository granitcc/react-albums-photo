import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Photos(props) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${props.albumID}/photos`)
      .then((res) => setPhoto(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "90%", alignItems: "center"}}>
      <div className="links">
        <Link to={"/"} className="linkss">
          Go to Albums
        </Link>
      </div>
      <div className="Albums">
        {photo.map((item, index) => (
          <div key={index} className="photo">
            <p style={{ width: "300px" }}>
              <a target="_blank" href={item.url} rel="noref">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={item.url}
                  alt="url"
                />
              </a>
            </p>
            <p style={{ width: "300px" }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;