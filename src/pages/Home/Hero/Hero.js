import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import heroarea from '../../../assets/heroarea.png';
function Hero() {
    
    return (<section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="content">
                        <h5 className="subtitle">
                            Welcome to our Metaverse
                        </h5>
                        <h1 className="title">
                            NEW LIFE Z
                        </h1>
                        <p className="text">
                            Let's working, play to earn NLZ coin!
                        </p>
                        <Button className='btn-content' btnClassName='btn-active'>Play now</Button>


                    </div>
                </div>
                <div className="col-7">
                    <div className="hero-img2">
                        <img className='hero-img' src={heroarea} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    </section>);
}

export default Hero;