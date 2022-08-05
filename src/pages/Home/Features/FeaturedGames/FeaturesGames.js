import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../../components/Card/Card";
import game1 from '../../../../assets/game/icon1.png';
import game2 from '../../../../assets/game/icon2.png';
import game3 from '../../../../assets/game/icon3.png';
import Button from "../../../../components/Button/Button";
function FeaturesGames() {
    const FEATURED_GAMES = [
        {
            "name": "DICE",
            "image": game1
        },
        {
            "name": "POKER",
            "image": game2
        },
        {
            "name": "ITEM",
            "image": game3
        }
    ]
    return (
            <div class="col-12-align">
            {
                        FEATURED_GAMES.map((item) => {
                            return (
                                <Card image={item.image}>
                                    <Button className='center' btnClassName='btn-active'>
                                        Play now
                                    </Button>
                                </Card>
                            )
                        })
                    }
                <div class="game-slider owl-carousel owl-theme owl-loaded">
                    



                    {/* <div class="owl-stage-outer">
                        <div class="owl-stage" >
                            <div class="owl-item cloned" >
                                <div class="item">
                                    <div class="single-game">
                                        <a href="#" class="mybtn2">PLAY NOW !</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="owl-controls">
                        <div class="owl-nav">
                            <div class="owl-prev" >
                                <FontAwesomeIcon icon="fa fa-angle-left" />
                            </div>
                            <div class="owl-next" ><i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                        <div class="owl-dots">
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FeaturesGames;