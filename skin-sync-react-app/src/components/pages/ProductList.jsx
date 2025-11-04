import { useEffect, useState } from "react";

function ProductList({ skinType, skinConditions }) {
  const [recommendations, setRecommendations] = useState([]);
  const skinCondition = skinConditions[0]; // since it's a single selection now

  useEffect(() => {
    if (!skinType || !skinCondition) return;

    fetch(`http://localhost:8080/api/products/recommendations?skinType=${skinType}&skinCondition=${skinCondition}`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [skinType, skinCondition]);

  // Group results by category
  const categories = recommendations.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
  }, {});

  return (
    <section className="results-container">
      {["cleanser", "moisturizer", "topicals"].map((cat) => (
        <div className="product-column" key={cat}>
          <h3 className="column-title">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
          <ul>
            {categories[cat]?.length > 0 ? (
              categories[cat].map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>No {cat} suggestions</li>
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default ProductList;