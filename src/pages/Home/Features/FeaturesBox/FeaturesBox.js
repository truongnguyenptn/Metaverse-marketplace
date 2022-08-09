import Card from "../../../../components/Card/Card";
import image1 from '../../../../assets/feature/icon1.png';
import image2 from '../../../../assets/feature/icon2.png';
import image3 from '../../../../assets/feature/icon3.png';
function FeaturesBox(props,children) {
    const FEATURES_OFFER = [
        {
            "image": image1,
            "title": "EXCLUSIVE OFFER",
            "Other": "READ MORE"
        },
        {
            "image": image2,
            "title": "PROVABLY FAIR",
            "Other": "READ MORE"
        },
        {
            "image": image3,
            "title": "24/7 SUPPORT",
            "Other": "READ MORE"
        }
        

    ]
    return (<div className="features-box">
            {FEATURES_OFFER.map((item,index)=>{
                return(
                    <Card key={index} image = {item.image} title={item.title}>
                            
                            <p className="readmore">READMORE</p>
                    </Card>
                )
            })}
    </div>);
}

export default FeaturesBox;