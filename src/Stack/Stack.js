import './Stack.css';

import css from '../images/css.jpg';
import github from '../images/github-big.jpg';
import vsc from '../images/vsc.jpg';
import react from '../images/react.jpg';
import js from '../images/js.jpg';
import mongodb from '../images/mongodb.png';

import 'animate.css';


export default function Stack() {
    return (
        <section className='stack'>
            <h1 className='stack__title'>My Tech Stack</h1>
            <p className='stack__subtitle'>Technologies I've been working with recently</p>
            <div className='stack__components'>
                <img className='stack__tech' alt='css' src={css} />
                <img className='stack__tech' alt='java script' src={js}/>
                <img className='stack__tech' alt='react' src={react}/>
                <img className='stack__tech' alt='mongodb' src={mongodb}/>
                <img className='stack__tech' alt='github' src={github}/>
                <img className='stack__tech' alt='visual studio code' src={vsc}/>
            </div>
        </section>
    )
}
