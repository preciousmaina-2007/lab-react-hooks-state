import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Apple", category: "Fruits" },
];

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }
  return (
    <div className="product-list">
     
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
      ))}
    </div>
  );
}

export default ProductList;
