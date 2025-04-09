import React from "react";
import "./about.scss";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-left">
          <h3>About Us</h3>
          <p>
            Dolor iure expedita id fuga asperiores qui sunt consequatur minima.
            Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam
            itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis
            veritatis asperiores placeat.
          </p>
          <ul className="about-list">
            <li className="about-list__item">
              <i class="fa-solid fa-chart-diagram"></i>
              <div className="about-desc">
                <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                <p>
                  Magni facilis facilis repellendus cum excepturi quaerat
                  praesentium libre trade
                </p>
              </div>
            </li>
            <li className="about-list__item">
              <i class="fa-solid fa-compress"></i>
              <div className="about-desc">
                <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                <p>
                  Quo totam dolorum at pariatur aut distinctio dolorum
                  laudantium illo direna pasata redi
                </p>
              </div>
            </li>
            <li className="about-list__item">
              <i class="fa-solid fa-tower-broadcast"></i>
              <div className="about-desc">
                <h5>Voluptatem et qui exercitationem</h5>
                <p>
                  Et velit et eos maiores est tempora et quos dolorem autem
                  tempora incidunt maxime veniam
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-right">
          <img src="https://bootstrapmade.com/content/demo/Logis/assets/img/about.jpg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
