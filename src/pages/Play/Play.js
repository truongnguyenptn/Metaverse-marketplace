import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import bcImg from '../../assets/breadcrumb/play.png';
import ModalLogin from "../../components/Auth/Login";
import toggleModal from "../../utils/Modal/toggleModal";
import ModalRegister from "../../components/Auth/Login";
import { createRef } from "react";
function Play() {
    const ModalRegister = createRef(null);
    const ModalLogin = createRef(null);
    function toggleLogin(){
        toggleModal(ModalLogin)
    }
    function toggleRegister(){
        toggleModal(ModalRegister)
    }
    const toggleModalFunc = {toggleLogin,toggleRegister};
    return (<div className="">
        <ModalRegister ref={ModalRegister}></ModalRegister>
        <ModalLogin ref={ModalLogin}></ModalLogin>
        <Header active='1' toggleModal={()=>toggleModalFunc()}/>
            <Breadcrumb bcImg={bcImg} bcTitle="Play" />
    </div>);
}

export default Play;