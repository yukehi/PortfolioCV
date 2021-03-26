import React,{useEffect} from 'react';
import Menu from '../core/Mnue';
import '../css/portfolio.css';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import Table from '../core/Table';
import '../css/fx.css';




const Portfolio = () => {
    const body = [
        {name:'Repeat Application'
        ,body:'this took from me allot of afford',
        url:'https://itsrepeat.com/',type:'web aplliction',
        title:'',
        },
        {name:'Emotional Calculator'
        ,body:'this took me alot',
        url:'https://hidden-falls-58987.herokuapp.com/',
        type:'web aplliction',title:'',
        },
        {name:'To do list',body:'this is',
        url:'https://salty-tundra-05974.herokuapp.com/',
        type:'web aplliction',title:'',
        },
        {name:'Rock,Paper,Scissors',
        body:'this was hard',
        url:'https://mysterious-shore-92890.herokuapp.com/',
        type:'web aplliction',title:'',
        },
        {name:'Simon Game',
        body:'this was hard',
        url:'https://evening-taiga-70436.herokuapp.com/',
        type:'web aplliction',title:'',
        },
        {name:'',body:'',url:'',type:'web aplliction',title:'',}
        ]

    useEffect(() => {
        document.body.classList.add('background-portfolio')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('background-portfolio');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
        <Menu/>
        <Body
            mainTitle='Portfolio'
            upperUnderTitle='this was a long journey'
            midContant='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum rhoncus justo in blandit. Nunc ut auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis in odio sit amet nisi rhoncus pretium sit amet quis tortor. Cras volutpat quam ex, id placerat lectus vestibulum vitae. Praesent ut dictum quam. Nulla ut nibh ipsum. Vestibulum vel purus accumsan, sagittis tortor quis, consequat velit. Etiam in ullamcorper tortor, vitae tempus felis. Quisque sagittis semper volutpat. Pellentesque pretium enim massa, vitae maximus augue dapibus ac. Nulla sagittis lorem non odio interdum suscipit. Praesent porttitor magna quis.'
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
            />
        })}
            
        </div>
    <Fotter/>
    </div>)


}

export default Portfolio;