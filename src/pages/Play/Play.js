import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import bcImg from '../../assets/breadcrumb/play.png';
import './play.scss';
function Play() {
    return (<div className="">
            <Header active='1'/>
            <Breadcrumb bcImg={bcImg} bcTitle="Play" />
    </div>);
}

export default Play;