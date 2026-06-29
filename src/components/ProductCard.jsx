
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <span className="product-card__badge">Nouveau</span>
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card__body">
        <div className="product-card__category">{product.category}</div>
        <h3 className="product-card__title">{product.name}</h3>

        <div className="product-card__stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= product.rating ? "star" : "star star--empty"}
            >
              ★
            </span>
          ))}
          <span className="product-card__reviews">({product.reviews} avis)</span>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__price">
            {product.price} MAD
            {product.oldPrice && (
              <span className="product-card__old-price">{product.oldPrice} MAD</span>
            )}
          </div>
          <button
            className="product-card__btn"
            onClick={() => onAddToCart(product)}
          >
            🛒 Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;