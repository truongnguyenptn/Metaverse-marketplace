import { createRef, useState } from "react";
import Header from "../../components/Header/Header";
import ModalLogin from "../../components/Login/Login";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Funfact from "./Funfact/Funfact";
import Activities from "./Activities/Activities";
import RecentWinners from "./RecentWinners/RecentWinners";
import './Hero/Hero.scss';
import './RecentWinners/recentwinners.scss';
import './Activities/activities.scss';
import toggleRegister from "../../utils/Modal/toggleRegister";
function Home() {
    const Modal = createRef(null);
    return (<div>
        <ModalLogin ref={Modal}></ModalLogin>
        <Header active ='0' toggleModal={()=>toggleRegister(Modal)}/>
        <Hero/>
        <Features/>
        <Activities/>
        <Funfact/>
        <RecentWinners/>
    </div> );
}

export default Home;