function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
    <div className={`card ${sinStock ? 'border-danger bg-light' : ''}`} style={{ width: '18rem' }}>
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>
        <p className="card-text">
            <small className={sinStock ? 'text-danger' : 'text-muted'}>
            {sinStock ? 'Sin stock' : `Stock: ${stock}`}
            </small>
        </p>
        <button className="btn btn-primary" disabled={sinStock}>
            Agregar
        </button>
        </div>
    </div>
    );
}

export default ProductCard;