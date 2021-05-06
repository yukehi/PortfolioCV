import React,{useEffect} from 'react';
import Menu from '../core/Mnue';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import Table from '../core/Table';
import '../css/fx.css';
import '../css/portfolio.css';




const Portfolio = () => {
    const body = [
        {name:'Repeat'
        ,body:'The main challenge was to map and build a model that matches between emotions and the colors. In each choice of color and emotion there is an algorithm calculating and "predicting" the emotion you feel towards that content, even when the user responds to the content it affects the initial emotion of the content thus making the content truly dynamic.',
        url:'https://itsrepeat.com/',type:'Web application',
        title:'Social platform',Languages:'Html-Css-Javascript-React-Express-Mongodb',
        },
        {name:'Emotional Calculator'
        ,body:"I was curious to research the connection between emotions and colors and how they affect each other. Initially I based the research of Robert Fluchik's wheel of emotions, but unfortunately his theory was not proven. I then found other sources and was able to develop the model. Of course it is not based on in-depth research and this theory is still in the early stages.By using color and emotion I analyzed the emotion that a person feels in the present moment. The user needs to choose emotion and the color and the calculator tells him how he feels according to his input.",
        url:'https://hidden-falls-58987.herokuapp.com/',
        type:'Web application',title:'Calculates the emotion you feel',Languages:'Html-Css-Javascript-React-Express',
        },
        {name:'To do list',body:'In creating the application, I used Express for the first time. I had a difficulty in starting the integration between the database of mongodb and express. After several attempts I was able to create the connection and save the data. With this application you can create and save lists of tasks by using the HTML form.',
        url:'https://salty-tundra-05974.herokuapp.com/',
        type:'Web application',title:'Stick to your tasks',Languages:'Html-Css-Javascript-Express-Mongodb',
        },
        {name:'RPSSL',
        body:'The first time I built the game I used a static site, but after learning React, I decided to rebuild it according to the programming principles in React. The game has five possibilities for combat, and a board of rules describing who wins whom. I really enjoyed building it.',
        url:'https://mysterious-shore-92890.herokuapp.com/',
        type:'Web application',title:'A modern game of rock, paper and scissors',Languages:'Html-Css-Javascript-React-Express',
        },
        {name:'Simon Game',
        body:'Building the game I really enjoyed, connecting the sounds and creating a design functionality that will let the user more easily remember the pattern displayed in the game.',
        url:'https://evening-taiga-70436.herokuapp.com/',
        type:'Web application',title:'A retro game of our childhood',Languages:'Html-Css-Javascript-React-Express'
        },
        ]

    useEffect(() => {
        document.body.classList.add('portfolio')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('portfolio');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
        <Menu/>
        <Body
            mainTitle='My Path'
            upperUnderTitle='The journey begins with a simple problem and progresses into idea'
            midContant="While studying I learned the basics of programming, client structure and back end. I progressed into building an API for my application in order to integrate between the client and the back end, I relied mainly on self-thinking and examples I found.
                        It's a complex and interesting process that gave me an opportunity to experience the full development of an application and hone my new skills."
        />
        <div className="table-portfolio fadeIn">
        {body.map((contant, i) => {
            return <Table
                appName={contant.name}
                type={contant.type}
                Title={contant.title}
                body={contant.body}
                link={contant.url}
                key={i}
                Languages={contant.Languages}
            />
        })}
            
        </div>
        <div className="btn-title bold"><h4 className="h4">Let's work together</h4></div>
        
        <div className='btn-box-contact'>
            <a className='link bold btn btn-outline-portfolio' href='mailto:3124surf@gmail.com'><h4 className='btn-text'>Contact Me</h4></a>
        </div>
    <Fotter/>
    </div>)


}

export default Portfolio;