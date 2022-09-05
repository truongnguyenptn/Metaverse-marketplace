import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function RightContent({content, onClickFunc}) {
    return (<div className="right-content">
        <ul className="right-list">
            <li>
                <div className="cart-icon dropdown">
                    <i className="fas fa-cart-arrow-down"></i>
                    <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                    <span className="count">10</span>
                    <div className="dropdown__menu">
                        <ul className="list">
                            <li className="list-item">
                                <div className="close">
                                    <FontAwesomeIcon icon="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                </ul>
                            </li>
                            <li className="list-item">
                                <div className="close">
                                    <FontAwesomeIcon icon="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                </ul>
                            </li>
                            <li className="list-item">
                                <div className="close">
                                    <FontAwesomeIcon icon="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                </ul>
                            </li>
                            <li className="list-item">
                                <div className="close">
                                    <i className="fas fa-times"></i>
                                </div>
                                <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                </ul>
                            </li>
                        </ul>
                        <a href="cart.html" className="link-btn">Cart Page</a>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification dropdown">
                    <FontAwesomeIcon icon="fas fa-bell" />
                    <span className="count">11</span>
                    <div className="dropdown__menu">
                        <ul className="list">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon="fas fa-bell" />
                                    Invest Exchange
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" className="sign-in" data-toggle="modal" data-target="#login" onClick={()=>onClickFunc()}>
                    <FontAwesomeIcon icon="fas fa-user" /> {content}

                </a>
            </li>
        </ul>
    </div>);
}

export default RightContent;