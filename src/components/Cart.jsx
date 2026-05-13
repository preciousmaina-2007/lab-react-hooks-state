function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} is in your cart
        </p>
      ))}
    </div>
  );
}

export default Cart;