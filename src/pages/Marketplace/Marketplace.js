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
    const ModalRegister = createRef(null);
    const ModalLogin = createRef(null);
    function toggleLogin(){
        toggleModal(ModalLogin)
    }
    function toggleRegister(){
        toggleModal(ModalRegister)
    }
    const toggleModalFunc = {toggleLogin,toggleRegister};
    return (<div className="marketplace">
        <ModalRegister ref={ModalRegister}></ModalRegister>
        <ModalLogin ref={ModalLogin}></ModalLogin>
        <Header active='3' toggleModal={()=>toggleModalFunc()}/>
        <Breadcrumb bcImg={bcImg} bcTitle="Marketplace"  />
        <Shop/>
    </div>);
}

export default Marketplace;