import { useTranslation } from 'react-i18next';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import Button from '../Button/Button';
function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const HEADER_TOP = useRef(null);
    const NAV_MENU = useRef(null);
    const HEADER = useRef(null);
    const LOGIN_MODAL = useRef(null);
    let sticky = HEADER;
    console.log(sticky)

    function headerFixed() {
        if(window.scrollY> sticky){
            HEADER_TOP.current.className.add('hide');
        } else {
            HEADER_TOP.current.className.remove('hide');
        }
    }
    function showModal(){

    }
    const NAV = [
        {
            "NAME": " HOME",
            "Z": "HOME",
        },
        {
            "NAME": " PLAY",
            "Z": "HOME",
        },
        {
            "NAME": " ROADMAP",
            "Z": "HOME",
        },
        {
            "NAME": " MARKETPLACE",
            "Z": "HOME",
        },
        {
            "NAME": " PAGES",
            "Z": "HOME",
        },
        {
            "NAME": " CONTACT",
            "Z": "HOME",
        }
    ]
    const PAGES_MENU = [
        {
            "NAME": "ABOUT",
            "PAGE": "/"
        },
        {
            "NAME": "AFFLIATE",
            "PAGE": "/"
        },
        {
            "NAME": "AWARDS",
            "PAGE": "/"
        },
        {
            "NAME": "BONUS",
            "PAGE": "/"
        },
        {
            "NAME": "CART",
            "PAGE": "/"
        },
        {
            "NAME": "FAQ",
            "PAGE": "/"
        },
        {
            "NAME": "HOW IT WORK",
            "PAGE": "/"
        },
        {
            "NAME": "TERM & CONDITIONS",
            "PAGE": "/"
        },
        {
            "NAME": "CONDITION DETAIL",
            "PAGE": "/"
        },
    ]
    return (
        <header ref={HEADER}>
            <div ref={HEADER_TOP} className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='content'>
                                <LeftContent />
                                <RightContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref ={NAV_MENU} className='header__menu'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <nav className='navbar'>
                                <a className ='nav__brand'>
                                    <h1>ACHERTYPE</h1>
                                    </a>
                                    <div className='navbar-collapse'>
                                        <ul className='navbar__nav'>
                                            {NAV.map((item,index)=>{
                                                let CLASSNAME = 'nav__link';
                                                if(item.NAME===" HOME" || item.NAME===" PAGES") CLASSNAME+=" dropdown-toggle";
                                                return(<li key={index} className='nav__item'>
                                                <Link to="/" className={CLASSNAME}>
                                                    {item.NAME}
                                                </Link>
                                            </li>)
                                            })}
                                            <li className='nav__item'>
                                            <Button className='btn'>Join us</Button>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                <button className='navbar__toggle'>
                                <FontAwesomeIcon icon="fa-solid fa-bars" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;