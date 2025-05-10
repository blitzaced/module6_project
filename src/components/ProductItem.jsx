import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className={`product-item ${product.styleClass}`}>
      <h2 className="product-name">{product.name}</h2>
      <p className="price">{product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default ProductItem;

