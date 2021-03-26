import React from 'react';
import '../css/body.css';
import '../css/fx.css';

const Body = (props) => {
    return(<div className='container-body'>
    <div className='main-title-box'><h1 className='main-title bold zoomIn'>{props.mainTitle}</h1></div>
    <div className='upper-body'>
        <h2 className='bold under-title fadeIn'>{props.upperUnderTitle}</h2>   
    </div>
    <div className='mid-body'>
        <h3 className='body-style fadeIn'>{props.midContant}</h3>
    </div>
</div>)
}

export default Body;
