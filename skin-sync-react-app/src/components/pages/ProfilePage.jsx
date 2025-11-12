import { useEffect, useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notes, setNotes] = useState("");
  const userId = localStorage.getItem("userId");

  // Fetch saved products from backend
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError("No user ID found.");
      return;
    }

    const fetchSavedProducts = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/saved/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch saved products.");

        const data = await res.json();
        setSavedProducts(data);
      } catch (err) {
        console.error(err);
        setError("Could not load saved products.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProducts();
  }, [userId]);


  const cleansers = savedProducts.filter(p => p.category === "Cleanser");
  const moisturizers = savedProducts.filter(p => p.category === "Moisturizer");


  const handleFeedbackChange = async (savedId, feedback) => {
    try {
      await fetch(`http://localhost:8080/api/saved/${savedId}/feedback`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });


      setSavedProducts(prev =>
        prev.map(item =>
          item.id === savedId ? { ...item, userFeedback: feedback } : item
        )
      );
    } catch (err) {
      console.error("Error saving feedback:", err);
    }
  };


  const handleAddNote = async () => {
    if (!notes.trim() || savedProducts.length === 0) return;

    try {
      const savedId = savedProducts[0].id;

      await fetch(`http://localhost:8080/api/saved/${savedId}/notes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: notes.trim() }),
      });

      setNotes("");          
      fetchSavedProducts();  
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  const handleClearTextarea = () => setNotes("");

  if (loading) return <p>Loading your saved products...</p>;
  if (error) return <p>{error}</p>;

  // Render card using flat DTO fields
  const renderProductCard = (saved) => (
    <div className="saved-item" key={saved.id}>
      <img src={saved.imageUrl} alt={saved.productName} />
      <div className="info">
        <p className="product-name">{saved.productName}</p>
        <a href={saved.productLink} target="_blank" rel="noopener noreferrer">View Product</a>
        <div className="feedback-options">
          {["Worked Well", "Not Effective", "Developed A Reaction", "Haven’t Tried Yet"].map(option => (
            <label key={option}>
              <input
                type="radio"
                name={`fb-${saved.id}`}
                checked={saved.userFeedback === option}
                onChange={() => handleFeedbackChange(saved.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-container">
      <h1 className="welcome-title">Welcome Back!</h1>

      <section className="skin-profile">
        <p>Your Skin Profile:</p>
        <p>Skin Type: <strong>{localStorage.getItem("skinType") || "N/A"}</strong></p>
        <p>Skin Condition: <strong>{localStorage.getItem("skinCondition") || "N/A"}</strong></p>
      </section>

      <h2 className="section-title">Saved Products:</h2>
      <div className="product-columns">
        <div className="column-box">
          <h3>Cleansers</h3>
          {cleansers.length > 0 ? cleansers.map(renderProductCard) : <p>No saved cleansers yet.</p>}
        </div>

        <div className="column-box">
          <h3>Moisturizers</h3>
          {moisturizers.length > 0 ? moisturizers.map(renderProductCard) : <p>No saved moisturizers yet.</p>}
        </div>
      </div>

      <div className="notes-section">
        <h3>Add Notes About Products:</h3>
        <textarea
          placeholder="Start typing here..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <div className="btn-row">
          <button className="clear-btn" onClick={handleClearTextarea}>Clear</button>
          {savedProducts.length > 0 && (
            <button
              className="submit-btn"
              onClick={handleAddNote}
              disabled={notes.trim() === "" || savedProducts.length === 0}>
              Submit Notes
            </button>
          )}
        </div>

        <h4 className="notes-title">Notes:</h4>
        <ul className="saved-notes">
          {savedProducts[0]?.notes && savedProducts[0].notes.trim() !== "" ? (
            <li>{savedProducts[0].notes}</li>
          ) : (
            <li>No notes added yet.</li>
          )}
        </ul>

      </div>
    </div>
  );
}

export default ProfilePage;
