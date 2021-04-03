import React,{useEffect} from 'react';
import '../css/hobbies.css';
import '../css/fx.css';
import Menu from '../core/Mnue';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import Game from '../images/Games.png';
import Paint from '../images/Paint.png';
import Video from '../images/Video.png';
import Books from '../images/Books.png';
import LightBox from '../core/LightBox';;
const Hobbies = () => {
    const links = ['https://www.youtube.com/watch?v=aOadxZBsPiA','https://www.youtube.com/watch?v=0E44DClsX5Q','https://www.youtube.com/watch?v=7O21Z6vgtmY',
                  'https://www.youtube.com/watch?v=qqEpSOFDXGA','https://www.retrogames.cz/play_1412-NES.php','https://www.youtube.com/watch?v=bg21_FkPLEk',
                  'https://www.youtube.com/watch?v=XqdXH1l0zbY&t=15s','https://www.youtube.com/watch?v=8930G961un4&t=69s','https://en.wikipedia.org/wiki/The_Alchemist_(novel)',
                  'https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind','https://en.wikipedia.org/wiki/1Q84','https://en.wikipedia.org/wiki/12_Rules_for_Life'
                ]
    useEffect(() => {
        document.body.classList.add('hobbies')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('hobbies');
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
        <h1 className='bold card-title'>Video games</h1>
        <a className='link-card' href={links[0]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Little Nightmares</h4></a>
        <a className='link-card' href={links[1]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Call of duty</h4></a>
        <a className='link-card' href={links[2]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>League of Legends</h4></a>
        <a className='link-card' href={links[3]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Forestpunk</h4></a>
        <a className='link-card' href={links[4]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Tanks</h4></a>
        </div>
        <div className="h p-5"><img className='img-scale' src={Paint} alt='paint'/></div>
        <div className="b-contant p-5"><LightBox/></div>
        <div className="c p-5"><img className='img-scale' src={Video} alt='Video'/></div>
        <div className="c-contant p-5">
        <h1 className='bold card-title'>Made by me</h1>
        <a className='link-card' href={links[5]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Death Dance</h4></a>
        <a className='link-card' href={links[6]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Mimes Herat</h4></a>
        <a className='link-card' href={links[7]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Tangans</h4></a>
        </div>
        <div className="d p-5"><img className='img-scale' src={Books} alt='Video'/></div>
        <div className="d-contant p-5">
        <h1 className='bold card-title'>Books I like</h1>
        <a className='link-card' href={links[8]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>The Alchemist</h4></a>
        <a className='link-card' href={links[9]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>Sapiens</h4></a>
        <a className='link-card' href={links[10]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>1Q84</h4></a>
        <a className='link-card' href={links[11]} target='_blank' rel="noreferrer"><h4 className='body-style card-content'>12 Rules for Life</h4></a>
        </div>
    </div>
    <Fotter/>   
    </div>)


}

export default Hobbies;