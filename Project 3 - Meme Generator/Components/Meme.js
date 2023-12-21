function Meme() {
    function getMeme() {
        const memesArray = memesData.data.memes;
        const url = memesArray[Math.floor(Math.random() * memesArray.length)].url;
        console.log(url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input1" placeholder="Shut up" />
                <input type="text" className="form--input2" placeholder="And take my money" />
                <button className="form--button" onClick={getMeme}>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}

window.Meme = Meme;