function Card(props) {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={`./Images/${props.coverImg}`} />
                <div className="info">
                    <img className="info--star" src="./Images/star.png" />
                    <span className="info--ratings">{props.stats.rating}</span>
                    <span className="card--reviewCount"> ({props.stats.reviewCount}) • </span>
                    <span className="card--location"> {props.location}</span>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

window.Card = Card;