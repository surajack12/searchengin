import React from "react";

import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class Comingsoon extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="p-5">
          <h1 className="heading-lg text-center">Coming Soon.</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Comingsoon;
