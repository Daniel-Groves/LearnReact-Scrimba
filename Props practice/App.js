
function App() {
    console.log(JokesData)
    const Data = JokesData
    const jokeElements = Data.map(joke => <Joke setup={joke.setup} punchline={joke.punchline}/>)
    return (
        <div className = "container">
            {jokeElements}
        </div>
    )
}

window.App = App;