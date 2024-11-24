import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenderPage.css'; // Import the CSS file

const GenderPage = ({ setGender }) => {
    const [gender, setGenderInput] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        setGender(gender); // Set the gender state
        navigate('/age');  // Navigate to the next page
    };

    return (
        <div className="container">
            <h1>Select Your Gender</h1>
            <label htmlFor="gender">
            <p>Please select your gender to help us personalize your diabetes risk Prediction.</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Why This Matters:</strong> Gender can influence your risk of developing diabetes.
                </li>
                <li>
                    <strong>How to Select:</strong> Click on the option that best represents your gender.
                </li>
            </ul>
            <p>Once you’ve made your selection, click <strong>"Next"</strong> to proceed to the age input.</p></label>
            <select
                id="gender"
                value={gender}
                onChange={(e) => setGenderInput(e.target.value)}
            >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button onClick={handleNext} disabled={!gender}>Next</button>
        </div>
    );
};

export default GenderPage;
