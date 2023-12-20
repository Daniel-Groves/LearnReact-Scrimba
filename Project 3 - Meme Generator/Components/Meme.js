function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input1" placeholder="Shut up" />
                <input type="text" className="form--input2" placeholder="And take my money" />
                <button className="form--button">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

window.Meme = Meme;