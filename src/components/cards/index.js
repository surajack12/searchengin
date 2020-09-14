import React from "react";
import './card.css';

class Card extends React.Component {
  constructor(props)
  {
    super(props)
    
  }
  render(){
   let classes= this.props.classes ;
    return(
      <div className={classes}>
     
      <div className="Card">
      <h4 className="heading">{this.props.heading}</h4>
      <p>{this.props.cardBody}</p>
      </div>
      
      </div>
    )
  }
}
export default Card;