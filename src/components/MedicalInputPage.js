import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicalInputPage.css'; // Import the CSS file

const MedicalInputPage = ({ setMedicalInputs }) => {
    const [glucose, setGlucose] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        setMedicalInputs({ glucose, bloodPressure });
        navigate('/insulin'); // Navigate to the insulin page
    };

    return (
        <div className="container">
            <h1>Enter Medical Inputs</h1>
            <input
                type="number"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                placeholder="Enter your glucose level (mg/dL)"
            />
            <input
                type="number"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                placeholder="Enter your blood pressure (mmHg)"
            />
            <button onClick={handleNext} disabled={!glucose || !bloodPressure}>Next</button>
        </div>
    );
};

export default MedicalInputPage;
