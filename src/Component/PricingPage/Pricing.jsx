import "./Pricing.css"
import  PricingCard from "../PricingCard/PricingCard"
import cardData from "../../Data/PricingCardData"

const Pricing = () => {
    return(
        <div className="pricingContainer">
            <img src="./Images/wave.svg" alt="svg" className="wave" draggable="false" />
            <div className="pricingNavbar">
            <span className="headingText">Our Pricing Modal</span>
            </div>
            <div className="pricingMain">
                {
                    cardData.map(val=> <PricingCard data={val}/>)
                }
            </div>
        </div>
    )
}

export default Pricing