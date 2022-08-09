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

function Home() {
    const Modal = createRef(null);
    function toggleModal() {
        if(Modal!=null) {
            const target = Modal.current
            target.classList.add("show");
        }
    }
    return (<div>
        <ModalLogin ref={Modal}></ModalLogin>
        <Header active ='0' toggleModal={toggleModal}/>
        <Hero/>
        <Features/>
        <Activities/>
        <Funfact/>
        <RecentWinners/>
    </div> );
}

export default Home;