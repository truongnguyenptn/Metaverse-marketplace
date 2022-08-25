import image from '../../../assets/game/icon1.png';
import Card from '../../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import togglePanelCollapse from '../../../utils/PanelCollapse/togglePanelCollapse';
import { useState } from 'react';
function Shop() {
    const SHOP_ITEMS = [
        {
            "name": "LV",
            "image": image,
            "price": "500$",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            "name": "MVC",
            "image": image,
            "price": "500$",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            "name": "LLVM",
            "image": image,
            "price": "500$",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            "name": "MVVM",
            "image": image,
            "price": "500$",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            "name": "Binary tree",
            "image": image,
            "price": "500$",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },

    ]
    const InitPanelList = new Array(3).fill('');
    const [togglePanelCollapse,PanelCollapseList] = useState(InitPanelList);
    return (<section className="shop">
        <div className='container container-content shop__container'>
            <div className="filter">
                <div className='filter__header'>
                    <h7 className='title'>Filter</h7>
                </div>
                <div className='filter__panel Collapse__container'>
                    <div className='CollapseTrigger__container' onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        togglePanelCollapse(e.target);
                    }}>
                        <div className='LeftContent_container'>
                            <div className='filter__icon'>
                                <FontAwesomeIcon className='angle-up' icon="fa-solid fa-angle-up" />
                                <FontAwesomeIcon className='angle-down' icon="fa-solid fa-angle-down" />
                            </div>
                            <h5 className='text'>Game</h5>
                        </div>

                    </div>
                    <div className='filter__group CollapseContent__container'>
                        <div className='option'>
                            <label htmlFor='origin'>Origin</label>
                            <input id='origin' type='radio' />
                        </div>
                        <div className='option'>
                            <label htmlFor='classic'>Classic</label>
                            <input id='classic' type='radio' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                {
                    SHOP_ITEMS.map((item, index) => {
                        return (
                            <Card image={item.image} title={item.name}>
                                <h3>{item.price}</h3>
                                <p className='product__desc'>
                                    {item.description}
                                </p>
                            </Card>
                        )

                    })
                }
            </div>
        </div>

    </section>);
}

export default Shop;