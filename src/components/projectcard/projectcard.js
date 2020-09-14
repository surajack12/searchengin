import React from 'react'
import './projectcard.css'
export default function projectcard(props)
{
    return(
    <React.Fragment>
        
        <div class="procard" style={{backgroundImage:`url(${props.imglink})`}}>
            <div class="content">
            <h2 class="title">{props.title}</h2>
           <p class="copy">{props.about}</p>
           <a href={props.link}><button class="btn">View Project</button></a>
            </div>
        </div>
        
        

    </React.Fragment>
    )
}