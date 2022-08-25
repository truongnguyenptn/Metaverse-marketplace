import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import bcImg from '../../assets/breadcrumb/play.png';
function Play() {
    return (<div className="">
            <Header active='1'/>
            <Breadcrumb bcImg={bcImg} bcTitle="Play" />
    </div>);
}

export default Play;