import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AgePage.css'; // Import the CSS file

const AgePage = ({ setAge }) => {
    const [age, setAgeInput] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        setAge(age);
        navigate('/bmi');
    };

    return (
        <div className="container">
            <h1>Enter Your Age</h1>
            <p>Please provide your age to help us assess your diabetes risk accurately.</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Why Your Age Matters:</strong> Age is a significant factor in evaluating diabetes risk.
                </li>
                <li>
                    <strong>How to Enter:</strong> Input your age in years using the provided input field.
                </li>
                <li>
                    <strong>Important:</strong> Ensure the age you enter is accurate for the best results.
                </li>
            </ul>
            <p>After entering your age, click <strong>"Next"</strong> to proceed to the BMI input.</p>
            <input
                type="number"
                value={age}
                onChange={(e) => setAgeInput(e.target.value)}
                placeholder="Enter your age"
            />
            <button onClick={handleNext} disabled={!age}>Next</button>
        </div>
    );
};

export default AgePage;
