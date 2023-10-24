import './Header.css';

import git from '../images/github-image.svg';
import tg from '../images/tg.png';
import linkedin from '../images/linkedin.png';
import flower from '../images/flower.png';

export default function Header() {
    return (
        <section className='header'>
            <img className='header__pic' alt='фиолетовый цветочек' src={flower}/>
            <div className='header__group'>
                <nav className='header__nav'>
                    <a className='header__item' href='#'>Home</a>
                    <a className='header__item' href='#'>About</a>
                    <a className='header__item' href='#'>Tech Stack</a>
                    <a className='header__item' href='#'>Projects</a>
                    <a className='header__item' href='#'>Contacts</a>
                </nav>
                <nav className='header__links'>
                    <a href='#'>
                        <img className='header__item-img' alt='github icon' src={git}/>
                    </a>
                    <a href='#'>
                        <img className='header__item-img' alt='telegram icon' src={tg}/>
                    </a>
                    <a href='#'>
                        <img className='header__item-img' alt='linkedin icon' src={linkedin}/>
                    </a>
                </nav>
            </div>
        </section>
    )
}