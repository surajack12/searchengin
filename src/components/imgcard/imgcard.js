import React from "react";
import './imgcard.css';

class ImgCard extends React.Component {
  constructor(props)
  {
    super(props)
    
  }

  render(){
  var cardStyle = {
         width: "100%", 
         backgroundImage: "url(" +  this.props.imglink  + ")",
         backgroundPosition:"center",
          backgroundSize:"cover"

};
    return(
        <div className={this.props.classes}>
         <div className="imgcard" style={cardStyle}>
         <div className="imgheight"> 
         
        
        </div>
       
        </div>
          <div className="imgcardtext"> 
          <h3 className="heading">{this.props.proname}</h3>
         <p>{this.props.bodyData}</p>
        
        </div>
        </div>
    );
  }
}
export default ImgCard;
 