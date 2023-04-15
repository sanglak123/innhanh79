import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reviews } from "@/data/data_fake/Reviews";

const SlideRating = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <div id="rating_content">
      <div>
        <Slider {...settings}>
          {Reviews.map((item, index) => {
            return (
              <div key={index} className="ratings txt_center">
                <div className="rating_user">
                  <div className="avatar">
                    {item.avatar ? (
                      <img src={item.avatar} alt={item.username} />
                    ) : (
                      <img
                        src="/img/avatar/avatar_default.png"
                        alt={item.username}
                        className="img-fluid"
                      />
                    )}
                  </div>
                  <div className="rating_text">
                    <p>{item.rating}</p>
                  </div>
                  <h4>{item.username}</h4>
                  <span className="user_job">
                    <p>{item.job}</p>
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SlideRating;
