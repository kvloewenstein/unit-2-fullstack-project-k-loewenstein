import { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList({ skinType, skinCondition }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/products/recommendations?skinType=${skinType}&skinCondition=${skinCondition}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load recommendations");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [skinType, skinCondition]);

  if (loading) return <p>Loading recommendations...</p>;
  if (error) return <p>{error}</p>;

  // Separate products into categories
  const cleansers = products.filter((p) => p.category === "Cleanser");
  const moisturizers = products.filter((p) => p.category === "Moisturizer");

  return (
    <div className="recommendations-wrapper">
      <div className="recommendations">
      {cleansers.length > 0 && (
        <section className="cleansers">
          <h3>Cleansers</h3>
          <div className="product-list">
            {cleansers.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h5>{product.name}</h5>
                <a href={product.productLink} target="_blank" rel="noopener noreferrer">
                  View Product
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {moisturizers.length > 0 && (
        <section className="moisturizers">
          <h3>Moisturizers</h3>
          <div className="product-list">
            {moisturizers.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h5>{product.name}</h5>
                <a href={product.productLink} target="_blank" rel="noopener noreferrer">
                  View Product
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
      <p className="save-message">
        Save These to Your Profile & Track What Product Worked Best for You!
      </p>
    </div>
  );
}

export default ProductList;