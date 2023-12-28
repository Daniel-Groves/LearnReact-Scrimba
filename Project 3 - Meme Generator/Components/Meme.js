
function Meme() {
    const [meme, setMeme] = React.useState({
        randomImage: 'https://i.imgflip.com/1bij.jpg',
        topText: '',
        bottomText: ''
        }
        );
    const [allMemes, setAllMemes] = React.useState([]);
      
    function getMeme() {;
        const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;
        setMeme(meme => ({...meme, randomImage: url}));
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }


    React.useEffect(function() {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMeme}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2  className="meme--text top">{meme.topText}</h2>
                <h2  className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

window.Meme = Meme;