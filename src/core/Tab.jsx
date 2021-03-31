import React from 'react';
import '../css/tab.css';
import {Link} from 'react-router-dom';

const Tab = (props) => {

    const linkClass = `link-home ${props.tab} fadeIn`
    return(
    <Link className={linkClass} to={props.to}>
    <div className={props.tabClass}>
        <div className='img-info'>
                <img className='avater' src={props.img} alt="avater" />
                </div>
                <div className='contant-info'>
                <h1 className='title-tab bold'>{props.mainTitle}</h1>
                <h2 className='body-tab body-style'>{props.body}</h2>
                </div>
                <hr/>
                
    </div>
    </Link>
    )


}

export default Tab;