import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import bcImg from '../../assets/breadcrumb/play.png';
import './marketplace.scss';
import Shop from "../Marketplace/Shop/Shop";
import '../Marketplace/Shop/shop.scss';
import toggleRegister from "../../utils/Modal/toggleRegister";
import { createRef } from "react";
import ModalLogin from "../../components/Login/Login";
function Marketplace() {
    const Modal = createRef(null);
    return (<div className="marketplace">
        <ModalLogin ref={Modal}></ModalLogin>
        <Header active='3' toggleModal={()=>toggleRegister(Modal)}/>
        <Breadcrumb bcImg={bcImg} bcTitle="Marketplace"  />
        <Shop/>
    </div>);
}

export default Marketplace;