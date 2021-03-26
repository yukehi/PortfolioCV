import React,{useEffect} from 'react';
import Menu from '../core/Mnue';
import '../css/hobbies.css';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import '../css/fx.css';
const Hobbies = () => {
    useEffect(() => {
        document.body.classList.add('background-hobbies')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('background-hobbies');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
    <Menu/>
    <Body
            mainTitle='Hobbies'
            upperUnderTitle='this was a long journey'
            midContant='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum rhoncus justo in blandit. Nunc ut auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis in odio sit amet nisi rhoncus pretium sit amet quis tortor. Cras volutpat quam ex, id placerat lectus vestibulum vitae. Praesent ut dictum quam. Nulla ut nibh ipsum. Vestibulum vel purus accumsan, sagittis tortor quis, consequat velit. Etiam in ullamcorper tortor, vitae tempus felis. Quisque sagittis semper volutpat. Pellentesque pretium enim massa, vitae maximus augue dapibus ac. Nulla sagittis lorem non odio interdum suscipit. Praesent porttitor magna quis.'
        />
    <div className="grid-container-hobbies fadeIn">
        <div className="v p-5"><h2>Lorem</h2></div>
        <div className="v-contant p-5"><h2>Lorem</h2></div>
        <div className="b p-5"><h2>Lorem</h2></div>
        <div className="b-contant p-5"><h2>Lorem</h2></div>
        <div className="c p-5"><h2>Lorem</h2></div>
        <div className="c-contant p-5"><h2>Lorem</h2></div>
        <div className="d p-5"><h2>Lorem</h2></div>
        <div className="d-contant p-5"><h2>Lorem</h2></div>
    </div>
    <Fotter/>   
    </div>)


}

export default Hobbies;