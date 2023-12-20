function Card(props) {
    let badgeText
    if (props.experience.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.experience.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={`./Images/${props.experience.coverImg}`} />
                <div className="info">
                    <img className="info--star" src="./Images/star.png" />
                    <span className="info--ratings">{props.experience.stats.rating}</span>
                    <span className="card--reviewCount"> ({props.experience.stats.reviewCount}) • </span>
                    <span className="card--location"> {props.experience.location}</span>
                </div>
                <h2 className="card--title">{props.experience.title}</h2>
                <p className="card--price"><span className="bold">From ${props.experience.price}</span> / person</p>
        </div>
    )
}

window.Card = Card;