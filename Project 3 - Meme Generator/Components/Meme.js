
function Meme() {
    const [meme, setMeme] = React.useState({
        randomImage: 'https://i.imgflip.com/1bij.jpg',
        topText: '',
        bottomText: ''
        }
        );
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    function getMeme() {
        const memesArray = allMemeImages.data.memes;
        const url = memesArray[Math.floor(Math.random() * memesArray.length)].url;
        setMeme(meme => ({...meme, randomImage: url}));
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Shut up" />
                <input type="text" className="form--input" placeholder="And take my money" />
                <button className="form--button" onClick={getMeme}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}

window.Meme = Meme;