import './Info.css';

import polyana from '../images/polyana.jpg';

function Info() {
    return (
        <section className='info'>
            <p className='info__text animate__animated animate__fadeInUp animate__slow 3s'><span className='info__text-color'>Hi there!</span> My name is <span className='info__text-color'>Lina</span>, <br /> I am a <span className='info__text-color'>beginner 
            web-developer</span> and here you can find <span className='info__text-color'>my portfolio</span> c: </p>
            <div className='info__frame'>
                <img className='info__img' src={polyana} alt='фото автора'/>
            </div>
        </section>
    )
}

export default Info;