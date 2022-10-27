import React, { useEffect, useState } from "react";
import photos from "../photos";
import More from "./More";

function PostedImgs({ photoI }) {
  const [more, setMore] = useState(false);

  return (
    <>
      <div className="post">
        <img className="postbox-img" src={photoI.photo} />
      </div>
      <div className="post">
        <div className="postbox-post">
          <div>
            <img
              onClick={() => {
                setMore(!more);
              }}
              className="more-btn"
              src="/icon/more.svg"
              alt="btn-setting"
            />
            {/* <div
  x",
                }}
              > */}
            {more ? <More /> : null}
            {/* </div> */}
          </div>
          <div className="postbox-contents">
            <h3>{photoI.title}</h3>
            <p>{photoI.date}</p>
            <p>{photoI.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostedImgs;
