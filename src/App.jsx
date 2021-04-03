import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import SimpleReactLightbox from 'simple-react-lightbox';
const App = () => {

  return (
    <BrowserRouter>
    <SimpleReactLightbox>
    <MainRouter/>
    </SimpleReactLightbox>
    </BrowserRouter>
  )
}
export default App;
