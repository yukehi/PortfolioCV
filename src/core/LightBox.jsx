import { SRLWrapper } from "simple-react-lightbox";
import React from 'react';
import a from '../images/gallery/a.jpg'
import b from '../images/gallery/b.jpg'
import c from '../images/gallery/c.png'
import d from '../images/gallery/d.png'
import e from '../images/gallery/e.png'
import f from '../images/gallery/f.PNG'
import g from '../images/gallery/g.png'
import h from '../images/gallery/h.JPG'
import '../css/lightBox.css';
const LightBox = () => {
    const options = {
        settings: {},
        caption: {},
        buttons: {},
        thumbnails: {
            thumbnailsSize: ['100px', '80px']
        },
        progressBar:{},
    }

  return (
    <SRLWrapper options={options}>
    <div className="gallery">
      <img className='img-gallery' alt='cyberpunk style' src={a}/>
      <img className='img-gallery' alt='geometric style' src={b}/>
      <img className='img-gallery' alt='Wifi Connections' src={c}/>
      <img className='img-gallery' alt='Smeared paint' src={d}/>
      <img className='img-gallery' alt='cloud mind' src={e}/>
      <img className='img-gallery' alt='hexagon pattern' src={f}/>
      <img className='img-gallery' alt='Mouse control' src={g}/>
      <img className='img-gallery' alt='A lost soul' src={h}/>
    </div>
    </SRLWrapper>
  );
}

export default LightBox;