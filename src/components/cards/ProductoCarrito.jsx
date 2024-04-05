const ProductItem = ({
  name,
  description,
  brand,
  id,
  img,
  price,
  quantity,

  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-md  w-full">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <img src={img} alt={name} className="w-28 h-28 object-cover" />

          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-sm text-gray-600">Marca: {brand}</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold">${price}</p>
          <button
            onClick={() => onRemove(id)}
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={`quantity-${id}`} className="mr-2">
          Cantidad:
        </label>

        <select
          id={`quantity-${id}`}
          value={quantity}
          onChange={(e) => onQuantityChange(id, parseInt(e.target.value))}
          className="border border-gray-300 rounded-md"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductItem;
