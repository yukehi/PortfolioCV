import {Route,Switch} from 'react-router-dom';
import React ,{ Suspense }from 'react';
import Home from './components/Home';
import Loading from './core/Loading';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
import ScrollToTop from './core/ScrollToTop';

const MainRouter = () => {

    return(
        <div>
            {/* <Menu/> */}
            <Suspense fallback={<Loading/>}>
            <ScrollToTop>
            <Switch>
            <Route exact path='/' component={Home}  ></Route>
            <Route exact path='/contact' component={Contact}  ></Route> 
            <Route exact path='/portfolio' component={Portfolio}  ></Route>
            <Route exact path='/hobbies' component={Hobbies}  ></Route>   
            <Route exact path='/about' component={About}  ></Route> 
            </Switch>
            </ScrollToTop>
            </Suspense>
        </div>
    )
}



export default MainRouter;