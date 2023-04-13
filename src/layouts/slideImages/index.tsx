import React, { useEffect, useState } from "react";
interface type_img {
  filename: string;
  url: string;
}
interface typeSlide {
  arrayImg: type_img[];
}
const SlideImages = ({ arrayImg }: typeSlide) => {
  const [view, setView] = useState("");
  useEffect(() => {
    if (arrayImg.length > 0) {
      setView(arrayImg[0].url);
    }
  }, [arrayImg]);
  return (
    <div
      id="SlideImages"
      className="bsd  animate__animated  animate__fadeInRight"
    >
      <div className="view">
        <img src={view} alt="view" />
      </div>

      <div className="img_views">
        {arrayImg.map((item, index) => {
          return (
            <div
              key={index}
              className="img_item"
              onClick={() => setView(item.url)}
            >
              <img src={item.url} alt={item.filename} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideImages;
