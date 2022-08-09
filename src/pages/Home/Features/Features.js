import FeaturesGames from "./FeaturedGames/FeaturesGames";
import FeaturesBox from "./FeaturesBox/FeaturesBox";

import { Link } from "react-router-dom";
import './features.scss';
function Features() {
    
    return (<section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-12-align">
                        <FeaturesBox>

                        </FeaturesBox>
                    </div>
                </div>
            </div>
        <div className="featured-games">
            <div className="row content">
            <div className="col">
                <div className="section-heading">
                    <h5 className="subtitle">
                        Try to check out our
                    </h5>
                    <h2 className="title">
                        featured games
                    </h2>
                    <p className="text">
                        Check out our latest featured game! To meet today's challenges &amp; earn cryptocurrency. Top 10 players receive prizes every hour!
                    </p>
                </div>
            </div>
            </div>
            <div className="row">
                <FeaturesGames></FeaturesGames>
            </div>
        </div>
    </section>);
}

export default Features;