const page = (
    <div>
        <h1>This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

const navbar = (
    <nav>
        <h1>Nike</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
// JSX
ReactDOM.createRoot(document.getElementById("root")).render(navbar);
