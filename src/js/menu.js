const renderMenu = function () {
  const main = document.getElementById('main');
  main.classList.add('menu');

  main.innerHTML = '';

  const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Caprese Salad", description: "Fresh tomatoes, mozzarella, basil, and balsamic glaze.", price: "$9.99" },
            { name: "Spinach Artichoke Dip", description: "Creamy dip with spinach, artichokes, and melted cheese.", price: "$8.99" },
            { name: "Stuffed Mushrooms", description: "Mushroom caps filled with a savory mixture of breadcrumbs, garlic, and herbs.", price: "$10.99" },
            { name: "Garlic Bread", description: "Toasted baguette slices with garlic butter and herbs.", price: "$7.99" },
            { name: "Bruschetta", description: "Tomato, garlic, and basil topping on toasted bread.", price: "$6.99" }
        ]
    },
    {
        category: "Main Courses",
        items: [
            { name: "Grilled Salmon", description: "Freshly grilled salmon fillet with lemon herb sauce.", price: "$17.99" },
            { name: "Chicken Alfredo", description: "Classic fettuccine Alfredo with grilled chicken.", price: "$14.99" },
            { name: "Vegetable Stir Fry", description: "Assorted fresh vegetables stir-fried to perfection.", price: "$12.99" },
            { name: "Margherita Pizza", description: "Traditional pizza with tomato, mozzarella, and basil.", price: "$11.99" },
            { name: "Beef Tacos", description: "Soft corn tortillas filled with seasoned beef, lettuce, and cheese.", price: "$13.99" }
        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey molten center.", price: "$6.99" },
            { name: "Tiramisu", description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.", price: "$8.99" },
            { name: "Fruit Sorbet", description: "Refreshing sorbet made with a variety of seasonal fruits.", price: "$5.99" },
            { name: "Cheesecake", description: "Rich and creamy New York-style cheesecake.", price: "$9.99" },
            { name: "Panna Cotta", description: "Italian dessert with sweetened cream and vanilla.", price: "$7.99" }
        ]
    }
];


menuData.forEach(function (categoryData) {
  const section = document.createElement("section");
  section.classList.add('menu');

  const h2 = document.createElement("h2");
  h2.textContent = categoryData.category;

  const ul = document.createElement("ul");

  categoryData.items.forEach(function (itemData) {
      const li = document.createElement("li");

      const h3 = document.createElement("h3");
      h3.textContent = itemData.name;

      const p1 = document.createElement("p");
      p1.textContent = itemData.description;

      const p2 = document.createElement("p");
      p2.textContent = "Price: " + itemData.price;

      li.appendChild(h3);
      li.appendChild(p1);
      li.appendChild(p2);

      ul.appendChild(li);
  });

  section.appendChild(h2);
  section.appendChild(ul);

  main.appendChild(section);
});

  return console.log("Menu page")
}

export default renderMenu