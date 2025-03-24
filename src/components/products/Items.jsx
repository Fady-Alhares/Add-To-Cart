import Product from "./Product";
const Items = ({
  products,

  increment,
  theme,
  decrement,
  deleteElement,
  deleteAll,
  reset,
}) => {
  return (
    <div
      className={`${
        theme ? "bg-black" : "bg-white"
      } p-4 sm:p-8 text-center font-extrabold `}
    >
      <div className="space-y-4">
        {products.map((products, index) => (
          <Product
            key={index}
            products={products}
            increment={increment}
            theme={theme}
            decrement={decrement}
            deleteElement={deleteElement}
            deleteAll={deleteAll}
            reset={reset}
          />
        ))}
      </div>

      <h2
        className={`${products.length === 0 ? "hidden" : "block"}
        text-green-500 font-extrabold text-2xl sm:text-4xl p-4 mb-4 `}
      >
        Total Paid :
        {products.reduce(
          (acc, product) => acc + product.price * product.items,
          0
        )}
      </h2>
      <h2
        className={`${
          products.length === 0 ? "block" : "hidden"
        } text-red-800 font-extrabold text-2xl sm:text-4xl p-4 mb-4`}
      >
        Empty Card !!
      </h2>
    </div>
  );
};

export default Items;
