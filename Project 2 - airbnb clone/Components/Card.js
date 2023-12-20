function Card(props) {
    return (
        <div className="card">
        <img className="card--photo" src={`./Images/${props.img}`} />
            <div className="info">
                <img className="info--star" src="./Images/star.png" />
                <span className="info--ratings">{props.rating}</span>
                <span className="grey"> ({props.reviewCount}) • </span>
                <span className="grey"> {props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

window.Card = Card;