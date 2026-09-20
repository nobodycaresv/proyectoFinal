function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
    <div className={`card ${sinStock ? 'has-background-danger-light has-border-danger' : ''}`} style={{ width: '18rem', border: sinStock ? '2px solid #ff3860' : undefined }}>
        <div className="card-image">
        <figure className="image is-4by3">
            <img src={imagen} alt={nombre} />
        </figure>
        </div>
        <div className="card-content">
        <p className="title is-5">{nombre}</p>
        <p className="subtitle is-6">${precio}</p>
        <p className={sinStock ? 'has-text-danger' : 'has-text-grey'}>
            {sinStock ? 'Sin stock' : `Stock: ${stock}`}
        </p>
        <button className="button is-link" disabled={sinStock}>
            Agregar
        </button>
        </div>
    </div>
    );
}

export default ProductCard;