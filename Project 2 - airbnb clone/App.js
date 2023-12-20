function App() {
    const experiences = Data.map(experience => {
    return (
        <Card 
            key={experience.id}
            {...experience}
        />
    )
})
    return (
        <div className = "container">
            <Navbar />
            <Hero />
            <div className = "experiences">
                {experiences}
            </div>
        </div>
    )
}

window.App = App;