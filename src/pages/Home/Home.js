import { createRef, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Funfact from "./Funfact/Funfact";
import Activities from "./Activities/Activities";
import RecentWinners from "./RecentWinners/RecentWinners";
import toggleModal from "../../utils/Modal/toggleModal";
import ModalLogin from "../../components/Auth/Login";
import './Hero/Hero.scss';
import './RecentWinners/recentwinners.scss';
import './Activities/activities.scss';
import ModalRegister from "../../components/Auth/Register";


function Home() {
    const ModalRegisterRef = createRef(null);
    const ModalLoginRef = createRef(null);
    const Modal = {ModalLoginRef,ModalRegisterRef};
    return (<>
        <ModalLogin ref={ModalLoginRef}/>
        <ModalRegister ref={ModalRegisterRef}/>
        <Header modal={Modal} active='0' />
        <Hero/>
        <Features/>
        <Activities/>
        <Funfact/>
        <RecentWinners/>
    </> );
}

export default Home;