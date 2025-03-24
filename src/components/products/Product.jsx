const Product = ({
  products: { name, price, items, id },
  increment,
  theme,
  decrement,
  deleteElement,
}) => {
  return (
    <div
      className={`${
        theme ? "text-white" : "text-black"
      } flex flex-col sm:flex-row justify-evenly items-center w-full p-4 bg-blue-500 rounded-2xl mb-8 mt-8 font-extrabold text-lg sm:text-2xl `}
    >
      <div className="flex flex-col sm:flex-row sm:space-x-8">
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Items: {items}</p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
        <button className="btn btn-success" onClick={() => increment(id)}>
          +
        </button>
        <button
          className="btn btn-warning"
          onClick={() => (items === 1 ? items : decrement(id))}
        >
          -
        </button>
        <button className="btn btn-error" onClick={() => deleteElement(id)}>
          Delete
        </button>
      </div>

      <p className="mt-4 sm:mt-0">Total: {price * items}</p>
    </div>
  );
};

export default Product;
