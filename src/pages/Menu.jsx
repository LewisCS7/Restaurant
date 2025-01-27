const Menu = () => {
  const menuItems = [
    { id: 1, name: "Salade César", price: 12, category: "Entrées" },
    { id: 2, name: "Steak Frites", price: 18, category: "Plats" },
    { id: 3, name: "Tarte Tatin", price: 9, category: "Desserts" }
  ]

  return (
    <div className="menu-page">
      <h1>Notre Carte</h1>
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <p>{item.price}€</p>
          <span>{item.category}</span>
        </div>
      ))}
    </div>
  )
}

export default Menu