import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-container__left">
          <h2>Your Lightning Fast Delivery Partner</h2>
          <p>
            Facere distinctio molestiae nisi fugit tenetur repellat non
            praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
            reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
            occaecati odio est possimus vel reprehenderit
          </p>
          <form className="search">
            <input placeholder="Your ZIP code or City. e.g. New York" />
            <button type="submit">Search</button>
          </form>
          <div className="statistical">
            <ul className="statistical-list">
              <li className="statistical-list__item">
                <span>232</span>
                <p>Client</p>
              </li>
              <li className="statistical-list__item">
                <span>521</span>
                <p>Projects</p>
              </li>
              <li className="statistical-list__item">
                <span>1453</span>
                <p>Support</p>
              </li>
              <li className="statistical-list__item">
                <span>32</span>
                <p>Workers</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="banner-container__right">
          <img src="https://bootstrapmade.com/content/demo/Logis/assets/img/hero-img.svg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
