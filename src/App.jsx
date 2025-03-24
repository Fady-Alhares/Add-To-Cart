import Header from "./components/Header";
import Items from "./components/products/Items";

import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "Big-Shipcy", price: 100, items: 1 },
    { id: 1, name: "V-Cola", price: 200, items: 1 },
    { id: 2, name: "Baneh", price: 300, items: 1 },
    { id: 3, name: "Ice Cream", price: 400, items: 1 },
    { id: 4, name: "Cigaretes", price: 500, items: 1 },
  ]);
  const [addedProducts] = useState([
    { id: 0, name: "Big-Shipcy", price: 100, items: 1 },
    { id: 1, name: "V-Cola", price: 200, items: 1 },
    { id: 2, name: "Baneh", price: 300, items: 1 },
    { id: 3, name: "Ice Cream", price: 400, items: 1 },
    { id: 4, name: "Cigaretes", price: 500, items: 1 },
  ]);

  const increment = (id) => {
    const incrementChange = products.map((product) => {
      if (product.id === id) {
        product.items += 1;
      }
      return product;
    });
    setProducts(incrementChange);
  };
  const decrement = (id) => {
    const decrementChange = products.map((product) => {
      if (product.id === id) {
        product.items -= 1;
      }
      return product;
    });
    setProducts(decrementChange);
  };

  const deleteElement = (id) => {
    const del = products.filter((product) => product.id !== id);
    setProducts(del);
  };

  const deleteAll = () => {
    setProducts([]);
  };
  const reset = () => {
    const restItems = products.map((values) => {
      values.items = 1;
      return values;
    });
    setProducts(restItems);
  };

  const [theme, setTheme] = useState(false);
  const darkMode = () => {
    setTheme(!theme);
  };

  const addToCart = (id) => {
    // we can use find (object true , undefiend false)or some (true , false)
    let check = products.find((product) => product.id === id);
    if (!check) {
      const neededProduct = addedProducts.find((product) => product.id == id);
      setProducts([...products, neededProduct]);
    } else {
      increment(id);
    }
  };

  return (
    <div
      className={`${theme ? "bg-black " : "bg-white"} min-h-screen  p-4 sm:p-8`}
    >
      <Header
        addedProducts={addedProducts}
        darkMode={darkMode}
        theme={theme}
        deleteAll={deleteAll}
        reset={reset}
        addToCart={addToCart}
        num={products.length}
      />
      <Items
        products={products}
        increment={increment}
        theme={theme}
        decrement={decrement}
        deleteElement={deleteElement}
        deleteAll={deleteAll}
        reset={reset}
      />
    </div>
  );
};

export default App;
