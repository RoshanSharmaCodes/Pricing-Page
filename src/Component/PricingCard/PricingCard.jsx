import "./PricingCard.css"

const PricingCard = ({ data }) => {
  return (
    <div className="cardContainer">
        <div className="cardPriceTag"><span className="cardPriceText">{data.cardPrice}</span></div>
        {data.best&&<img src="./Images/Crown.png" className="crownCard" draggable="false" />}
      <div className="cardHeader">
        <img src={data.cardImage} className="cardImgHeader" alt={data.cardName} draggable="false" />
      </div>
      <div className="cardBody">
        <span className="cardNameText">{data.cardName}</span>
        <div className="cardFeatureList">
          {
            data.features.map(val=> {
              return(<div className="cardFeatureListItem">
                <span>{Object.keys(val)}</span>
                <span><img className="featureTicksImg" src={ val[Object.keys(val)]==true?"./Images/greenTick.png":"./Images/wrongTick.png"} draggable="false" /></span>
              </div>)
            })
          }
        </div>
      </div>
      <div className="cardFooter">
        <button className="buyPlanButton">Get Started</button>
      </div>
    </div>
  )
}

export default PricingCard
