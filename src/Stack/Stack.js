import './Stack.css';

import css from '../images/css.jpg';
import github from '../images/github-big.jpg';
import vsc from '../images/vsc.jpg';
import react from '../images/react.jpg';
import js from '../images/js.jpg';
import mongodb from '../images/mongodb.png';

import {useEffect} from 'react';

import {WOW} from 'wowjs';


export default function Stack() {
    useEffect(() => {
        // Создайте экземпляр WOW.js
        const wow = new WOW(
            {
                boxClass:     'wow',
                animateClass: 'animated',
                offset:       300,
                mobile:       true,
                live:         true,
            }
            )
            wow.init();
    }, []);


    return (
        <section className='stack'>
            <h1 className='stack__title wow rotateInDownLeft'>My Tech Stack</h1>
            <p className='stack__subtitle wow rotateInDownLeft'>Technologies I've been working with recently</p>
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
