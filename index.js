function Page(){
    return (
        <div>
            <header>
                <nav>
                <img src="./react-logo.png" alt="React Logo" width="40px"></img>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>This is reason 1</li>
                <li>This is reason 2</li>   
                <li>This is reason 3</li>
            </ol>
            <footer>
                <small>
                    © 2023 Groves development. All rights reserved.
                </small>
            </footer>
        </div>
    )
}


// JSX
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
