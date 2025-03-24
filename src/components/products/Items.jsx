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
      } text-3xl text-center font-extrabold p-[1em]`}
    >
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
      <h1
        className={`${products.length === 0 ? "hidden" : "block"}
        text-green-500 font-extrabold text-4xl p-4 mb-[1em] `}
      >
        Total Paid :
        {products.reduce(
          (acc, product) => acc + product.price * product.items,
          0
        )}
      </h1>
      <h1
        className={`${
          products.length === 0 ? "block" : "hidden"
        } text-red-800 font-extrabold text-4xl p-4 mb-[1em]`}
      >
        Empty Card !!
      </h1>
    </div>
  );
};

export default Items;
