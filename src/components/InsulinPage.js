import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InsulinPage = ({ setInsulin }) => {
    const [insulin, setInsulinInput] = useState(''); // Local state for input
    const navigate = useNavigate();

    const handleNext = () => {
        setInsulin(insulin); // Save the insulin value to App.js state
        navigate('/result'); // Navigate to the result page
    };

    return (
        <div className="container">
            <h1>Enter Your Insulin Level</h1>
            <p>Please follow these steps to input your insulin level:</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Measurement:</strong> Use a reliable method to measure your insulin level, ideally from a lab test result.
                </li>
                <li>
                    <strong>Input Value:</strong> Enter your insulin level in micro-units per milliliter (µU/mL).
                </li>
                <li>
                    <strong>Accuracy:</strong> Ensure the value is entered accurately to provide correct information for analysis.
                </li>
                <li>
                    <strong>Submit:</strong> After entering the value, click the "Next" button to proceed to the result page.
                </li>
                <li>
                    <strong>Consultation:</strong> If you're unsure about your insulin levels, consult a healthcare professional for guidance.
                </li>
            </ul>
            <p>Click <strong>"Next"</strong> to continue!</p>
            <input
                type="number"
                value={insulin}
                onChange={(e) => setInsulinInput(e.target.value)} // Update local input
                placeholder="Enter insulin level"
            />
            <button onClick={handleNext} disabled={!insulin}>Next</button> {/* Disable if no input */}
        </div>
    );
};

export default InsulinPage;
