
const Cart = ({ cart, isOpen, onClose, onRemove, onIncrease, onDecrease }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-drawer ${isOpen ? "cart-drawer--open" : ""}`}>
        <div className="cart-drawer__header">
          <h3>Mon Panier</h3>
          <button className="cart-drawer__close" onClick={onClose}>
            ✕
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="cart-drawer__empty">Votre panier est vide.</p>
        ) : (
          <div className="cart-drawer__items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__img" />
                <div className="cart-item__info">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">{item.price} MAD</p>
                  <div className="cart-item__qty">
                    <button onClick={() => onDecrease(item)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onIncrease(item)}>+</button>
                  </div>
                </div>
                <button className="cart-item__remove" onClick={() => onRemove(item)}>
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>Total</span>
              <strong>{total} MAD</strong>
            </div>
            <button className="cart-drawer__checkout">Commander</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;