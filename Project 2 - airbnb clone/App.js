function App() {
    const experiences = Data.map(experience => {
    return (
        <Card 
            key={experience.id}
            img={experience.coverImg} 
            rating={experience.stats.rating} 
            reviewCount = {experience.stats.reviewCount} 
            country = {experience.location} 
            title={experience.title} 
            price={experience.price}
        />
    )
})
    return (
        <div className = "container">
            <Navbar />
            {/* <Hero /> */}
            <div className = "experiences">
                {experiences}
            </div>
        </div>
    )
}

window.App = App;