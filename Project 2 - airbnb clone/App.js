function App() {
    return (
        <div className = "container">
            <Navbar />
            {/* <Hero /> */}
            <Card 
                img="katie-zaferes.png" 
                rating={5.0} 
                reviewCount = {6} 
                country = "USA" 
                title="Life Lessons with Katie Zaferes" 
                price={136}
            />
        </div>
    )
}

window.App = App;