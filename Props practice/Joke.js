function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleIsShown() {
        setIsShown(isShown => !isShown);
    }
    return (
        <div className="joke">
            {props.setup && <h1>{props.setup}</h1>}
            {isShown && <h2>{props.punchline}</h2>}
            <button onClick={toggleIsShown}>Toggle isShown</button>
            <hr></hr>
        </div>
    )
}

window.Joke = Joke;