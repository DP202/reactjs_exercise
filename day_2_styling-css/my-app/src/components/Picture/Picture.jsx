import React from "react";
import "./picture.scss";

const Picture = ({ picture }) => {
  console.log("picture", picture);
  return (
    <>
      <div className="picture-list">
        {picture.map((item) => (
          <div className="picture" key={item.id}>
            <img src={item.download_url} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Picture;
