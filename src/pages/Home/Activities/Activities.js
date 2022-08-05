import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Table from "../../../components/Table/Table";
import Button from "../../../components/Button/Button";
import { useState } from "react";
function Activities() {
    const DATA_FETCH = [
        [{
            "NAME": "TOM HOLLAND",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "JOHN WICK",
            "ID": "B799B872",
            "AMOUNT": "0.0000005",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "JOHNNY DEP",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.0000005"
        }],
        [{
            "NAME": "JOKER CHUA",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "HALLEY QUEEN",
            "ID": "B799B872",
            "AMOUNT": "0.0000005",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "SPIDER MAN",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.0000005"
        }], [{
            "NAME": "ELON MUSK",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "NICK FURY",
            "ID": "B799B872",
            "AMOUNT": "0.0000005",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.00000051"
        },
        {
            "NAME": "HARLEY QUINN",
            "ID": "B799B87240",
            "AMOUNT": "0.00000051",
            "CHANCE": "80%",
            "GAME": "DICE",
            "PROFIT": "0.0000005"
        }]


    ]
    let [data, setData] = useState(DATA_FETCH[0]);
    const TABLE_HEADING = [
        "USER", "BET ID", "BET AMOUNT", "CHANCE", "GAME", "PROFIT"
    ]
    const SECTION_HEADING = {
        "SUBTITLE": "THE SMARTER WAY",
        "TITLE": "LEND AND BORROW",
        "TEXT": "The World's First Crypto Lending Marketplace and Affordable and competitive interest rates"
    }
    const TAB_MENU =
        ["ALL", "MY BETS", "JACKPOTS"];
    let [menuActive, setMenuActive] = useState(0);
    return (<div className="activities">
        <div className="container">
            <div className="row">

                <SectionHeading subtitle={SECTION_HEADING.SUBTITLE} title={SECTION_HEADING.TITLE} text={SECTION_HEADING.TEXT}></SectionHeading>
            </div>

            <div className="row">
                <div className="col">
                    <div className="tab__menu">
                        <ul className="menu-list">
                            {TAB_MENU.map((item, index) => {
                                let BTNCLASSNAME = ' ';
                                if (index == menuActive) BTNCLASSNAME += 'btn-active';
                                return (
                                    <li index={index}>
                                        <Button onClickFunc={() => { setMenuActive(index); setData(DATA_FETCH[index]); }} btnClassName={BTNCLASSNAME}>
                                            {item}
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="tab__content">
                        <Table data={data} header={TABLE_HEADING}>
                        </Table>
                    </div>

                </div>
            </div>
        </div>

    </div>);
}

export default Activities;