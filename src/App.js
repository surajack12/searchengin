import React from "react";
import "./style.css";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import ImgCard from "./components/imgcard/imgcard";
import Footer from "./components/footer/footer";
import {Apple,Android} from '@material-ui/icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          heading: "Software Development",
          cardBody:
            "Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning, robust and scalable.",
          img: "https://cdn.onlinewebfonts.com/svg/img_414428.png"
        },
        {
          heading: "UX Design",
          cardBody:
            "Great online experiences happen only when a well planned UX strategy is visualized with top class design aesthetics; and we do it best.",
          img: "https://cdn.onlinewebfonts.com/svg/img_414428.png"
        },
        {
          heading: "Mobile App",
          cardBody:
            "Our profound knowledge of mobile technologies & frameworks, help us create secure & scalable Mobile Apps with great UX.",
          img: "https://cdn.onlinewebfonts.com/svg/img_414428.png"
        },
        {
          heading: "Web Development",
          cardBody:
            "Technological expertise coupled with award-winning UX skills is what makes us the leading web development company in India - and helps us build world class websites and web applications.",
          img: "https://cdn.onlinewebfonts.com/svg/img_414428.png"
        }
      ],
      imgCards: [
        {
          proname: "Mango lib",
          imglink:
            "https://wi.wallpapertip.com/wsimgs/32-320271_wall-e-wallpaper-4k.jpg",
            bodyData:'This is body data.'
        },
        {
          proname: "Mango lib",
          imglink:
            "https://wi.wallpapertip.com/wsimgs/251-2512915_movies-wallpapers-4k-14.jpg",
            bodyData:'This is body data.'
        },
        {
          proname: "Mango lib",
          imglink:
            "https://wi.wallpapertip.com/wsimgs/48-489380_pacific-rim-uprising-2018-movie-wallpaper-4k-3840x2160.jpg",
            bodyData:'This is body data.'
        },
        {
          proname: "Mango lib",
          imglink:
            "https://wi.wallpapertip.com/wsimgs/32-320365_2019-toy-story-4-animation-movie-wallpaper-toy.jpg",
            bodyData:'This is body data.'
        }
      ]
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="back-img" style={{backgroundImage: "url('https://static.dribbble.com/users/192276/screenshots/2500960/attachments/491748/midnightinthevalley-2560x1440.png')"}}>
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div
            style={{ "padding-top": "14rem" }}
            className="text-center text-white"
          >
            <h2>Complete digital solution</h2>
          </div>
        </div>
        <div className="p-1 mt-5 projects">
          <h1 className="text-center heading-lg">Projects</h1>
          <div className="row p-1 mt-5">
            {this.state.cardData.map((card, i) => (
              <Card
                classes="col-sm-12 col-md-6  p-3 col-lg-3"
                heading={card.heading}
                cardBody={card.cardBody}
                key={i}
                imglink={card.img}
              />
            ))}
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-center heading-lg">Our Works</h1>
          <div className="row p-1 mt-5 m-2">
            {this.state.imgCards.map((imgcard, i) => (
              <ImgCard
                classes="col-sm-12 col-md-6  p-3 col-lg-6"
                proname={imgcard.proname}
                key={i}
                imglink={imgcard.imglink}
                bodyData={imgcard.bodyData}
              />
            ))}
          </div>
        </div>
        <div className="projects " style={{paddingTop:"10rem",padding:"4rem"}} >
        <h1 className="heading-lg text-center ">Great design </h1>
          <p className="text-center">Product design play a vital role in achiving bussiness goal.</p>
         <div className="pt-2 row">
         
            
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
      Icon hear
   </div>
   <h4>User Interface Design</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
      Icon hear
   </div>
   <h4>User Interface Design</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
              Icon hear
      
   </div>
   <h4>User Interface Design</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
           
        
        </div>
        </div>
         <div className="projects bg-white " style={{paddingTop:"10rem",padding:"4rem"}} >
        <h1 className="heading-lg text-center ">Craft beautiful application </h1>
          <p className="text-center">Product design play a vital role in achiving bussiness goal.</p>
         <div className="pt-2 row">
         
            
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
      <Android fontSize="large"/>
   </div>
   <h4>Android</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
     <Apple fontSize="large"/>
   </div>
   <h4>IOS</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
            <div className="col-lg-4 col-md-12 text-center mt-5 mb-5">
              <div className="p-3">
              Icon hear
      
   </div>
   <h4>Flutter</h4>
   <p>Craft beautiful and engaging user inferface customers loves at first movement.</p>
  
            </div>
           
        
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Home;
