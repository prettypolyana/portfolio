import './Info.css';

import polyana from '../images/polyana.jpg';

import {useEffect} from 'react';

import {WOW} from 'wowjs';


function Info() {
    useEffect(() => {
        // Создайте экземпляр WOW.js
        const wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       200,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
    }, []);

    return (
        <section className='info'>
            <p className='info__text wow slideInLeft slower'><span className='info__text-color'>Hi there!</span> My name is <span className='info__text-color'>Lina</span>, <br /> I am a <span className='info__text-color'>beginner 
            web-developer</span> and here you can find <span className='info__text-color'>my portfolio</span> c: </p>
            <div className='info__frame'>
                <img className='info__img' src={polyana} alt='фото автора'/>
            </div>
        </section>
    )
}

export default Info;