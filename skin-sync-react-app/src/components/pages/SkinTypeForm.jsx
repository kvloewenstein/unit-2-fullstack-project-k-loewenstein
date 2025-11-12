import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import ProductList from "./ProductList";
import "./SkinTypeForm.css";

const SKIN_TYPES = ["Dry", "Oily", "Combination"];
const SKIN_CONDITIONS = [
    "None",
    "Acne Prone",
    "Rosacea",
    "Seborrheic Dermatitis",
    "Contact Dermatitis",
    "Psoriasis",
];

function SkinTypeForm() {
    const [skinType, setSkinType] = useState("");
    const [skinCondition, setSkinCondition] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [productIds, setProductIds] = useState([]);
    const firstRadioRef = useRef(null);



    useEffect(() => {
        if (firstRadioRef.current) {
            firstRadioRef.current.focus();
        }
    }, []);

    // Update skin type when a radio button is clicked
    const handleSkinTypeChange = (e) => {
        setSkinType(e.target.value);
    };

    // Update skin condition when a radio button is clicked
    const handleConditionChange = (e) => {
        setSkinCondition(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (skinType && skinCondition) {
            setSubmitted(true);
        }
    };

    // Clear and reset everything
    const handleClear = () => {
        setSkinType("");
        setSkinCondition("");
        setSubmitted(false);
        if (firstRadioRef.current) {
            firstRadioRef.current.focus();
        }
    };
    const handleSaveAll = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId || productIds.length === 0) return alert("No products to save");

    const res = await fetch("http://localhost:8080/api/saved/bulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: Number(userId), productIds }),
    });

    const msg = await res.text();
    alert(msg);
  };
    

    return (
        <main className="form-wrap" >
            <section className={submitted ? "form-box result-container" : "form-box"}>
                {/* Show different heading depending on form or results */}
                <h2>
                    {submitted ? "Here Are Your Recommendations" : "Choose Your Skin Info"}
                </h2>

                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Skin Type Section */}
                        <section className="skin-type">
                            <fieldset>
                                <legend>Skin Type:</legend>
                                {SKIN_TYPES.map((type, index) => (
                                    <label key={type} style={{ marginRight: "1rem" }}>
                                        <input
                                            type="radio"
                                            name="skinType"
                                            value={type}
                                            checked={skinType === type}
                                            onChange={handleSkinTypeChange}
                                            ref={index === 0 ? firstRadioRef : null}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </fieldset>
                        </section>

                        {/* Skin Conditions Section */}
                        <section className="conditions" style={{ marginTop: "1rem" }}>
                            <fieldset>
                                <legend>Skin Condition:</legend>
                                {SKIN_CONDITIONS.map((cond) => (
                                    <label
                                        key={cond}
                                        style={{ display: "block", marginBottom: "0.25rem" }}
                                    >
                                        <input
                                            type="radio"
                                            name="skinCondition"
                                            value={cond}
                                            checked={skinCondition === cond}
                                            onChange={handleConditionChange}
                                        />
                                        {cond}
                                    </label>
                                ))}
                            </fieldset>
                        </section>

                        {/* Submit & Clear Buttons */}
                        <div style={{ marginTop: "1.5rem" }}>
                            <Button type="submit" disabled={!skinType || !skinCondition}>
                                Submit
                            </Button>
                            <Button type="button" onClick={handleClear}>
                                Clear
                            </Button>
                        </div>
                    </form>
                ) : (
                    <>
                        <ProductList skinType={skinType} skinCondition={skinCondition} setProductIds={setProductIds} />
                        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                            <Button type="button" onClick={handleSaveAll} disabled={!productIds.length}>
                                Save to profile
                            </Button>
                            <Button type="button" onClick={handleClear}>
                                Start Over
                            </Button>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}

export default SkinTypeForm;