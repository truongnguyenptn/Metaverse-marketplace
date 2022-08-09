import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import Button from '../Button/Button';
import { type } from '@testing-library/user-event/dist/type';
function Header({toggleModal,active}) {
    const {t} = useTranslation();
    const changeLanguage = (lng) => {
        console.log(lng)
        i18next.changeLanguage(lng);
    };
    const HEADER_TOP = useRef(null);
    const NAV_MENU = useRef(null);
    const HEADER = useRef(null);
    let sticky = HEADER;
    // console.log(sticky)

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
            "ROUTE": "/",
        },
        {
            "NAME": " PLAY",
            "ROUTE": "/play"
        },
        {
            "NAME": " ROADMAP",
            "ROUTE": "/",
        },
        {
            "NAME": " MARKETPLACE",
            "ROUTE": "/",
        },
        {
            "NAME": " PAGES",
            "ROUTE": "/",
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
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
          },
        {
          code: 'fr',
          name: 'Français',
          country_code: 'fr',
        },
        {
            code: 'vn',
            name: 'Vietnamese',
            country_code: 'vn',
        },
        {
          code: 'ar',
          name: 'العربية',
          dir: 'rtl',
          country_code: 'sa',
        },
      ]
      const HEADER_TRANS = t('header_pages', { returnObjects: true });
      console.log(HEADER_TRANS)
    return (
        <header ref={HEADER}>
            <div ref={HEADER_TOP} className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='content'>
                                <LeftContent languages={languages} changeLanguage={changeLanguage}/>
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
                                                let LINKCLASSNAME = 'nav__link';
                                                let ITEMCLASSNAME = 'nav__item';
                                                if(index==active) ITEMCLASSNAME+=' active';
                                                if(item.NAME===" HOME" || item.NAME===" PAGES") LINKCLASSNAME+=" dropdown-toggle";
                                                return(<li key={index} className={ITEMCLASSNAME}>
                                                <Link to={item.ROUTE} className={LINKCLASSNAME}>
                                                    {HEADER_TRANS[index]}
                                                </Link>
                                            </li>)
                                            })}
                                            <li className='nav__item'>
                                            <Button onClickFunc={toggleModal} btnClassName='btn-active'>Join us</Button>
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