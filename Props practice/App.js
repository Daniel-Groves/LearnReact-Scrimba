
function App() {
    const jokeElements = JokesData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline}/>)
    return (
        <div className = "container">
            {jokeElements}
        </div>
    )
}

window.App = App;