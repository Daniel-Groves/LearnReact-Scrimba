function Page(){
    return (
        <ol>
            <li>This is reason 1</li>
            <li>This is reason 2</li>
            <li>This is reason 3</li>
        </ol>
    )
}


// JSX
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
