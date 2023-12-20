function Joke(props) {
    return (
        <div className="joke">
            <h1>{props.setup}</h1>
            <h2>{props.punchline}</h2>
            <hr></hr>
        </div>
    )
}

window.Joke = Joke;