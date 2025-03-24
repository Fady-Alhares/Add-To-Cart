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
      } flex space-x-5 justify-evenly items-center w-full  bg-blue-500  font-extrabold  text-2xl  p-3 rounded-2xl mb-8 mt-[2em] `}
    >
      <h1>Name : {name}</h1>
      <h1>Price : {price}</h1>
      <h1>Items : {items} </h1>

      <div className="flex-row space-x-[3em] ">
        <button
          className="btn btn-success"
          onClick={() => {
            increment(id);
          }}
        >
          +
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            items === 1 ? items : decrement(id);
          }}
        >
          -
        </button>
        <button
          className="btn btn-error"
          onClick={() => {
            deleteElement(id);
          }}
        >
          Delete
        </button>
      </div>

      <h1>Total : {price * items} </h1>
    </div>
  );
};

export default Product;
