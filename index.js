function Page(){
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

function Header(){
    return (
        <header>
                <nav className="nav">
                <img className="image" src="./react-logo.png" alt="React Logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
        </header>
    )
}

function Footer(){
    return (
        <footer>
                <small>
                    © 2023 Groves development. All rights reserved.
                </small>
        </footer>
    )
}

function Content(){
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>This is reason 1</li>
                <li>This is reason 2</li>   
                <li>This is reason 3</li>
            </ol>
        </div>
    )
}

// JSX
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
