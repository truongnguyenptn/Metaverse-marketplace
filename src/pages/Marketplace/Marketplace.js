import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import bcImg from '../../assets/breadcrumb/play.png';
import './marketplace.scss';
import Shop from "../Marketplace/Shop/Shop";
import '../Marketplace/Shop/shop.scss';
import { createRef } from "react";
import ModalLogin from "../../components/Auth/Login";
import ModalRegister from "../../components/Auth/Login";
import toggleModal from "../../utils/Modal/toggleModal";
function Marketplace() {
    const ModalRegisterRef = createRef(null);
    const ModalLoginRef = createRef(null);
    const Modal = {ModalLoginRef,ModalRegisterRef};
    return (<div className="marketplace">
        <ModalLogin ref={ModalLoginRef}/>
        <ModalRegister ref={ModalRegisterRef}/>
        <Header modal={Modal} active='3' />
        <Breadcrumb bcImg={bcImg} bcTitle="Marketplace"  />
        <Shop/>
    </div>);
}

export default Marketplace;