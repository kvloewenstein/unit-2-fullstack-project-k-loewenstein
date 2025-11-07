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
    const [products, setProducts] = useState([]);
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
    const handleSave = async () => {
        if (!products.length) return;
        try {
            const payload = products.map((p) => ({
                user: { id: userId },  // link user
                product: { id: p.id },
            }));
            await fetch("http://localhost:8080/api/saved/bulk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            alert("Products saved to your profile!");
        } catch (err) {
            console.error("Error saving products:", err);
            alert("Failed to save products.");
        }
    };

    return (
        <main className="form-wrap">
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
                        <ProductList skinType={skinType} skinCondition={skinCondition} setProducts={setProducts} />
                        <div style={{ marginTop: "1rem" }}>
                            <Button type="button" onClick={handleSave} disabled={!products.length}>
                                Save
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