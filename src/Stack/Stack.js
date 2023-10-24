import './Stack.css';

import css from '../images/css.jpg';
import github from '../images/github-big.jpg';
import vsc from '../images/vsc.jpg';
import react from '../images/react.jpg';
import js from '../images/js.jpg';
import mongodb from '../images/mongodb.png';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Stack() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.7,
      });

    return (
        <section className='stack'>
            <motion.div 
                 ref={ref}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}
                 transition={{ duration: 3 }}
            >
            <h1 className='stack__title animate__animated animate__backInLeft animate__slow 3s'>My Tech Stack</h1>
            <p className='stack__subtitle animate__animated animate__backInLeft animate__slow 3s'>Technologies I've been working with recently</p>
            </motion.div>
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
