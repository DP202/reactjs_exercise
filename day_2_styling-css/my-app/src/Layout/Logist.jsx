import React from "react";

import Banner from "../sections/Banner/Banner";
import Header from "../components/Header/Header";
import Services from "../sections/Services/Services";
import AboutUs from "../sections/AboutUs/AboutUs";
import OurService from "../sections/OurService/OurService";

const Logist = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <Services />
      <AboutUs />
      <OurService />
    </div>
  );
};

export default Logist;
