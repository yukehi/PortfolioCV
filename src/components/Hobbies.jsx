import React,{useEffect} from 'react';
import Menu from '../core/Mnue';
import '../css/hobbies.css';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import Game from '../images/Games.png';
import Paint from '../images/Paint.png';
import Video from '../images/Video.png';
import Books from '../images/Books.png';
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
            mainTitle='Things'
            upperUnderTitle='I enjoy on a daily basis'
            midContant=''
        />
    <div className="grid-container-hobbies fadeIn">
        <div className="v p-5"><img className='img-scale' src={Game} alt='video games'/></div>
        <div className="v-contant p-5">
        <h4>Little Nightmares</h4>
        <h4>Call of duty</h4>
        <h4>League of Legends</h4>
        <h4>Forestpunk</h4>
        <h4>Pacman</h4>
        </div>
        <div className="h p-5"><img className='img-scale' src={Paint} alt='paint'/></div>
        <div className="b-contant p-5"><h2>Lorem</h2></div>
        <div className="c p-5"><img className='img-scale' src={Video} alt='Video'/></div>
        <div className="c-contant p-5"><h2>Lorem</h2></div>
        <div className="d p-5"><img className='img-scale' src={Books} alt='Video'/></div>
        <div className="d-contant p-5"><h2>Lorem</h2></div>
    </div>
    <Fotter/>   
    </div>)


}

export default Hobbies;