import React from 'react';
import '../css/tab.css';


const Tab = (props) => {

   
    return(
    
    <div className=''>
        <div className='img-info'>
                <img className='avater' src={props.img} alt="avater" />
                </div>
                <div className='contant-info'>
                <h1 className='title-tab bold'>{props.mainTitle}</h1>
                <h2 className='body-tab body-style'>{props.body}</h2>
                </div>
                <hr/>
                
    </div>
    )


}

export default Tab;