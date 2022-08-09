import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Winner from "../../../components/Winner/Winner";
import eth from '../../../assets/icon2.png';
function RecentWinners() {
    const SECTION_HEADING = {
        "SUBTITLE": "TRY TO CHECK OUT OUR",
        "TITLE": "RECENT WINNERS",
        "TEXT": "We update our site regularly; more and more winners are added every day! To locate the most recent winner's information"
    }
    const WINNERS = [
        {
            "NAME": "JOHN WICK",
            "AMOUNT": "666",
            "COIN_TYPE": "ETH",
            "ICON": eth,
            "TRANSACTION_ID": "#5747e75482"
        },
        {
            "NAME": "ELON MUSK",
            "AMOUNT": "666",
            "COIN_TYPE": "ETH",
            "ICON": eth,
            "TRANSACTION_ID": "#5747e75482"
        },
        {
            "NAME": "JOHNNY SINS",
            "AMOUNT": "666",
            "COIN_TYPE": "ETH",
            "ICON": eth,
            "TRANSACTION_ID": "#5747e75482"
        }
    ]
    return (<section className="recent-winners">
        <div className="container">
            <div className="row">
                <SectionHeading title={SECTION_HEADING.TITLE} subtitle={SECTION_HEADING.SUBTITLE} TEXT={SECTION_HEADING.TEXT} />

            </div>
            <div className="row winners">

                {
                    WINNERS.map((item, index) => {
                        return (<div key={index} className="col-3">
                            <Winner name={item.NAME} amount={item.AMOUNT} type={item.COIN_TYPE} transactionId={item.TRANSACTION_ID} icon={item.ICON} />
                        </div>)
                    })
                }

            </div>
        </div>
    </section>);
}

export default RecentWinners;