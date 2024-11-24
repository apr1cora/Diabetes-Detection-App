import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SkinThicknessPage = ({ setSkinThickness }) => {
    const [skinThickness, setSkinThicknessInput] = useState(''); // Local state for input
    const navigate = useNavigate();

    const handleNext = () => {
        setSkinThickness(skinThickness); // Save the skin thickness to App.js state
        navigate('/insulin'); // Navigate to the next page
    };

    return (
        <div className="container">
            <h1>Enter Your Skin Thickness</h1>
            <p>Please follow these steps to measure your skin thickness:</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Measurement Tool:</strong> Use a caliper or a similar device to accurately measure the thickness of your skin.
                </li>
                <li>
                    <strong>Location:</strong> Measure the skin thickness on your abdomen or tricep for consistency.
                </li>
                <li>
                    <strong>Input Value:</strong> Enter your skin thickness measurement in millimeters (mm).
                </li>
                <li>
                    <strong>Submit:</strong> After entering the value, click the "Next" button to proceed to the next step.
                </li>
                <li>
                    <strong>Understanding Measurements:</strong> Skin thickness can vary by individual. Ensure that the measurement is taken consistently for accurate results.
                </li>
            </ul>
            <p>Click <strong>"Next"</strong> to continue!</p>
            <input
                type="number"
                value={skinThickness}
                onChange={(e) => setSkinThicknessInput(e.target.value)} // Update local input
                placeholder="Enter skin thickness (mm)"
            />
            <button onClick={handleNext} disabled={!skinThickness}>Next</button> {/* Disable if no input */}
        </div>
    );
};

export default SkinThicknessPage;
