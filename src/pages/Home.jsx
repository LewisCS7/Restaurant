const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenue au React Gourmand</h1>
        <p>La cuisine traditionnelle revisitée avec passion</p>
      </section>
      
      <section className="specials">
        <h1>Nos Spécialités</h1>
        <div className="dishes-grid">
          <div className="dish-card">
            <img src="https://img-3.journaldesfemmes.fr/oVCXZsSN4hDwBWH_Gi-aJYE06tE=/800x600/d5bc2b8de40e429ba48a3393206fb4fd/ccmcms-jdf/39884634.jpg" alt="Plat 1" />
            <h3>Bœuf Bourguignon</h3>
            <p>24€</p>
          </div>
          <div className="dish-card">
            <img src="https://assets.afcdn.com/recipe/20190529/93191_w600.jpg" alt="Plat 2" />
            <h3>Blanquette de veau</h3>
            <p>Bon marché</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home