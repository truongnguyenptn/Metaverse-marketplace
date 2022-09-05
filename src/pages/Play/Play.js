import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import bcImg from '../../assets/breadcrumb/play.png';
import ModalLogin from "../../components/Auth/Login";
import toggleModal from "../../utils/Modal/toggleModal";
import ModalRegister from "../../components/Auth/Login";
import { createRef } from "react";
function Play() {
    const ModalRegisterRef = createRef(null);
    const ModalLoginRef = createRef(null);
    const Modal = {ModalLoginRef,ModalRegisterRef};
    return (<>
        <ModalLogin ref={ModalLoginRef}/>
        <ModalRegister ref={ModalRegisterRef}/>
        <Header active='1' modal={Modal}/>
            <Breadcrumb bcImg={bcImg} bcTitle="Play" />
    </>);
}

export default Play;