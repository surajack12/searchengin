import React from "react";

import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";
import Projectcard from "../projectcard/projectcard"
class Project extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[
        {link:"http://cloud.sistec.ac.in/suraj/mangolib",title:"Mangolib ",about:"Completely free pdf online library",imglink:""},
        {link:"http://cloud.sistec.ac.in/suraj/mangolib",title:"Mangolib ",about:"Completely free pdf online library",imglink:""},
        {link:"http://cloud.sistec.ac.in/suraj/mangolib",title:"Mangolib ",about:"Completely free pdf online library",imglink:""},
        
      ]
    }
  }
  render() {
    return (

      <div >
      <div className="back-img-flat" style={{backgroundColor:'deepskyblue'}}>
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div className="">
          <div
            style={{ "padding-top": "10rem" }}
            className="text-center"
          >
       
                <h2 className="text-white ">Complete digital solution</h2>
              
             
           
          </div>
          </div>
        </div>

        <div className="p-3" style={{backgroundColor:"#f3f3f3"}}>

        <h1
        className="heading-lg text-center pt-3">Our Projects</h1>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-2">
          {
          this.state.data.map((pro,i)=>
              <Projectcard key={i}link={pro.link} title={pro.title} about={pro.about} imglink={pro.imglink}/>
          )}
        </div>

        </div>
        




        </div>
       <div>
       
       </div>
      <Footer/>
      
      
      </div >);
  }
}
export default  Project;