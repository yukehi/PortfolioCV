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
        ,body:' That shows the emotional attitude regarding the content you upload,it was challenged to map and build the model for the emotions to the colors, in each choice of color and emotion there is a back calculation that "predicts" the emotion you feel towards the same content, even when the user responds to the content he affects the initial emotion of the content thus creating the content to be dynamic.',
        url:'https://itsrepeat.com/',type:'Web application',
        title:'Social platform',Languages:'Html-Css-Javascript-React-Express-Mongodb',
        },
        {name:'Emotional Calculator'
        ,body:"By using color and emotion I analyzed the emotion that a person feels in the present moment, by choosing color and emotion he gets an answer to what he is feeling right now, my curiosity led me to check and research about how emotion affects each other with color, I based on Robert Fluchik's research , But unfortunately his theory was not proven I found other sources and was able to run the model, of course it is not based on in-depth research and is still in the stage of theory.",
        url:'https://hidden-falls-58987.herokuapp.com/',
        type:'Web application',title:'Calculates the emotion you feel',Languages:'Html-Css-Javascript-React-Express',
        },
        {name:'To do list',body:'In creating the application, I used Express for the first time, there was a difficulty in starting the integration between the database, after several attempts I was able to create the connection and save the data, you can create new lists and save the lists, by entering a new name in the html line.',
        url:'https://salty-tundra-05974.herokuapp.com/',
        type:'Web application',title:'Stick to your tasks',Languages:'Html-Css-Javascript-Express-Mongodb',
        },
        {name:'RPSSL',
        body:'The first time I built the game used as a static site, but after learning react, I rebuilt it according to the programming principles in react, the game has five possibilities for combat, and of course a board of rules describing who wins whom, I really enjoyed building it, enjoy.',
        url:'https://mysterious-shore-92890.herokuapp.com/',
        type:'Web application',title:'A modern game of stone and paper and scissors',Languages:'Html-Css-Javascript-React-Express',
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
            upperUnderTitle='The Journey begins with a simple problem and progresses into idea'
            midContant='While learning I learned the basics of programming, client structure and back end. I progressed to building an API, to my applications, to integrate between the client and the back end and thus filled myself with the full picture of web development, a complex and interesting process that gave me an opportunity to experience the full development, I relied mainly on self-thinking and examples I found.'
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