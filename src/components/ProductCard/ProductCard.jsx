function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
    <div className={`w-72 rounded-lg shadow-md overflow-hidden bg-white ${sinStock ? 'border-2 border-red-500 bg-gray-50' : 'border border-gray-200'}`}>
        <img src={imagen} className="w-full h-40 object-cover" alt={nombre} />
        <div className="p-4">
        <h5 className="text-lg font-semibold mb-1">{nombre}</h5>
        <p className="text-gray-800 mb-1">${precio}</p>
        <p className="mb-3">
            <small className={sinStock ? 'text-red-500' : 'text-gray-500'}>
            {sinStock ? 'Sin stock' : `Stock: ${stock}`}
            </small>
        </p>
        <button
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={sinStock}
        >
            Agregar
        </button>
        </div>
    </div>
    );
}

export default ProductCard;